<script>
    import { onDestroy } from 'svelte';
    import { writable } from 'svelte-persistent-store/dist/local';
    import { encode } from "js-base64";
    import dnd from '../../../rpg/dnd.js';
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import Spell from './BuilderSpell.svelte';
    import Button from '../Button.svelte';

    const localCharacterWriter = writable('dndCharacter');

    const DEFAULT_CHARACTER = {
        level: 0,
        race: null,
        class: null,
        spells: [],
        subTypes: {}
    };
    let character = DEFAULT_CHARACTER;
    const unsubscribe = localCharacterWriter.subscribe(c => {
        if (c) {
            try {
                character = JSON.parse(c);
                // console.log('got character from session', character);
            }
            catch {
                character = DEFAULT_CHARACTER;
            }
        }
        else {
            character = DEFAULT_CHARACTER;
        }
    });
    onDestroy(unsubscribe);

    

    const availableLevels = [...Array(20).keys()].map(i => i + 1);
    const availableRaces = dnd.races.map(r => r.name);
    const availableClasses = dnd.classes.map(c => c.name);
    
    $: availableSubClasses = dnd.subclasses
        .filter(sc => sc.level <= character.level && sc.class.name == character.class)
        .map(sc => {return { label: sc.name, value: sc }});

    const classesWithFeatures = ["Druid", "Fighter", "Ranger", "Sorcerer", "Warlock"];
    const features = dnd.features.filter(f => f.group && classesWithFeatures.includes(f.class.name));
    let selectedFeatures = !character.subTypes.subFeatures ? [] : character.subTypes.subFeatures
        .map(sf => {
            const feature = dnd.features.find(f => f.index == sf);
            return {
                id: feature.index,
                name: feature.name
            };
        });
    $: availableFeatures = features
        .filter(f => f.level <= character.level && f.class.name == character.class)
        .map(f => {return { label: f.name, value: f }});
    
    let selectedSpells = character.spells
        .map(cs => {
            const spell = dnd.spells.find(s => s.index == cs);
            return {
                id: spell.index,
                name: spell.name
            };
        });
    $: availableSpells = dnd.spells
        // .filter(s => s.level <= l && s.classes.find(sc => sc.name == c))
        .filter(s => s.level <= character.level)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(s => {return { label: s.name, value: s}});



    // CLASS SPECIFIC STUFF
    $: featurePicks = character.class != "Warlock" ? 1 : dnd.levels.find(lev => lev.level == character.level && lev.class.name == character.class).class_specific.invocations_known;

    // RACE SPECIFIC STUFF
    $: availableSubRaces = dnd.subraces
        .filter(sr => sr.race.name == character.race)
        .map(sr => { return {label: sr.name, value: sr}});
    

    $: characterJsonString = JSON.stringify(character);
    // $: characterJsonString = encode(JSON.stringify(characterJson));
    $: characterUrl = `https://levally.herokuapp.com/rpg/${encode(JSON.stringify(character))}`;
    $: justCharacterUrl = `https://levally.herokuapp.com/rpg/c/${encode(JSON.stringify(character))}`;


    function selectedLevel(event) {
        if (event.detail.value) {
            character.level = event.detail.value;
            updateStore();
        }
    }

    function selectedRace(event) {
        if (event.detail.value) {
            character.race = event.detail.value;

            delete character.subTypes.subRace;

            updateStore();
        }
    }

    function selectedClass(event) {
        if (event.detail.value) {
            character.class = event.detail.value;

            delete character.subTypes.subClass;
            delete character.subTypes.subFeatures;

            updateStore();
        }
    }

    function selectedSpell(event) {
        if (event.detail.value) {
            const spell = event.detail.value;
            selectedSpells.push({
                id: spell.index,
                name: spell.name
            });
            selectedSpells = selectedSpells;
            
            character.spells.push(parseInt(spell.index));
            character= character;

            updateStore();
        }
    }

    function removeSpell(id) {
        const ssId = selectedSpells.findIndex(s => s.id == id);
        selectedSpells.splice(ssId, 1);
        selectedSpells = selectedSpells;

        const sId = character.spells.findIndex(s => s == id);
        character.spells.splice(sId, 1);
        character= character;

        updateStore();
    }


    // SUB TYPES
    function selectedFeature(event) {
        if (event.detail.value) {
            if (!character.subTypes.subFeatures || (character.subTypes.subFeatures && character.subTypes.subFeatures.length < featurePicks)) {
                if (character.subTypes.subFeatures) { character.subTypes.subFeatures.push(event.detail.value.index); }
                else { character.subTypes.subFeatures = [ event.detail.value.index ]; }

                selectedFeatures.push({
                    id: event.detail.value.index,
                    name: event.detail.value.name
                });
                selectedFeatures = selectedFeatures;
                updateStore();
            }
        }
    }

    function removeFeature(event) {
        if (event.detail.value) {
            character.subTypes.subFeatures.splice(character.subTypes.subFeatures.findIndex(s => s == event.detail.value), 1);
            if (character.subTypes.subFeatures.length == 0 ) { delete character.subTypes.subFeatures; }
            updateStore();
        }
    }

    function selectedSubrace(event) {
        if (event.detail.value) {
            character.subTypes.subRace = event.detail.value.index;
            updateStore();
        }
    }

    function selectedSubclass(event) {
        if (event.detail.value) {
            character.subTypes.subClass = [ event.detail.value.index ];
            updateStore();
        }
    }

    function updateStore() {
        localCharacterWriter.set(JSON.stringify(character));
    }

    function resetStore() {
        localCharacterWriter.set(undefined);
        selectedSpells.length = 0;
        selectedFeatures.length = 0;
    }

