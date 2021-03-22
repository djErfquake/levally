<script>
    import { encode } from "js-base64";
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import dnd from '../../../rpg/dnd.js';
    import dndSrd from 'dnd5-srd';
    import Spell from './BuilderSpell.svelte';

    const spells = dndSrd.data.spells;
    const levels = [...Array(20).keys()].map(i => i + 1);
    const spellList = spells
        .map(s => {return { label: s.name, value: s}})
        .sort((a, b) => a.label.localeCompare(b.label));

    let r, c, l;
    let s = [];
    let sub = {};

    let selectedSpells = [];
    const draconicAncestries = Object.values(dnd.draconicAncestries).map(function(da) { return { label: da.dragon, value: da} });

    let characterJson = {s:[],sub:{}}; 
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

        if (r != 'Dragonborn') { delete sub.draconicAncestry; }
    }

    function selectedClass(event) {
        c = event.detail.value;
        characterJson.c = c;

        if (c != 'Fighter') { delete sub.fightingStyle; }
    }

    function selectedSpell(event) {
        const spell = event.detail.value;
        selectedSpells.push({
            id: spell.index,
            name: spell.name
        });
        s.push(parseInt(spell.index));
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


    // SUB TYPES
    function selectedFightingStyle(event) {
        sub.fightingStyle = event.detail.value;
        characterJson.sub = sub;
    }

    function selectedDraconicAncestry(event) {
        sub.draconicAncestry = event.detail.value.dragon;
        characterJson.sub = sub;
    }

</script>


<main>
    <div class='selector'>
        <div class='selector-name'>Level</div>
        <Select items={levels} on:select={selectedLevel} isSeachable={false}></Select>
    </div>
    <div class='selector'>
        <div class='selector-name'>Race</div>
        <Select items={dnd.races} on:select={selectedRace} isSeachable={false}></Select>
    </div>
    {#if r && r.includes("Dragonborn")}
    <div class='selector sub-type'>
        <div class='selector-name'>Draconic Ancestry</div>
        <Select items={draconicAncestries} on:select={selectedDraconicAncestry} isSeachable={false}></Select>
    </div>
    {/if}


    <div class='selector'>
        <div class='selector-name'>Class</div>
        <Select items={dnd.classes} on:select={selectedClass} isSeachable={false}></Select>
    </div>

    {#if c && c.includes("Fighter")}
    <div class='selector sub-type'>
        <div class='selector-name'>Fighting Style</div>
        <Select items={dnd.fightingStyles} on:select={selectedFightingStyle} isSeachable={false}></Select>
    </div>
    {/if}
    
    <div class='selector'>
        <div class='selector-name'>Spells</div>
        <Select items={spellList} on:select={selectedSpell} isSeachable={false}></Select>
        <div class="selected-spells">
            {#each selectedSpells as spell}
                <Spell {...spell} on:removeSpell={removeSpell}></Spell>
            {/each}
        </div>
    </div>



    {characterJsonString}
    {#if r && c && l}
    <div>
        <a href="{characterUrl}">Your custom generated link!</a>
    </div>
    {/if}
</main>


<style>
    .selector {
        margin: 20px;
    }

    .selector-name {
        font-size: 1.2em;
        font-weight: 600;
    }

    .sub-type {
        padding-left: 20px;
    }

    .selected-spells {
        margin-top: 10px;
    }

</style>