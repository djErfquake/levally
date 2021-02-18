<script>
    import SpellComponent from './Spell.svelte';
    import spellHelper from '../../../rpg/spells.js';
    // console.log('spells', spells);
    
    export let characterSpells;
    let spellsByLevel = [];

    if (characterSpells.length > 0 && characterSpells[0] == "all") {
        characterSpells = Object.keys(spellHelper.spells);
    }

    characterSpells = characterSpells.map(s => {
        let spell = spellHelper.spells[s];
        const colors = spellHelper.effectColors[spell.effect];
        if (colors) { spell.colors = colors; }
        return spell;
    });

    // sort spells by level
    let spellLevel = 0;
    let foundSpellAtLevel = true;
    while (foundSpellAtLevel) {
        const spellsAtLevel = characterSpells.filter(s => s.level == spellLevel);
        if (spellsAtLevel.length > 0) {
            spellsByLevel.push(spellsAtLevel);
        }
        else {
            foundSpellAtLevel = false;
        }

        spellLevel++;
    }

</script>


<main>
    {#each spellsByLevel as levelSpells, level}
    <div class="spell-level-header">
    {#if level == 0}
        Cantrips
    {:else}
        Level {level} Spells
    {/if}
    </div>

    <div class="spell-level-row">
        {#each levelSpells as spell}
        <SpellComponent {...spell} />
        {/each}
    </div>
    {/each}
</main>


<style>
    main {
        display: flex;
        flex-direction: column;
    }

    .spell-level-row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        padding-bottom: 30px;
    }

    .spell-level-header {
        font-size: 3.5em;
    }

</style>