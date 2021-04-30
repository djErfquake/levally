<script>
    import Title from '../../../components/games/monikers/Title.svelte';
    import Instructions from '../../../components/games/monikers/Instructions.svelte';
    import Setup from '../../../components/games/monikers/Setup.svelte';
    import RoundStart from '../../../components/games/monikers/RoundStart.svelte';
    import Round from '../../../components/games/monikers/Round.svelte';
    import RoundEnd from '../../../components/games/monikers/RoundEnd.svelte';

    const GAME_STATES = {
        title: 0,
        setup: 1,
        roundStart: 2,
        round: 3,
        roundEnd: 4,
        instructions: 5
    };
    let game = {
        state: GAME_STATES.title,
        settings: null
    };

    function setGameState(gs) { game.state = GAME_STATES[gs.detail]; }
    function startGame(settings) {
        game.settings = settings.detail;
        console.log('starting game', game.settings);
    }
    

</script>


<main class="monikers">
    {#if game.state == GAME_STATES.title}
    <Title on:setGameState={setGameState}></Title>
    {:else if game.state == GAME_STATES.instructions}
    <Instructions on:setGameState={setGameState}></Instructions>
    {:else if game.state == GAME_STATES.setup}
    <Setup on:startGame={startGame}></Setup>
    {:else if game.state == GAME_STATES.roundStart}
    <RoundStart></RoundStart>
    {:else if game.state == GAME_STATES.round}
    <Round></Round>
    {:else if game.state == GAME_STATES.roundEnd}
    <RoundEnd></RoundEnd>
    {:else}
        Error!
    {/if}
</main>


<style>
    :global(html) {
        height: 100%;
    }

    :global(body) {
        height: 100%;
    }

    :global(#sapper) {
        height: 100%;
    }

    :global(#sapper-container) {
        height: 100%;
    }

    main {
        height: 100%;
        margin: 50px
    }
</style>