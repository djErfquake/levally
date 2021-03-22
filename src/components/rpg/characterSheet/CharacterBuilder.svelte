<script>
    import { encode } from "js-base64";
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import dnd from '../../../rpg/dnd.js';
    import dndSrd from 'dnd5-srd';
    import Spell from './BuilderSpell.svelte';

    let l = 1;
    let r, c;
    let s = [];
    let sub = {};

    const availableLevels = [...Array(20).keys()].map(i => i + 1);
    
    const classesWithFeatures = ["Druid", "Fighter", "Ranger", "Sorcerer", "Warlock"];
    const features = dndSrd.data.features.filter(f => f.group && classesWithFeatures.includes(f.class.name));
    $: availableFeatures = features.filter(f => f.level <= l && f.class.name == c).map(f => f.name);
    // console.log(features);
    
    const spells = dndSrd.data.spells;
    $: availableSpells = spells
        .filter(s => s.level <= l)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(s => {return { label: s.name, value: s}});


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

        delete sub.subRace;
    }

    function selectedClass(event) {
        c = event.detail.value;
        characterJson.c = c;

        delete sub.subClass;
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
    function selectedFeature(event) {
        sub.subClass = event.detail.value;
        characterJson.sub = sub;
    }

    function selectedDraconicAncestry(event) {
        sub.splice(sub.findIndex(s => s.name.includes('Draconic')), 1);
        sub.push(event.detail.value);
        characterJson.sub = sub;
    }

</script>


<main>
    <div class='selector'>
        <div class='selector-name'>Level</div>
        <Select items={availableLevels} on:select={selectedLevel} isSeachable={false}></Select>
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

    {#if availableFeatures.length > 0}
    <div class='selector sub-type'>
        <div class='selector-name'>{availableFeatures[0].substr(0, availableFeatures[0].indexOf(':'))}</div>
        <Select items={availableFeatures} on:select={selectedFeature} isSeachable={false}></Select>
    </div>
    {/if}
    
    <div class='selector'>
        <div class='selector-name'>Spells</div>
        <Select items={availableSpells} on:select={selectedSpell} isSeachable={false}></Select>
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