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
    let selectedFeatures = [];
    $: availableFeatures = features
        .filter(f => f.level <= l && f.class.name == c)
        .map(f => {return { label: f.name, value: f }});
    
    const spells = dndSrd.data.spells;
    let selectedSpells = [];
    $: availableSpells = spells
        .filter(s => s.level <= l && s.classes.find(sc => sc.name == c))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(s => {return { label: s.name, value: s}});



    // CLASS SPECIFIC STUFF
    $: featurePicks = c != "Warlock" ? 1 : dndSrd.data.levels.find(lev => lev.level == l && lev.class.name == c).class_specific.invocations_known;
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
        if (!sub.subClass || (sub.subClass && sub.subClass.length < featurePicks)) {
            if (sub.subClass) { sub.subClass.push(event.detail.value.index); }
            else { sub.subClass = [ event.detail.value.index ]; }
            characterJson.sub = sub;

            selectedFeatures.push({
                id: event.detail.value.index,
                name: event.detail.value.name
            });
            selectedFeatures = selectedFeatures;
        }
    }

    function removeFeature(event) {
        sub.subClass.splice(sub.subClass.findIndex(s => s == event.detail.value), 1);
        if (sub.subClass.length == 0 ) { delete sub.subClass; }
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
        <div class='selector-name'>{availableFeatures[0].label.substr(0, availableFeatures[0].label.indexOf(':'))}</div>
        <Select items={availableFeatures} on:select={selectedFeature} isSeachable={false}></Select>
        {#if featurePicks > 1}
            {#each selectedFeatures as feature}
                <Spell {...feature} on:removeSpell={removeFeature}></Spell>
            {/each}
        {/if}
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