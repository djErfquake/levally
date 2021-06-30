<script>
    import Recipes from '../../data/recipes';
    import Toggle from './Toggle.svelte';
    import Button from '../../components/recipes/Button.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let active = false;
    let tags = Recipes.tags.map(t => {return {name: t.name, active: false, color: t.color}});


    function saveFilters() {
        const activeFilters = tags.filter(t => t.active).map(t => t.name);
        dispatch('updateFilters', activeFilters);
        active = false;
    }
    
</script>


<div class="modal" class:inactive={!active}>
    <div class="panel">
        <div class="tags">
            {#each tags as tag}
            <div class="tag" style="background-color: {tag.color};">
                <div class="tag-text">{tag.name}</div>
                <Toggle bind:checked={tag.active}></Toggle>
            </div>
            {/each}
        </div>
        <div class="button" on:click={saveFilters}>
            <Button text="Filter" width="100%"></Button>
        </div>
    </div>
</div>


<style>
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        
        padding: 20vh 0;
        background: rgba(0, 0, 0, 0.66);
    }

    .panel {
        background-color: #fffffe;
        color: #1b2d45;
        width: 60vw;
        margin: auto;
        border-radius: 4px;
        padding-bottom: 5px;
    }

    .tags {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .tag {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 60px;
        margin: 5px;
        padding: 5px;
    }

    .tag-text {
        color: #fff;
        flex-grow: 1;
        margin: 5px;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }

    .inactive {
        display: none;
    }

    @media only screen and (max-width: 700px) {
        .modal {
            padding: 5vh 0;
        }

        .panel {
            width: 90vw;
        }

        .tag {
            width: 165px;
        }
    }
</style>