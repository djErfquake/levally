<script>
    import TraitComponent from './Trait.svelte';
    import dnd from '../../../rpg/dnd.js';
    // import traits from '../../../rpg/traits.js';
    import effectColors from '../../../rpg/effects.js';
    import dndSrd from 'dnd5-srd';

    const traits = dndSrd.data.traits;
    const features = dndSrd.data.features;
    
    export let r;
    export let c;
    export let l;
    export let sub;

    export let isDM = false;
    
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

    const allTraits = racialTraits.concat(characterFeatures)
        .map(t => {
            // set color
            const colors = effectColors[t.raceclass] ? effectColors[t.raceclass] :  [ '#ACA9BB', '#474554'];

            // set text
            const description = t.desc.reduce((d, d1) => `${d1}<p>${d.replace(/\n{2,}/g, '</p><p>').replace(/\|ul\|/g, '<ul><li>').replace(/\|\/ul\|/g, '</li></ul>').replace(/\|li\|/g, '</li><li>')}</p>`);
            // if (draconicAncestry) {
            //     description = description.replace(/\|COLOR\|/g, draconicAncestry.dragon).replace(/\|DAMAGE\|/g, draconicAncestry.breathWeapon).replace(/\|DAMAGE_TYPE\|/g, draconicAncestry.damageType)
            // }

            return {
                name: t.name,
                colors: colors,
                raceclass: t.raceclass,
                description: description,
                size: t.desc.length > 3 ? 3 : 1
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