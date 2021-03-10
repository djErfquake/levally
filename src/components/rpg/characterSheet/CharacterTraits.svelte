<script>
    import TraitComponent from './Trait.svelte';
    import dnd from '../../../rpg/dnd.js';
    import traits from '../../../rpg/traits.js';
    import effectColors from '../../../rpg/effects.js';
    
    export let r;
    export let c;
    export let l;
    export let sub;

    export let isDM = false;
    
    let traitNames = [r, c];

    // testing
    if (isDM) { sub = {}; }
    
    if (sub.fightingStyle) { traitNames.push(sub.fightingStyle); }
    
    const draconicAncestry = sub.draconicAncestry ? dnd.draconicAncestries.filter(da => da.dragon == sub.draconicAncestry)[0] : null;

    let characterTraits = isDM ? traits : traits.filter(t => t.level <= l && traitNames.includes(t.raceclass));
    characterTraits = characterTraits.map(t => {
        // set color
        const colors = effectColors[t.effect];
        if (colors) { t.colors = colors; }

        // set text
        t.description = `<p>${t.description.replace(/\n{2,}/g, '</p><p>').replace(/\|ul\|/g, '<ul><li>').replace(/\|\/ul\|/g, '</li></ul>').replace(/\|li\|/g, '</li><li>')}</p>`;
        if (draconicAncestry) {
            t.description = t.description.replace(/\|COLOR\|/g, draconicAncestry.dragon).replace(/\|DAMAGE\|/g, draconicAncestry.breathWeapon).replace(/\|DAMAGE_TYPE\|/g, draconicAncestry.damageType)
        }

        return t;
    });

</script>


<main>
    <div class="trait-header">Features/Traits</div>
    <div class="row">
        {#each characterTraits as trait}
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