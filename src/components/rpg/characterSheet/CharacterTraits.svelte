<script>
    import TraitComponent from './Trait.svelte';
    import traitHelper from '../../../rpg/traits.js';
    
    export let r;
    export let c;
    export let l;

    let traits = traitHelper.traits.filter(t => t.level <= l && (t.raceclass == r || t.raceclass == c));

    traits = traits.map(t => {
        const colors = traitHelper.effectColors[t.effect];
        if (colors) { t.colors = colors; }
        return t;
    });

</script>


<main>
    <div class="trait-header">Features/Traits</div>
    <div class="row">
        {#each traits as trait}
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