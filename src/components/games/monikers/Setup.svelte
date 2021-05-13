<script>
    import Button from '../../common/JiggleButton.svelte';
    import Toggle from '../../common/Toggle.svelte';
    import Radio from '../../common/Radio.svelte';

    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';
    

    const possibleRounds = [1, 2, 3, 4];
    let settings = {
        curated: false,
        onePhone: true,
        numRounds: 3
    };

    function playClicked() {
        dispatch('startGame', settings);
    }
    


</script>

<main>
    <h1>Setup</h1>

    <div class="setting curated">
        <div class="setting-name">Curated</div>
        <Toggle bind:checked={settings.curated}></Toggle>
    </div>

    <div class="setting onePhone">
        <div class="setting-name">One Phone</div>
        <Toggle bind:checked={settings.onePhone}></Toggle>
    </div>

    <div class="setting rounds">
        <div class="setting-name">Number of Rounds</div>
        <div class="rounds-buttons">
            {#each possibleRounds as r}
            <div class="round-button">
                <Radio label={r} bind:value={settings.numRounds}></Radio>
            </div>
            {/each}
        </div>
    </div>

    <div class="setting" on:click={playClicked}>
        <Button text="Go!"></Button>
    </div>
</main>

<style>
    main {
        height: 100%;
        width: 85%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 3em;
        margin-bottom: 10vh;
    }

    .setting {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .setting-name {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2em;
        width: 35vw;
    }

    .rounds {
        margin-bottom: 15vh;
    }

    .rounds-buttons {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        width: 45vw;
    }

    .round-button {
        width: 30px;
        height: 30px;
    }
</style>