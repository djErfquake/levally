<script>
    import helper from '../../../utilities/helper';

    import Button from '../../common/JiggleButton.svelte';
    import Timer from './components/Timer.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();



    export let settings;
    export let cards;
    export let activeTeam;
    export let pointColors;
    // $: console.table(cards);

    let card;
    pickCard();


    
    function pickCard() {
        if (cards.length > 0) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            card = cards[randomIndex];
            cards.splice(randomIndex, 1);
        }
        else {
            showScores(true);
        }
    }

    function addCard(c) {
        cards.push(c);
        // helper.shuffleArray(cards);
    }


    function showScores(roundEnd) {
        let command = roundEnd ? 'roundEnd' : 'turnEnd';
        dispatch(command, activeTeam.points);
    }


    function timesUp() {
        addCard(card);
        showScores(false);
    }

    function gotIt() {
        activeTeam.points += card.pointValue;
        pickCard();
    }

    function pass() {
        addCard(card);
        pickCard();
    }
    
    
</script>

<main class="round-container">
    <Timer time={settings.roundTime} color={activeTeam.color} on:timesUp={timesUp}></Timer>
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
        margin: 10vh;
        font-size: 2vh;
    }

    .buttons {
        text-align: center;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-bottom: 20px;
    }

</style>