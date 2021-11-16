<script>
    import tippy from 'sveltejs-tippy';
    import Button from '../../common/JiggleButton.svelte';
    import Toggle from '../../common/Toggle.svelte';
    import Radio from '../../common/Radio.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    export let settings;
    export let possibleNumRounds = 4;

    const settingsInfo = {
        curated: { content: "Allow players to veto some monikers before the game starts.", placement: 'top-start' },
        createClues: { content: "Create your own clues, or get random clues", placement: 'top-start' },
        // onePhone: { content: "Share the same phone between teams. Otherwise, each player could use their own phone.", placement: 'top-start' },
        numRounds: { content: "The number of rounds to by played. Typically 3 rounds are played.", placement: 'top-start' },
        numPlayers: { content: "The total number of players across all teams.", placement: 'top-start' },
        cardsPerPlayer: { content: "How many monikers per player. Typically there are 5 monikers per player", placement: 'top-start' }
    };

    function playClicked() {
        dispatch('setupDone');
    }
    


</script>

<main>
    <h1>Setup</h1>

    <!-- <div class="setting curated">
        <div class="setting-name" use:tippy={settingsInfo.curated}>Curated</div>
        <div class="setting-value">
            <Toggle bind:checked={settings.curated}></Toggle>
        </div>
    </div> -->

    <div class="setting createClues">
        <div class="setting-name" use:tippy={settingsInfo.createClues}>Create your own clues</div>
        <div class="setting-value">
            <Toggle bind:checked={settings.createClues}></Toggle>
        </div>
    </div>

    <div class="setting numPlayers">
        <div class="setting-name" use:tippy={settingsInfo.numPlayers}>Number of Players</div>
        <div class="setting-value">
            <input type=number bind:value={settings.numPlayers} min=1>
        </div>
    </div>


    <div class="setting cardsPerPlayer">
        <div class="setting-name" use:tippy={settingsInfo.cardsPerPlayer}>Cards per Player</div>
        <div class="setting-value">
            <input type=number bind:value={settings.cardsPerPlayer} min=1 max=10>
        </div>
    </div>


    <div class="setting rounds">
        <div class="setting-name" use:tippy={settingsInfo.numRounds}>Number of Rounds</div>
        <div class="rounds-buttons setting-value">
            {#each [...Array(possibleNumRounds).keys()].map(i => i + 1) as r}
            <div class="round-button">
                <Radio label={r} bind:value={settings.numRounds}></Radio>
            </div>
            {/each}
        </div>
    </div>

    <div class="buttons" on:click={playClicked}>
        <Button text="Go!"></Button>
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
        font-size: 5vh;
        margin-top: 15vh;
        margin-bottom: 10vh;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .setting {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        width: 70vw;
    }

    .setting-name {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2.5vh;
        width: 35vw;
    }

    .setting-value {
        width: 35vw;
    }

    .rounds {
        margin-bottom: 15vh;
    }

    .rounds-buttons {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        width: 50vw;
    }

    .round-button {
        width: 30px;
        height: 30px;
    }

    input {
        font-size: 3vh;
        border: 2px solid #333;
        border-radius: 5px;
        width: 50px;
    }

    input:focus {
        border: 2px solid #2196f3;
        outline: none !important;
    }
</style>