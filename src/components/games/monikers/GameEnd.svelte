<script>
    import Button from '../../common/JiggleButton.svelte';
    import Score from './components/Score.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    export let teams;
    teams.forEach(t => t.active = true);

    function end() {
        dispatch('setGameState', 'title');
    }


</script>

<main class="title-container">
    {#if teams.length == 1}
    <h1>{teams[0].name} team wins!</h1>
    {:else}
    <h1>It's a tie!</h1>
    {/if}
    <div class="scores">
        {#each teams as team}
        <Score team={team}></Score>
        {/each}
    </div>
    <div class="buttons">
        <div class="button" on:click={end}><Button text="Continue"></Button></div>
    </div>
</main>

<style>
    main {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 7vh;
        margin-top: 15vh;
        margin-bottom: 5vh;
    }

    .scores {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
    }

</style>