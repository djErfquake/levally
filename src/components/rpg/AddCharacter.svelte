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
    <Header text={`Add Character`}></Header>
    <div class="components">
        <div class="stat-section">
            <Header text={`Name`}></Header>
            <input id="char_name" type="text" bind:value={character.name}/>
        </div>
        <div class="stat-section">
            <Header text={`HP`}></Header>
            <input id="hp" type="number" min="1" bind:value={character.hp}/>
        </div>
        <div class="stat-section">
            <Header text={`Initiative`}></Header>
            <input id="initiative" type="number" min="1" bind:value={character.initiative}/>
        </div>
        <div class="stat-section">
            <Button onClick={addCharacter} text={`Add Character`}></Button> 
        </div>
    </div>
    {:else}
    <Header text={`HP`}></Header>
    <div>
        <Button onClick={addHP} text={`+`}></Button> 
        <Button onClick={removeHP} text={`-`}></Button> 
    </div>
    {/if}
</main>


<style>
    main {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .components {
        display: flex;
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

</style>