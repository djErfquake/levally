<script>
    import TraitComponent from './Trait.svelte';
    import traits from '../../../rpg/traits.js';
    import effectColors from '../../../rpg/effects.js';
    
    export let r;
    export let c;
    export let l;
    export let isDM = false;

    let characterTraits = isDM ? traits : traits.filter(t => t.level <= l && (t.raceclass == r || t.raceclass == c));

    characterTraits = characterTraits.map(t => {
        const colors = effectColors[t.effect];
        if (colors) { t.colors = colors; }
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