<script>
    import { encode } from "js-base64";
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import dnd from '../../../rpg/dnd.js';
    import spells from '../../../rpg/spells.js';
    import Spell from './BuilderSpell.svelte';
    
    const levels = [...Array(20).keys()].map(i => i + 1);
    const spellList = Object.entries(spells)
        .map(([k, v]) => {return { label: v.name, value: k}})
        .sort((a, b) => a.label.localeCompare(b.label));

    let r, c, l;
    let s = [];

    let selectedSpells = [];

    let characterJson = {}; 
    $: characterJsonString = JSON.stringify(characterJson);
    // $: characterJsonString = encode(JSON.stringify(characterJson));
    $: characterUrl = `https://levally.herokuapp.com/rpg/c/${encode(JSON.stringify(characterJson))}`;


    function selectedLevel(event) {
        l = event.detail.value;
        characterJson.l = l;
    }

    function selectedRace(event) {
        r = event.detail.value;
        characterJson.r = r;
    }

    function selectedClass(event) {
        c = event.detail.value;
        characterJson.c = c;
    }

    function selectedFightingStyle(event) {
        c = `Fighter-${event.detail.value}`;
        characterJson.c = c;
    }

    function selectedSpell(event) {
        const spellId = event.detail.value;
        selectedSpells.push({
            id: spellId,
            name: spells[spellId].name
        });
        s.push(parseInt(spellId));
        console.log(selectedSpells);

        selectedSpells = selectedSpells;
        s = s;
        characterJson.s = s;
    }

    function removeSpell(id) {
        const ssId = selectedSpells.findIndex(s => s.id == id);
        selectedSpells.splice(ssId, 1);

        const sId = s.findIndex(s => s == id);
        s.splice(sId, 1);

        selectedSpells = selectedSpells;
        s = s;
        characterJson.s = s;
    }

</script>


<main>
    <div>
        Level
        <Select items={levels} on:select={selectedLevel}></Select>
    </div>
    <div>
        Race
        <Select items={dnd.races} on:select={selectedRace}></Select>
    </div>
    <div>
        Class
        <Select items={dnd.classes} on:select={selectedClass}></Select>
    </div>

    {#if c == "Fighter"}
    <div>
        Fighting Style
        <Select items={dnd.fightingStyles} on:select={selectedFightingStyle}></Select>
    </div>
    {/if}
    
    <div>
        Spells
        <Select items={spellList} on:select={selectedSpell}></Select>
        {#each selectedSpells as spell}
            <Spell {...spell} on:removeSpell={removeSpell}></Spell>
        {/each}
    </div>



    {characterJsonString}
    {#if r && c && l && s.length > 0}
    <div>
        <a href="{characterUrl}">Your custom generated link!</a>
    </div>
    {/if}
</main>


<style>
    

</style>