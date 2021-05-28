<script>
    import Button from '../../common/JiggleButton.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function start() {
        dispatch('setGameState', 'round');
    }
    
    export let activeTeam;
    export let settings;
    export let roundsText;
    $: roundText = roundsText[settings.round - 1];
    $: totalCards = settings.cardsPerPlayer * settings.numPlayers;
    
</script>

<main class="roundStart-container">
    <h1>Round {settings.round}</h1>
    <div class="instructions">
        <p>Each round, the same {totalCards} monikers will be attempted to guessed by the teams. Each round, the rules get a littler harder, but since the same monikers are used each round, you'll already know them all after the first round, right?</p>
        <p>When your team is up, nominate a person. This person will have {settings.roundTime} seconds to get the rest of their team to guess the moniker. When time is up, their team will be awarded with points for all the correctly guessed monikers, and then the next team will be up.</p>
        <p><span class="round-rules">The rules for this round are that {roundText}</span></p>
        <p>The first team up is the {activeTeam.name} team.</p>
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
        font-size: 7vh;
        margin-top: 15vh;
        margin-bottom: 5vh;
    }

    .instructions {
        font-size: 2vh;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 25vh;
        text-align: center;
        margin: 10vh;
    }

    .round-rules {
        font-weight: 600;
        font-size: 3vh;
    }

    .button {
        margin-bottom: 20px;
    }
</style>