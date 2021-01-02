<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    import generator from '../../utilities/generator.js';
    
    let character = {
        name: '',
        hp: 0,
        initiative: 0,
        statuses: [],
        isPC: true,
        id: generator.guid()
    };
    let characterAdded = false;
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
    <!-- {#if !characterAdded} -->
    <div class="stat-section">
        <div>Character Name</div>
        <input id="char_name" type="text" bind:value={character.name}/>
    </div>
    <div class="stat-section">
        <div >HP</div>
        <input id="hp" type="number" min="1" bind:value={character.hp}/>
    </div>
    <div class="stat-section">
        <div>Initiative</div>
        <input id="initiative" type="number" min="1" bind:value={character.initiative}/>
    </div>
    <div class="stat-section">
        <button on:click={addCharacter}>Add Character</button> 
    </div>
    <!-- {:else}
    <div class="stat-section">
        <div>HP</div>
        <button on:click={addHP}>+</button> 
        <button on:click={removeHP}>-</button> 
    </div>
    {/if} -->
</main>


<style>
    main {
        display: flex;
    }

    .stat-section {
        padding: 30px;
    }

    button {
        height: 100%;
    }
</style>