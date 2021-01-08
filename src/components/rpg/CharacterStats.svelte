<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let character;
    export let dmView = false;

    $: displayHP = character.isPC || dmView ? character.hp : "?";

    function addHP() { character.hp++; updateCharacter(); }
    function removeHP() { character.hp--; updateCharacter(); }
    function kill() { dispatch('killCharacter', character.id); }
    function updateCharacter() {
        dispatch('updateCharacter', character );
    }

    function characterClicked() {
        dispatch('characterClicked', character.id);
    }

</script>


<main class:selected="{character.selected}" on:click={characterClicked}>
    <div class="stat">{@html character.initiative}</div>
    <div class="stat">{@html character.name}</div>
    <div class="stat">{@html displayHP}
        {#if dmView}
        <button on:click={addHP}>+</button> 
        <button on:click={removeHP}>-</button>
        <button on:click={kill}>Kill</button>
        {/if}
    </div>
</main>


<style>
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .stat {
        flex-grow: 1;
        text-align: center;
        align-self: center;
        width: 33%;
    }

    .selected {
        color: white;
        background-color: darkgreen;
    }
</style>