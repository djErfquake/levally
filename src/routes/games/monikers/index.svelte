<script>
    import monikers from '../../../game/monikers';

    import Title from '../../../components/games/monikers/Title.svelte';
    import Instructions from '../../../components/games/monikers/Instructions.svelte';
    import Setup from '../../../components/games/monikers/Setup.svelte';
    import RoundStart from '../../../components/games/monikers/RoundStart.svelte';
    import Round from '../../../components/games/monikers/Round.svelte';
    import RoundEnd from '../../../components/games/monikers/RoundEnd.svelte';

    const GAME_STATES = {
        title: 'title',
        setup: 'setup',
        roundStart: 'roundStart',
        round: 'round',
        roundEnd: 'roundEnd',
        instructions: 'instructions',
        gameEnd: 'gameEnd'
    };
    let game = {
        state: GAME_STATES.title,
        round: 0,
        teams: [
            {
                name: "red",
                color: "#d36157",
                points: 0,
                active: false
            },
            {
                name: "blue",
                color: "#8db5bb",
                points: 0,
                active: false
            }
        ],
        settings: {
            curated: false,
            onePhone: true,
            numRounds: 3,
            numPlayers: 10,
            cardsPerPlayer: 5,
            roundTime: 60,
            includeTypes: ['ET CETERA', 'FICTIONAL CHARACTER', 'CELEBRITY', 'HISTORICAL FIGURE']
        }
    };
    const cards = monikers.cards;
    shuffleArray(cards);

    function setGameState(gs) { 
        game.state = GAME_STATES[gs.detail];

        switch (game.state) {
            case GAME_STATES.roundStart:
                // go to the next round
                game.round++;
                if (game.round > game.settings.numRounds) {
                    game.state = GAME_STATES.gameEnd;
                }
                // set a random active team
                game.teams.forEach(t => t.active = false);
                const randomTeamIndex = Math.floor(Math.random() * game.teams.length);
                game.teams[randomTeamIndex].active = true;
                break;
        }
    }

    function roundEnd(teams) {
        for (let i = 0; i < teams.length; i++) {
            game.teams[i].score = teams[i].score;
        }
        // setGameState('roundEnd');
    }
    

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

</script>


<main class="monikers">
    {#if game.state == GAME_STATES.title}
    <Title on:setGameState={setGameState}></Title>
    {:else if game.state == GAME_STATES.instructions}
    <Instructions on:setGameState={setGameState}></Instructions>
    {:else if game.state == GAME_STATES.setup}
    <Setup on:setGameState={setGameState} bind:settings={game.settings}></Setup>
    {:else if game.state == GAME_STATES.roundStart}
    <RoundStart on:setGameState={setGameState} game={game} roundsText={monikers.rounds}></RoundStart>
    {:else if game.state == GAME_STATES.round}
    <Round on:roundEnd={roundEnd} game={game} cards={cards} pointColors={monikers.pointColors}></Round>
    {:else if game.state == GAME_STATES.roundEnd}
    <RoundEnd></RoundEnd>
    {:else}
        Error!
    {/if}

    <!-- {JSON.stringify(game)} -->
</main>


<style>
    /* :global(html) {
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
    } */
</style>