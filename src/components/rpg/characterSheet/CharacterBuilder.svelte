<script>
    import { encode } from "js-base64";
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import dnd from '../../../rpg/dnd.js';
    import Spell from './BuilderSpell.svelte';

    let l = 1;
    let r, c;
    let s = [];
    let sub = {};

    const availableLevels = [...Array(20).keys()].map(i => i + 1);
    const availableRaces = dnd.races.map(r => r.name);
    const availableClasses = dnd.classes.map(c => c.name);
    
    $: availableSubClasses = dnd.subclasses
        .filter(sc => sc.level <= l && sc.class.name == c)
        .map(sc => {return { label: sc.name, value: sc }});

    const classesWithFeatures = ["Druid", "Fighter", "Ranger", "Sorcerer", "Warlock"];
    const features = dnd.features.filter(f => f.group && classesWithFeatures.includes(f.class.name));
    let selectedFeatures = [];
    $: availableFeatures = features
        .filter(f => f.level <= l && f.class.name == c)
        .map(f => {return { label: f.name, value: f }});
    
    const spells = dnd.spells;
    let selectedSpells = [];
    $: availableSpells = spells
        .filter(s => s.level <= l && s.classes.find(sc => sc.name == c))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(s => {return { label: s.name, value: s}});



    // CLASS SPECIFIC STUFF
    $: featurePicks = c != "Warlock" ? 1 : dnd.levels.find(lev => lev.level == l && lev.class.name == c).class_specific.invocations_known;

    // RACE SPECIFIC STUFF
    $: availableSubRaces = dnd.subraces
        .filter(sr => sr.race.name == r)
        .map(sr => { return {label: sr.name, value: sr}});
    

    // GENERATE ENCODED CHARACTER INFO
    let characterJson = {s:[],sub:{}}; 
    $: characterJsonString = JSON.stringify(characterJson);
    // $: characterJsonString = encode(JSON.stringify(characterJson));
    $: characterUrl = `https://levally.herokuapp.com/rpg/${encode(JSON.stringify(characterJson))}`;
    $: justCharacterUrl = `https://levally.herokuapp.com/rpg/c/${encode(JSON.stringify(characterJson))}`;


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
        delete sub.subFeatures;
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
        if (!sub.subFeatures || (sub.subFeatures && sub.subFeatures.length < featurePicks)) {
            if (sub.subFeatures) { sub.subFeatures.push(event.detail.value.index); }
            else { sub.subFeatures = [ event.detail.value.index ]; }
            characterJson.sub = sub;

            selectedFeatures.push({
                id: event.detail.value.index,
                name: event.detail.value.name
            });
            selectedFeatures = selectedFeatures;
        }
    }

    function removeFeature(event) {
        sub.subFeatures.splice(sub.subFeatures.findIndex(s => s == event.detail.value), 1);
        if (sub.subFeatures.length == 0 ) { delete sub.subFeatures; }
        characterJson.sub = sub;
    }

    function selectedSubrace(event) {
        sub.subRace = event.detail.value.index;
        characterJson.sub = sub;
    }

    function selectedSubclass(event) {
        sub.subClass = [ event.detail.value.index ];
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
        <Select items={availableRaces} on:select={selectedRace} isSeachable={false}></Select>
    </div>
    {#if availableSubRaces.length > 0}
    <div class='selector sub-type'>
        <div class='selector-name'>Sub Race</div>
        <Select items={availableSubRaces} on:select={selectedSubrace} isSeachable={false}></Select>
    </div>
    {/if}


    <div class='selector'>
        <div class='selector-name'>Class</div>
        <Select items={availableClasses} on:select={selectedClass} isSeachable={false}></Select>
    </div>
    {#if availableSubClasses.length > 0}
    <div class='selector sub-type'>
        <div class='selector-name'>{availableSubClasses[0].value.group}</div>
        <Select items={availableSubClasses} on:select={selectedSubclass} isSeachable={false}></Select>
    </div>
    {/if}
    {#if availableFeatures.length > 0}
    <div class='selector sub-type'>
        <div class='selector-name'>{availableFeatures[0].value.group}</div>
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



    <!-- {characterJsonString} -->
    {#if r && c && l}
    <div><a href="{characterUrl}">Link to Initiative Tracker</a></div>
    <div><a href="{justCharacterUrl}">Link to just stats</a></div>
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