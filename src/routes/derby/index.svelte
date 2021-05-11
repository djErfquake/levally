<script>

    /* 
        colors
        #1e6f5c
        #289672
        #29bb89
        #e6dd3b

        icons
        https://fontawesome.com/icons/horse-head?style=solid
    */
    import io from "socket.io-client";

    const GAME_STATES = {
        setup: 0,
        bets: 1,
        bet: 2,
        selectWinner: 3,
        payouts: 4
    };
    let game = {
        state: GAME_STATES.setup,
        winner: null,
        horses : [
            { name: "", bets: {} },
            { name: "", bets: {} },
            { name: "", bets: {} },
            { name: "", bets: {} },
            { name: "", bets: {} },
            { name: "", bets: {} }
        ]
    };
    let currentBet = { horse: -1, name: "", amount: 1 };
    // $: BET_TOTAL = game.horses.reduce((ha, hb) => ha + Object.values(hb.bets).reduce((ba, bb) => ba + bb.amount));

    const socket = io();
    socket.emit('init_derby');


    function next() {
        switch (game.state) {
            case GAME_STATES.setup:
                updateDisplay();
                break;
            case GAME_STATES.bets:
                game.state = GAME_STATES.selectWinner;
                updateDisplay();
                return;
                break;
            case GAME_STATES.selectWinner:
                game.horses[game.winner].winner = true;
                updateDisplay();
                break;
            case GAME_STATES.payouts:
                reset();
                return;
                break;
        }

        game.state++;
    }

    function back() {
        switch (game.state) {
            case GAME_STATES.bet:
            case GAME_STATES.selectWinner:
                game.state = GAME_STATES.bets;
                return;
                break;
            case GAME_STATES.payouts:
                game.horses[game.winner].winner = false;
                updateDisplay();
                break;
        }

        game.state--;
    }

    function placeBet(index) {
        currentBet.horse = index; currentBet.name = ""; currentBet.amount = 0;
        game.state = GAME_STATES.bet;
    }

    function submitBet() {
        console.log(`${currentBet.name} placed a $${currentBet.amount} bet on ${game.horses[currentBet.horse].name}`);
        if (game.horses[currentBet.horse].bets.hasOwnProperty(currentBet.name)) 
            game.horses[currentBet.horse].bets[currentBet.name] += currentBet.amount;
        else 
            game.horses[currentBet.horse].bets[currentBet.name] = currentBet.amount;

            
        game.state = GAME_STATES.bets;
        updateDisplay();
    }

    function selectWinner(index) {
        game.winner = index;
        next();
    }

    function calculateWinnings(better) {
        let totalWinnings = 0;
        game.horses.forEach(h => {
            totalWinnings += Object.values(h.bets).reduce((b, bi) => b + bi, 0);
        });
        const winningHorseTotal = Object.values(game.horses[game.winner].bets).reduce((b, bi) => b + bi, 0);
        const percentageOfWinnings = game.horses[game.winner].bets[better] / winningHorseTotal;
        const winnings = percentageOfWinnings * totalWinnings;
        const roundedWinnings = (Math.round((winnings + Number.EPSILON) * 100) / 100).toFixed(2);
        return roundedWinnings;
    }

    function reset() {
        game.state = GAME_STATES.setup;
        game.winner = null;
        game.horses.forEach(h => {
            h.name = "";
            h.bets = {};
            h.winner = false;
        });
        updateDisplay();
    }

    function updateDisplay() {
        socket.emit('update', game.horses);
        console.log('updating display', game.horses);
    }

</script>

