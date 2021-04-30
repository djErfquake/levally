<script>
    import Button from '../../common/JiggleButton.svelte';

    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';
    
    function back() {
        dispatch('setGameState', 'title');
    }

</script>

<main class="title-container">
    <h1>Monikers</h1>
    <div class="instructions">
        <p>Monikers is pretty simple: get your friends to guess the name on a card. Each team has 60 seconds to get through as many weird names as they can.</p>
        <p>In the first round, you can say anything you want. In the second, you can only use one word. And in the third, you can't say anything all all — just charades.</p>
        <p>The same cards are used in each round, so by the end of the game, you've made up a bunch of hilarious jokes together.</p>
    </div>
    <div class="buttons">
        <div class="button" on:click={back}><Button text="Back"></Button></div>
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
        margin-bottom: 5vh;
    }

    .instructions {
        font-size: 1.3em;
        margin-left: 50px;
        margin-right: 50px;
        margin-bottom: 25vh;
    }

    .button {
        margin-bottom: 20px;
    }
</style>