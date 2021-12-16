<script>
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import Button from './Button.svelte';
    import InputText from './Input_Text.svelte';

    import dnd from '../../../rpg/dnd.js';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const monsters = dnd.monsters.map(m => { return { label: m.name, value: m, group: m.type }});
    const groupBy = item => item.group;
    const firstMonster = monsters.length > 0 ? monsters[0] : null;
    let selectedMonster = null;
    let selectedName = null;

    function addMonster(e) {
        if (!selectedMonster) return;

        if (!selectedName) {
            selectedName = selectedMonster.name;
        }
        console.log(`adding ${selectedName}`, selectedMonster);
        dispatch('monsterAdded', { id: selectedMonster.index, name: selectedName} );
        selectedName = null;
    }

    function selectMonster(e) {
        selectedMonster = JSON.parse(JSON.stringify(e.detail.value));
    }

    


</script>

<div class="add_monster">
    <div class="form">
        <Select items={monsters} containerStyles={`width: 65%; border-color: #118ab2`} {groupBy} on:select={selectMonster}></Select>
    </div>
    {#if selectedMonster}
        <div class="form">
            <InputText label="Alternate Name" bind:value={selectedName}/>
        </div>
    {/if}
    <div class="button">
        <Button onClick={addMonster} text="Add Monster" width="80%"></Button> 
    </div>
</div>

<style>
    .add_monster {
        display: flex;
        flex-wrap: wrap;
        width: 30vw;
        margin: 10px;
        background-color: #fff;
        border-radius: 8px;
    }

    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 8px;
        margin: 5px;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        width: 100%;
    }


</style>