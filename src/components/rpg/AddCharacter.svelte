<script>
    import Button from './Button.svelte';
    import Header from './SectionHeader.svelte';
    import generator from '../../utilities/generator.js';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let dmView = false;
    let characterAdded = false;
    $: hideCharacterCreation = !dmView && characterAdded;
    
    let character = {
        id: generator.guid(),
        name: '',
        hp: 0,
        initiative: 0,
        statuses: [],
        turnStatus: "NOT_YET",
        isPC: true
    };
    function addCharacter() {
        dispatch('addCharacter', character);
        characterAdded = true;
    }

    function addHP() { character.hp++; updateCharacter(); }
    function removeHP() { character.hp--; updateCharacter(); }
    function updateCharacter() {
        console.log('updating character', character.hp);
        dispatch('updateCharacter', character);
    }

</script>


<main>
    {#if !hideCharacterCreation}
    <div class="add-character">
        <!-- <Header text={`Add Character`}></Header> -->
        <div class="components">
            <div class="stat-section">
                <Header text={`Name`}></Header>
                <input id="char_name" type="text" bind:value={character.name}/>
            </div>
            <div class="stat-section">
                <Header text={`HP`}></Header>
                <input id="hp" class="number-input" type="number" min="1" bind:value={character.hp}/>
            </div>
            <div class="stat-section">
                <Header text={`Initiative`}></Header>
                <input id="initiative" class="number-input" type="number" min="1" bind:value={character.initiative}/>
            </div>
            <div class="stat-section">
                <Button onClick={addCharacter} text={`Add Character`}></Button> 
            </div>
        </div>
    </div>
    {:else}
    <!-- <Header text={`HP`}></Header> -->
    <div class="hp-buttons">
        <Button onClick={addHP} width={`45px`} text={`+`}></Button> 
        <Button onClick={removeHP} width={`45px`} text={`-`}></Button> 
    </div>
    {/if}
</main>


<style>
    main {
        width: 100%;
    }

    .add-character {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
    }

    .hp-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .components {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .stat-section {
        padding: 30px;
    }

    input {
        border: 3px solid #475F94;
        border-radius: 6px;
    }

    input:focus {
        border-color: #475F94;
    }

    .number-input {
        width: 40px;
    }

</style>