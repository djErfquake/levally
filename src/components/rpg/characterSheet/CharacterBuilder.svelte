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
    <div class='selector'>
        <div class='selector-name'>Level</div>
        <Select items={levels} on:select={selectedLevel} isSeachable={false}></Select>
    </div>
    <div class='selector'>
        <div class='selector-name'>Race</div>
        <Select items={dnd.races} on:select={selectedRace} isSeachable={false}></Select>
    </div>
    <div class='selector'>
        <div class='selector-name'>Class</div>
        <Select items={dnd.classes} on:select={selectedClass} isSeachable={false}></Select>
    </div>

    {#if c && c.includes("Fighter")}
    <div class='selector fighting-style'>
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



    <!-- {characterJsonString} -->
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

    .fighting-style {
        padding-left: 20px;
    }

    .selected-spells {
        margin-top: 10px;
    }

</style>