</script>


<main>
    <div class='selector'>
        <div class='selector-name'>Level</div>
        <Select items={availableLevels} on:select={selectedLevel} selectedValue={character.level.toString()} isSeachable={false}></Select>
    </div>
    <div class='selector'>
        <div class='selector-name'>Race</div>
        <Select items={availableRaces} on:select={selectedRace} selectedValue={character.race} isSeachable={false}></Select>
    </div>
    {#if availableSubRaces.length > 0}
    <div class='selector sub-type'>
        <div class='selector-name'>Sub Race</div>
        <Select items={availableSubRaces} on:select={selectedSubrace} selectedValue={availableSubRaces.find(sc => sc.value.index == character.subTypes.subRace).label} isSeachable={false}></Select>
    </div>
    {/if}


    <div class='selector'>
        <div class='selector-name'>Class</div>
        <Select items={availableClasses} on:select={selectedClass} selectedValue={character.class} isSeachable={false}></Select>
    </div>
    {#if availableSubClasses.length > 0}
    <div class='selector sub-type'>
        <div class='selector-name'>{availableSubClasses[0].value.group}</div>
        <Select items={availableSubClasses} on:select={selectedSubclass} selectedValue={character.subTypes.subClass && character.subTypes.subClass.length > 1 ? availableSubClasses.find(sc => sc.value.index == character.subTypes.subClass[0]).label : null} isSeachable={false}></Select>
    </div>
    {/if}
    {#if availableFeatures.length > 0}
    <div class='selector sub-type'>
        <div class='selector-name'>{availableFeatures[0].value.group}</div>
        <Select items={availableFeatures} on:select={selectedFeature} isSeachable={false}></Select>
        <div class="extra-selections">
            {#if featurePicks > 1}
                {#each selectedFeatures as feature}
                    <Spell {...feature} on:removeSpell={removeFeature}></Spell>
                {/each}
            {/if}
        </div>
    </div>
    {/if}
    
    <div class='selector'>
        <div class='selector-name'>Spells</div>
        <Select items={availableSpells} on:select={selectedSpell} isSeachable={false}></Select>
        <div class="extra-selections">
            {#each selectedSpells as spell}
                <Spell {...spell} on:removeSpell={removeSpell}></Spell>
            {/each}
        </div>
    </div>



    <!-- {characterJsonString} -->
    {#if character.level && character.race && character.class}
    <div><a href="{characterUrl}">Link to Initiative Tracker</a></div>
    <div><a href="{justCharacterUrl}">Link to just stats</a></div>
    {/if}


    <div class="reset-button">
        <Button onClick={resetStore} text={`Reset`}></Button>
    </div>
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

    .extra-selections {
        margin-top: 10px;
    }

    .reset-button {
        margin-top: 100px;
    }

</style>