<script>
    import Button from '../../common/JiggleButton.svelte';
    import Timer from './components/Timer.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();



    export let game;
    $: activeTeam = game.teams.find(t => t.active);

    export let pointColors;

    export let cards;
    const numCards = game.settings.numPlayers * game.settings.cardsPerPlayer;
    let remainingCards = cards.slice((game.round - 1) * numCards, numCards);
    let card;
    pickCard();


    
    function pickCard() {
        if (remainingCards.length > 0) {
            const randomIndex = Math.floor(Math.random() * remainingCards.length);
            card = remainingCards[randomIndex];
            remainingCards.splice(randomIndex, 1);
        }
        else {
            dispatch('roundEnd', game.teams);
        }
    }

    function timesUp() {
        // turn end
    }

    function gotIt() {

    }

    function pass() {
        
    }
    
    
</script>

<main class="round-container">
    <Timer time={game.settings.roundTime} color={activeTeam.color} on:timesUp={timesUp}></Timer>
    <div class="card">
        <div class="pointValue" style="background-color: {pointColors[card.pointValue]}">{card.pointValue}</div>
        <div class="category">{card.category}</div>
        <div class="name">{card.name}</div>
        <div class="description">{card.description}</div>
    </div>
    <div class="buttons">
        <div class="button" on:click={gotIt}><Button text="Got It"></Button></div>
        <div class="button" on:click={pass}><Button text="Pass"></Button></div>
    </div>
</main>

<style>
    main {
        height: 100%;
    }

    .card {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        margin: 0 10vw;
    }

    .pointValue {
        width: 15vw;
        height: 10vh;
        border-radius: 0 0 50% 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #fff;
        font-size: 6vh;
        font-weight: 600;
    }

    .category {
        text-transform: uppercase;
        font-size: 2vh;
        font-weight: 600;
        margin-top: 2vh;
    }

    .name {
        text-transform: uppercase;
        font-size: 5vh;
        font-weight: 600;
        margin-top: 6vh;
    }

    .description {
        margin-top: 10vh;
    }

    .button {
        margin-bottom: 20px;
    }

</style>