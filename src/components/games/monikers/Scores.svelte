<script>
    import Button from '../../common/JiggleButton.svelte';

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
        <div class="score">
            <div class="score-label">{team.name}</div>
            <div class="score-points" class:active-team={team.active} style="background-color: {team.color};">
                <div>{team.points}</div>
            </div>
        </div>
        {/each}
    </div>
    {#if !roundEnd}
    <div class="buttons">
        <div class="button" on:click={next}><Button text="Continue"></Button></div>
    </div>
    {:else if gameEnd}
    <div class="buttons">
        <div class="button" on:click={next}><Button text="End Game"></Button></div>
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

    .scores {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        margin: 2vh 10vh 10vh 10vh;
    }

    .score-label {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2.3vh;
        margin-bottom: 2vh
    }

    .score-points {
        border-radius: 50%;
        color: #fff;
        font-weight: 600;
        font-size: 135px;
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
    }

    .active-team {
        box-shadow: 0 0 0 0 rgba(136, 104, 174, 1);
        transform: scale(1);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(136, 104, 174, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(136, 104, 174, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(136, 104, 174, 0);
        }
    }

</style>