<script>
    import SpellComponent from './Spell.svelte';
    import spells from '../../../rpg/spells.js';
    import effectColors from '../../../rpg/effects.js';
    // console.log('spells', spells);
    
    export let characterSpells;
    export let isDM = false;
    let spellsByLevel = [];

    if (isDM) {
        characterSpells = Object.keys(spells);
    }

    characterSpells = characterSpells.map(s => {
        let spell = spells[s];
        const colors = effectColors[spell.effect];
        if (colors) { spell.colors = colors; }
        return spell;
    });

    // sort spells by level
    for (let i = 0; i <= 20; i++) {
        let spellsAtLevel = [];
        spellsAtLevel = spellsAtLevel.concat(characterSpells.filter(s => s.level == i));
        spellsByLevel.push(spellsAtLevel);
    }

</script>


<main>
    {#each spellsByLevel as levelSpells, level}
        {#if levelSpells.length > 0}
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
        {/if}
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