<script>
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let monsters;
    console.log('monsters', monsters);
    export let roll;
    export let rollCheck;
    
    let firstMonster = monsters.length > 0 ? monsters[0] : null;
    let selectedMonster = null;

    function selectMonster(event) {
        selectedMonster = event.detail.value;
    }

    function addMonster(event) {
        if (!selectedMonster) return;
        console.log("adding ", selectedMonster);

        let hp = roll(selectedMonster.hp);
        let initiative = rollCheck(selectedMonster.dex);

        dispatch('addCharacter', { name: selectedMonster.name, hp: hp, initiative: initiative, statuses: [] });
    }

</script>


<main>
    <div class="stat-section">
        <div>Monster Name</div>
        <Select items={monsters} on:select={selectMonster}></Select>
    </div>
    <div class="stat-section">
        <button on:click={addMonster}>Add Monster</button> 
    </div>
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