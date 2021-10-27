<script>
    import monikers from '../../../game/monikers';
    import helper from '../../../utilities/helper';

    import Title from '../../../components/games/monikers/Title.svelte';
    import Instructions from '../../../components/games/monikers/Instructions.svelte';
    import JoinRoom from '../../../components/games/monikers/JoinRoom.svelte';
    import Setup from '../../../components/games/monikers/Setup.svelte';
    import ClueInput from '.../../../components/games/monikers/ClueInput.svelte';
    import RoundStart from '../../../components/games/monikers/RoundStart.svelte';
    import Round from '../../../components/games/monikers/Round.svelte';
    import Scores from '../../../components/games/monikers/Scores.svelte';
    import GameEnd from '../../../components/games/monikers/GameEnd.svelte';

    import io from "socket.io-client";
    const socket = io();
    socket.emit('init_monikers');

    const GAME_STATES = {
        title: 'title',
        instructions: 'instructions',
        join: 'join',
        setup: 'setup',
        addClues: 'addClues',
        roundStart: 'roundStart',
        round: 'round',
        scores: 'scores',
        gameEnd: 'gameEnd'
    };
    let game = {
        state: GAME_STATES.title,
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
            round: 0,
            curated: false,
            createClues: true,
            onePhone: false,
            numRounds: 3,
            numPlayers: 3,
            cardsPerPlayer: 5,
            roundTime: 60,
            includeTypes: ['ET CETERA', 'FICTIONAL CHARACTER', 'CELEBRITY', 'HISTORICAL FIGURE']
        }
    };

    // common variables
    $: activeTeam = game.teams.find(t => t.active);
    let roundEnded = false;
    $: gameEnded = game.settings.round >= game.settings.numRounds;

    // get deck
    const allCards = monikers.cards;
    let gameDeck = [];
    let cards = [];

    // room
    let room = null;
    

    function setGameState(gs) { 
        goToGameState(GAME_STATES[gs.detail]);
    }

    function goToGameState(gs) {
        game.state = gs;

        switch (game.state) {
            case GAME_STATES.title:
                reset();
                break;
        }
    }

    function roundEnd(updatedScore) {
        roundEnded = true;
        updateAndShowScores(updatedScore.detail);
    }

    function turnEnd(updatedScore) {
        roundEnded = false;
        updateAndShowScores(updatedScore.detail);
    }

    function updateAndShowScores(updatedScore) {
        activeTeam.points = updatedScore;
        goToGameState(GAME_STATES.scores);
    }

    function gameStart() {
        if (game.settings.createClues) {
            socket.emit('request_createRoom');
            goToGameState(GAME_STATES.addClues);
        }
        else {
            // select the deck of cards
            helper.shuffleArray(allCards);
            gameDeck = allCards.slice(0, game.settings.numPlayers * game.settings.cardsPerPlayer);
            cards = [...gameDeck];
        }

        // set a random active team
        game.teams.forEach(t => t.active = false);
        const randomTeamIndex = Math.floor(Math.random() * game.teams.length);
        game.teams[randomTeamIndex].active = true;

        // start first round
        roundStart();
    }

    function turnStart() {
        setNextTeamActive();
        goToGameState(GAME_STATES.round);
    }

    function roundStart() {
        game.settings.round++;
        if (game.settings.round > game.settings.numRounds) {
            game.state = GAME_STATES.gameEnd;
        }
        else {
            // get deck back and shuffle
            cards = [...gameDeck];
            helper.shuffleArray(cards);
            // activate next team
            setNextTeamActive();
            // start the next round
            goToGameState(GAME_STATES.roundStart);
        }
    }

    function setNextTeamActive() {
        let activeTeamIndex = game.teams.length;
        for (let i = 0; i < game.teams.length; i++) {
            if (game.teams[i].active) { activeTeamIndex = i; game.teams[i].active = false; break; }
        }
        activeTeamIndex++; if (activeTeamIndex >= game.teams.length) activeTeamIndex = 0;
        game.teams[activeTeamIndex].active = true;
    }

    function getWinningTeams() {
        let winners = [game.teams[0]];
        for (let i = 1; i < game.teams.length; i++) {
            if (game.teams[i].points > winners[0].points) {
                winners = [game.teams[i]];
            }
            else if (game.teams[i].points == winners[0].points) {
                winners.push(game.teams[i]);
            }
        }
        return winners;
    }

    function reset() {
        game.teams.forEach(t => t.active = false);
    }
    


    function addRandomCard() {
        let randomCard = allCards.pop();
        cards.push(randomCard);
    }

    
    socket.on('response_createRoom', function(roomCode) {
        console.log('response_createRoom', roomCode);
        room = roomCode;
        socket.emit('request_addPlayerToRoom', room);
    });

    function joinRoom(data) {
        room = data.detail;
        socket.emit('request_addPlayerToRoom', room);
    }

</script>


<main class="monikers">
    {#if game.state == GAME_STATES.title}
    <Title on:setGameState={setGameState}></Title>
    {:else if game.state == GAME_STATES.instructions}
    <Instructions on:setGameState={setGameState}></Instructions>
    {:else if game.state == GAME_STATES.join}
    <JoinRoom on:joinRoom={joinRoom}></JoinRoom>
    {:else if game.state == GAME_STATES.setup}
    <Setup on:gameStart={gameStart} bind:settings={game.settings} possibleNumRounds={monikers.rounds.length}></Setup>
    {:else if game.state == GAME_STATES.addClues}
    <ClueInput roomCode={room}></ClueInput>
    {:else if game.state == GAME_STATES.roundStart}
    <RoundStart on:setGameState={setGameState} activeTeam={activeTeam} settings={game.settings} roundsText={monikers.rounds}></RoundStart>
    {:else if game.state == GAME_STATES.round}
    <Round on:roundEnd={roundEnd} on:turnEnd={turnEnd} bind:cards={cards} activeTeam={activeTeam} settings={game.settings} pointColors={monikers.pointColors}></Round>
    {:else if game.state == GAME_STATES.scores}
    <Scores on:turnStart={turnStart} on:roundStart={roundStart} on:setGameState={setGameState} teams={game.teams} round={game.settings.round} roundEnd={roundEnded} gameEnd={gameEnded}></Scores>
    {:else if game.state == GAME_STATES.gameEnd}
    <GameEnd on:setGameState={setGameState} teams={getWinningTeams()}></GameEnd>
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