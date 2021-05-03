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

    const GAME_STATES = {
        setup: 0,
        bets: 1,
        bet: 2,
        payouts: 3
    };
    let game = {
        state: GAME_STATES.setup,
        horses: Array(6),
        bets: []
    };

    function next() {
        console.log(game);
    }

</script>

<main>

    {#if game.state == GAME_STATES.setup}
    <div class="setup-screen screen">
        <h1>Enter Horse Names</h1>
        <div class="horse-container">
            {#each game.horses as horse, index}
            <div class="horse-component">
                Horse {index + 1}: <input bind:value={horse}>
            </div>
            {/each}
        </div>
    </div>
    {:else if game.state == GAME_STATES.bets}
    <div class="bets-screen screen">
        <h1>Pace Bets</h1>
    </div>
    {:else if game.state == GAME_STATES.bet}
    <div class="bet-screen screen">
        <h1>Enter Bet</h1>
    </div>
    {:else if game.state == GAME_STATES.payouts}
    <div class="payouts-screen screen">
        <h1>Payouts</h1>
    </div>
    {:else}
    <div class="error-screen screen">
        <h1>Uh oh. Something went wrong...</h1>
    </div>
    {/if}


    <div class="bottom-buttons">
        {#if game.state > GAME_STATES.setup}
            <div class="back-button bottom-button button">Back</div>
        {/if}
        <div class="next-button bottom-button button" on:click={next}>{game.state == GAME_STATES.payouts ? "Again" : "Next"}</div>
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
        display:inline-block;
        padding:0.7em 1.4em;
        margin:0 0.3em 0.3em 0;
        border-radius:0.15em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 600;
        color:#fff;
        /* text-shadow: 2px 2px #1e6f5c; */
        background-color:#e6dd3b;
        box-shadow: inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
        text-align: center;
        font-size: 1.8em;
        user-select: none;
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
    }
</style>