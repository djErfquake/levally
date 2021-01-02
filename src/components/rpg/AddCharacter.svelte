<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    let name = '';
    let hp = 0;
    let initiative = 0;
    let characterAdded = false;
    function addCharacter() {
        dispatch('addCharacter', { name: name, hp: hp, initiative: initiative, statuses: [], isPC: true });
        characterAdded = true;
    }

    function addHP() { hp++; updateCharacter(); }
    function removeHP() { hp--; updateCharacter(); }
    function updateCharacter() {
        console.log('updating character', hp);
        dispatch('updateCharacter', { name: name, hp: hp, initiative: initiative, statuses: [], isPC: true });
    }

</script>


<main>
    {#if !characterAdded}
    <div class="stat-section">
        <div>Character Name</div>
        <input id="char_name" type="text" bind:value={name}/>
    </div>
    <div class="stat-section">
        <div >HP</div>
        <input id="hp" type="number" min="1" bind:value={hp}/>
    </div>
    <div class="stat-section">
        <div>Initiative</div>
        <input id="initiative" type="number" min="1" bind:value={initiative}/>
    </div>
    <div class="stat-section">
        <button on:click={addCharacter}>Add Character</button> 
    </div>
    {:else}
    <div class="stat-section">
        <div>HP</div>
        <button on:click={addHP}>+</button> 
        <button on:click={removeHP}>-</button> 
    </div>
    {/if}
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