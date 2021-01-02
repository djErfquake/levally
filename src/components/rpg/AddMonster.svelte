<script>
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import generator from '../../utilities/generator.js';
    import dice from '../../rpg/dice.js';
    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';


    export let monsters;
    
    let firstMonster = monsters.length > 0 ? monsters[0] : null;
    let selectedMonster = null;

    function selectMonster(event) {
        selectedMonster = event.detail.value;
    }

    function addMonster(event) {
        if (!selectedMonster) return;
        console.log("adding ", selectedMonster);

        const character = {
            name: selectedMonster.name,
            hp: dice.parseAndRollDice(selectedMonster.hp),
            initiative: dice.rollCheck(selectedMonster.dex),
            id: generator.guid(),
            statuses: [],
            isPC: false
        };

        dispatch('addCharacter', character);
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