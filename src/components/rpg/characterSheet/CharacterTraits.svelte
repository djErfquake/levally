<script>
    import TraitComponent from './Trait.svelte';
    import dnd from '../../../rpg/dnd.js';
    import effectColors from '../../../rpg/effects.js';

    const traits = dnd.traits;
    const features = dnd.features;    
    
    export let character;

    export let showHeader = true;
    
    const races = [ character.race ];
    if (character.subTypes.subRace) { races.push(dnd.subraces.find(sr => sr.index == character.subTypes.subRace).name); }

    const spellcasting = dnd.levels.find(lev => lev.level == character.level && lev.class.name == character.class).spellcasting;

    // get all racial traits
    let racialTraits = traits
        .filter(t => t.races.find(tr => races.includes(tr.name)))
        .map(t => {t.raceclass = character.race; return t; });

    // get all class features
    let characterFeatures = features
        .filter(f => f.level <= character.level && 
                f.class.name == character.class && 
                (!f.group || character.subTypes.subFeatures.includes(f.index) || (character.subTypes.subClass && f.subclass.name == character.subTypes.subClass)) && !f.name.includes('Choose:'))
                // (!f.group || sub.subFeatures.includes(f.index)) && !f.name.includes('Choose:'))
        .map(f => { f.raceclass = character.class; return f;});
    if (spellcasting.class) {
        const spellcastingAbilityName = dnd.spellcasting.find(sc => sc.class.name == character.class).spellcasting_ability.name;
        const spellcastingAbilityFullName = dnd.abilityScores.find(as => as.name == spellcastingAbilityName).full_name;
        const spellcastingAbility = `Your spellcasting ability is ${spellcastingAbilityFullName}.`;
        const spellcastingStats = Object.entries(spellcasting).map(sc => {
            if (sc[1] > 0) {
                const spellType = sc[0].replace(/_/g, " ").replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());
                return `<span style="font-weight: 600;">${spellType}:</span> ${sc[1]}`;
            }
            return '';
        });
        let spellcastingDesc = [ spellcastingAbility ];
        spellcastingDesc = spellcastingDesc.concat(spellcastingStats);

        const spellcastingCard = { name: "Spellcasting", raceclass: character.class, desc: spellcastingDesc };
        characterFeatures.push(spellcastingCard);
    }
    const allTraits = racialTraits.concat(characterFeatures)
        .map(t => {
            // set color
            const colors = effectColors[t.raceclass] ? effectColors[t.raceclass] :  [ '#ACA9BB', '#474554'];

            // set text
            let description = t.desc.reduce((d, d1) => `${d}<p>${d1}</p>`);
            if (t.index == 17) {
                const draconicAncestry = subRace;
                description = description.replace(/\|COLOR\|/g, draconicAncestry.name).replace(/\|DAMAGE\|/g, draconicAncestry.breathWeapon).replace(/\|DAMAGE_TYPE\|/g, draconicAncestry.damageType)
            }

            let size = Math.floor(description.length / 500);
            return {
                name: t.name,
                colors: colors,
                raceclass: t.raceclass,
                description: description,
                size: size <= 3 ? size : 3
            };
        });

</script>


<main>
    {#if showHeader}
    <div class="trait-header">Features/Traits</div>
    {/if}
    <div class="row">
        {#each allTraits as trait}
        <TraitComponent {...trait} />
        {/each}
    </div>
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        padding-bottom: 30px;
    }

    .trait-header {
        font-size: 3.5em;
    }

</style>