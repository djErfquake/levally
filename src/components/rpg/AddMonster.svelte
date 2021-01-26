<script>
    import Button from './Button.svelte';
    import Header from './SectionHeader.svelte';
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import generator from '../../utilities/generator.js';
    import dice from '../../rpg/dice.js';
    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';


    export let monsters;
    
    const groupBy = (item) => item.group;
    const firstMonster = monsters.length > 0 ? monsters[0] : null;
    let selectedMonster = null;

    function selectMonster(event) {
        selectedMonster = JSON.parse(JSON.stringify(event.detail.value));
    }

    function addMonster(event) {
        if (!selectedMonster) return;
        console.log("adding ", selectedMonster);

        const character = {
            id: generator.guid(),
            name: selectedMonster.name,
            hp: dice.parseAndRollDice(selectedMonster.hp),
            initiative: dice.rollCheck(selectedMonster.dex),
            link: selectedMonster.link,
            description: '',
            statuses: [],
            turnStatus: "NOT_YET",
            isPC: false
        };

        dispatch('addCharacter', character);
    }

</script>


<main>
    <Header text={`Add Monster`}></Header>
    <div class="components">
        <div class="stat-section select">
            <Select items={monsters} {groupBy} on:select={selectMonster}></Select>
            {#if selectedMonster}
                <Header text={`Alternate Name`}></Header>
                <input type="text" bind:value={selectedMonster.name}/>
            {/if}
        </div>
        <div class="stat-section">
            <Button onClick={addMonster} text={`Add Monster`}></Button> 
        </div>
    </div>
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

    .select {
        width: 30vw;
        --border: 3px solid #475F94;
		--borderRadius: 10px;
		--placeholderColor: #475F94;
        --itemIsActiveBG: #475F94;
        --borderFocusColor: #475F94;
    }

    .stat-section {
        padding: 30px;
    }

    input {
        border: 3px solid #475F94;
        border-radius: 6px;
    }
</style>