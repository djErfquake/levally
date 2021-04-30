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
    let gameState = GAME_STATES.title;
    function setGameState(gs) {
        console.log('setgamestate', gs);
        gameState = GAME_STATES[gs.detail];
    }
    

</script>


<main class="monikers">
    {#if gameState == GAME_STATES.title}
    <Title on:setGameState={setGameState}></Title>
    {:else if gameState == GAME_STATES.instructions}
    <Instructions on:setGameState={setGameState}></Instructions>
    {:else if gameState == GAME_STATES.setup}
    <Setup></Setup>
    {:else if gameState == GAME_STATES.roundStart}
    <RoundStart></RoundStart>
    {:else if gameState == GAME_STATES.round}
    <Round></Round>
    {:else if gameState == GAME_STATES.roundEnd}
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