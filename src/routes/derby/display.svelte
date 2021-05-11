<script>

    /* 
        colors
        #1e6f5c
        #289672
        #29bb89
        #e6dd3b

        #d5ecc2
    */

    import io from "socket.io-client";

    import Fa from 'svelte-fa';
    import { faHorseHead } from '@fortawesome/free-solid-svg-icons';
    const iconTheme = {
        primaryColor: '#ffffff',
        size: '7vh'
    };
    // import Horse from "../../../assets/svg/horse.svg";

    let horses = [
        { name: "", bets: {} },
        { name: "", bets: {} },
        { name: "", bets: {} },
        { name: "", bets: {} },
        { name: "", bets: {} },
        { name: "", bets: {} }
    ];
    $: winner = horses.find(h => h.winner);

    const socket = io();
    socket.emit('init_derby');
    socket.on('update', function(data) {
        console.log('got update', data);
        horses = data;
    });
    socket.emit('request_update');


    function calculateWinnings(better) {
        let totalWinnings = 0;
        horses.forEach(h => {
            totalWinnings += Object.values(h.bets).reduce((b, bi) => b + bi, 0);
        });
        const winningHorseTotal = Object.values(winner.bets).reduce((b, bi) => b + bi, 0);
        const percentageOfWinnings = winner.bets[better] / winningHorseTotal;
        const winnings = percentageOfWinnings * totalWinnings;
        const roundedWinnings = (Math.round((winnings + Number.EPSILON) * 100) / 100).toFixed(2);
        return roundedWinnings;
    }

</script>

<main>
    <div class="screen">
        {#if winner}
        <div class="winner-screen">
            <h1>{winner.name} wins!</h1>
            <div class="winner-bets">
                {#if Object.keys(winner.bets).length > 0}
                {#each Object.keys(winner.bets) as better}
                <div class="payout">{better} wins ${calculateWinnings(better)}</div>
                {/each}
                {:else}
                <div class="payout">Nobody wins anything!</div>
                {/if}
            </div>
        </div>
        {:else}
        <div class="horses-info">
            {#each horses as horse, i}
            <div class="horse-info" >
                <div class="horse" class:alternate-header="{i % 2}">
                    <div class="icon">
                        <Fa icon={faHorseHead} {...iconTheme}/>
                    </div>
                    <div class="horse-name">{horse.name}</div>
                </div>
            </div>
            {/each}
        </div>
        <div class="horses-bets">
            {#each horses as horse}
            <div class="horse-bets">
                {#each Object.entries(horse.bets) as bet}
                <div class="bet">
                    <span class="bet-name">{bet[0]}</span> <span class="bet-amount">${bet[1]}</span>
                </div>
                {/each}
            </div>
            {/each}
        </div>
        {/if}
    </div>
    <!-- <Horse width="400"/> -->
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

    .screen {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .horses-info {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
    }

    .horse-info {
        width: calc(100%/6);
        text-align: center;
    }

    .horse {
        background-color: #1e6f5cbb;
        padding: 15px 0;
        width: 100%;
    }

    .alternate-header{
        background-color: #134237bb;
    }

    .icon {
        width: 100%;
        height: 8vh;
    }

    .horse-name {
        font-size: 2.7em;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        text-shadow: 2px 2px #1e6f5c;
    }

    .horses-bets {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        padding-top: 20px;
    }

    .horse-bets {
        width: calc(100%/6);
        text-align: center;
    }

    .bet {
        font-weight: 600;
        font-size: 3em;
    }

    h1 {
        font-size: 12em;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        text-shadow: 2px 2px #1e6f5c;
    }

    .payout {
        font-size: 5em;
        font-weight: 600;
        text-align: center;
    }

</style>