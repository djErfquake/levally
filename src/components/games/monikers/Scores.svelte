<script>
    import Button from '../../common/JiggleButton.svelte';
    import Score from './components/Score.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    export let teams;
    export let round;
    export let roundEnd = false;
    export let gameEnd = false;

    function next() {
        if (gameEnd) {
            dispatch('setGameState', 'gameEnd');
        }
        else if (roundEnd) {
            dispatch('roundStart');
        }
        else {
            dispatch('turnStart');
        }
    }

</script>

<main class="title-container">
    <h1>Scores</h1>
    {#if roundEnd}
    <h2>{`Round ${round} End`}</h2>
    {/if}
    <div class="scores">
        {#each teams as team}
        <Score team={team}></Score>
        {/each}
    </div>
    {#if gameEnd || !roundEnd}
    <div class="buttons">
        <div class="button" on:click={next}><Button text="Continue"></Button></div>
    </div>
    {:else}
    <div class="buttons">
        <div class="button" on:click={next}><Button text="Next Round"></Button></div>
    </div>
    {/if}
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

    h2 {
        text-transform: uppercase;
        font-size: 2vh;
    }

    .scores {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
    }

</style>