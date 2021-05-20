<script>
    import Button from '../../common/JiggleButton.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function start() {
        dispatch('setGameState', 'round');
    }
    
    export let game;
    export let roundsText;
    $: roundText = roundsText[game.round - 1];
    $: firstTeam = game.teams.find(t => t.active);
    
</script>

<main class="roundStart-container">
    <h1>Round {game.round}</h1>
    <div class="instructions">
        <p>{roundText}</p>
        <p>The first team up is the {firstTeam.name} team.</p>
    </div>
    <div class="buttons">
        <div class="button" on:click={start}><Button text="Go!"></Button></div>
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
        font-size: 5em;
        margin-top: 15vh;
        margin-bottom: 5vh;
    }

    .instructions {
        font-size: 1.3em;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 25vh;
        text-align: center;
    }

    .button {
        margin-bottom: 20px;
    }
</style>