<script>
    import Select from 'svelte-select';
    import Button from './Button.svelte';
    import dnd from '../../../rpg/dnd.js'

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let character = null;
    let selectedSpell = null;

    const spellList = dnd.spells
        .sort((a,b) => a.name.localeCompare(b.name))
        .map(s => { return { label: s.name, value: parseInt(s.index) }});

    function spellSelected(e) {
        selectedSpell = parseInt(e.detail.value);
    }

    function addSpell() {
        if (!selectedSpell) return;

        if (character) {
            let characterSpells = character.spells;
            characterSpells.push(selectedSpell);
            dispatch('updateStat', { characterId: character.id, stat: 'spells', newValue: characterSpells });
        }
        else {
            dispatch('addSpell', selectedSpell);
        }

        selectedSpell = null;
    }
</script>


<div class="add_spell">
    <div class="form">
        <Select items={spellList} on:select={spellSelected}></Select>
    </div>
    <div class="button">
        <Button onClick={addSpell} text="Add Spell" width="80%"></Button> 
    </div>
</div>


<style>
    .add_spell {
        display: flex;
        flex-wrap: wrap;
        width: 30vw;
        margin: 10px;
        background-color: #fff;
        border-radius: 8px;
    }

    .form {
        width: 100%;
        padding: 8px;
        margin: 5px;
        --border: 1px solid #118ab2;
        --borderFocusColor: #118ab2;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        width: 100%;
    }
</style>