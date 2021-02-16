<script>
    import SpellComponent from './Spell.svelte';
    import spellHelper from '../../../rpg/spells.js';
    // console.log('spells', spells);
    
    export let characterSpells;
    // console.log(spells[characterSpells[0]]);

    characterSpells = characterSpells.map(s => {
        let spell = spellHelper.spells[s];
        const colors = spellHelper.effectColors[spell.effect];
        if (colors) { spell.colors = colors; }
        return spell;
    });

</script>


<main>
    {#each characterSpells as spell}
        <SpellComponent {...spell} />
    {/each}
</main>


<style>
    main {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
    }

</style>