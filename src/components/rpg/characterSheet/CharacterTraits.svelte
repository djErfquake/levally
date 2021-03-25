<script>
    import TraitComponent from './Trait.svelte';
    import dnd from '../../../rpg/dnd.js';
    import effectColors from '../../../rpg/effects.js';

    const traits = dnd.traits;
    const features = dnd.features;    
    
    export let r;
    export let c;
    export let l;
    export let sub;

    export let isDM = false;
    
    const subrace = dnd.subraces.find(sr => sr.index == sub.subRace);
    const spellcasting = dnd.levels.find(lev => lev.level == l && lev.class.name == c).spellcasting;

    let traitNames = [r, c];

    // testing
    if (isDM) { sub = {}; }

    // get all racial traits
    let racialTraits = isDM ? traits : traits
        .filter(t => t.races.find(tr => tr.name == r || tr.name == sub.subRace))
        .map(t => {t.raceclass = r; return t; });

    // get all class features
    let characterFeatures = isDM ? features : features
        .filter(f => f.level <= l && 
                f.class.name == c && 
                (!f.group || f.name == sub.subClass) && !f.name.includes('Choose:'))
        .map(f => { f.raceclass = c; return f;});
    if (spellcasting) {
        const spellcastingCard = {
            name: "Spellcasting",
            raceclass: c,
            desc: Object.entries(spellcasting)
                .map(sc => {
                    if (sc[1] > 0) {
                        const spellType = sc[0].replace(/_/g, " ").replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());
                        return `${spellType}: ${sc[1]}`;
                    }
                    return '';
                })
        };
        characterFeatures.push(spellcastingCard);
    }
    const allTraits = racialTraits.concat(characterFeatures)
        .map(t => {
            // set color
            const colors = effectColors[t.raceclass] ? effectColors[t.raceclass] :  [ '#ACA9BB', '#474554'];

            // set text
            let description = t.desc.reduce((d, d1) => `${d}<p>${d1}</p>`);
            if (t.index == 17) {
                const draconicAncestry = subrace;
                description = description.replace(/\|COLOR\|/g, draconicAncestry.name).replace(/\|DAMAGE\|/g, draconicAncestry.breathWeapon).replace(/\|DAMAGE_TYPE\|/g, draconicAncestry.damageType)
            }

            return {
                name: t.name,
                colors: colors,
                raceclass: t.raceclass,
                description: description,
                size: description.length > 2000 ? 3 : 1
            };
        });

</script>


<main>
    <div class="trait-header">Features/Traits</div>
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