<main>

    {#if game.state == GAME_STATES.setup}
    <div class="setup-screen screen">
        <h1>Enter Horse Names</h1>
        <div class="horse-container">
            {#each game.horses as horse, index}
            <div class="horse-component">
                Horse {index + 1}: <input bind:value={horse.name}>
            </div>
            {/each}
        </div>
    </div>
    {:else if game.state == GAME_STATES.bets}
    <div class="bets-screen screen">
        <h1>Place Bets</h1>
        <div class="horse-container">
            {#each game.horses as horse, index}
            <div class="horse-component">
                <div class="bet-button button" on:click={() => placeBet(index)}>
                    <div class="button-text">{horse.name}</div>
                </div>
            </div>
            {/each}
        </div>
    </div>
    {:else if game.state == GAME_STATES.bet}
    <div class="bet-screen screen">
        <h1>Enter Bet</h1>
        <div class="bet-component">
            <div class="bet-variable">
                <div class="bet-variable-name">Name</div>
                <input bind:value={currentBet.name}>
            </div>
            <div class="bet-variable">
                <div class="bet-variable-name">Amount</div>
                <input type=number bind:value={currentBet.amount} min=1>
            </div>
        </div>
        <div class="button submit-bet-button" on:click={submitBet}>Place Bet</div>
    </div>
    {:else if game.state == GAME_STATES.selectWinner}
    <div class="bet-screen screen">
        <h1>Select Winner</h1>
        <div class="horse-container">
            {#each game.horses as horse, index}
            <div class="horse-component">
                <div class="bet-button button" on:click={() => selectWinner(index)}>
                    <div class="button-text">{horse.name}</div>
                </div>
            </div>
            {/each}
        </div>
    </div>
    {:else if game.state == GAME_STATES.payouts}
    <div class="payouts-screen screen">
        <h1>Payouts</h1>
        <h2>{game.horses[game.winner].name} wins!</h2>
        {#if Object.keys(game.horses[game.winner].bets).length > 0}
        {#each Object.keys(game.horses[game.winner].bets) as better}
        <div class="payout">{better} wins ${calculateWinnings(better)}</div>
        {/each}
        {:else}
        <div class="payout">Nobody wins anything!</div>
        {/if}
    </div>
    {:else}
    <div class="error-screen screen">
        <h1>Uh oh. Something went wrong...</h1>
    </div>
    {/if}


    <div class="bottom-buttons">
        {#if game.state > GAME_STATES.setup}
            <div class="back-button bottom-button button" on:click={back}>Back</div>
        {/if}
        {#if game.state != GAME_STATES.bet && game.state != GAME_STATES.selectWinner}
            <div class="next-button bottom-button button" on:click={next}>{game.state == GAME_STATES.payouts ? "Again?" : "Next"}</div>
        {/if}
    </div>
</main>


<style>
    :global(html) {
        height: 100%;
    }

    :global(body) {
        height: 100%;

        background-color: #289672;
        background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5ecc2' fill-opacity='0.57'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    :global(#sapper) {
        height: 100%;
    }

    :global(#sapper-container) {
        height: 100%;
    }

    main {
        height: 100%;
        color: white;
    }

    h1 {
        font-size: 7em;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        
        
        /* text-shadow: 2px 2px #e6dd3b; */
        text-shadow: 2px 2px #1e6f5c;
    }

    .screen {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .horse-container {
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        justify-content: center;
        align-items: center;
    }

    .horse-component {
        /* width: 30%; */
        font-size: 3em;
        display: flex;
        flex-wrap: nowrap;
        margin: 35px;
    }

    .horse-component input {
        margin-left: 15px;
        font-size: 1em;
        width: 25vw;
    }

    .bottom-buttons {
        position: absolute;
        bottom: 120px;
        width: 100%;
    }

    .button {
        padding: 0.1em;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.15em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 600;
        color:#fff;
        /* text-shadow: 2px 2px #1e6f5c; */
        background-color:#e6dd3b;
        box-shadow: inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
        text-align: center;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button:active {
        top:0.1em;
    }

    .back-button {
        position: absolute;
        left: 80px;
    }

    .next-button {
        position: absolute;
        right: 80px;
    }

    .bottom-button {
        height: 70px;
        width: 200px;
        font-size: 2em;
    }

    .bet-button {
        height: 150px;
        width: 350px;
    }

    .bet-component {
        display: flex;
        flex-wrap: nowrap;

        font-size: 3em;
        display: flex;
        flex-wrap: nowrap;
        margin: 35px;
    }

    .bet-variable {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    .bet-variable input {
        font-size: 1em;
    }

    .submit-bet-button {
        height: 150px;
        width: 550px;
        margin-top: 50px;
        font-size: 4em;
    }

    h2 {
        margin-top: 0;
        font-size: 5em;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        text-shadow: 2px 2px #1e6f5c;
    }

    .payout {
        font-size: 3em;
        font-weight: 600;
    }
</style>