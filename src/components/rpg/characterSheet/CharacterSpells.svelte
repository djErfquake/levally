<script>
    import dnd from '../../../rpg/dnd.js';
    import SpellComponent from './Spell.svelte';
    import effectColors from '../../../rpg/effects.js';
    
    export let characterSpells;
    // let spellsByLevel = [];
    
    const allSpells = dnd.spells;
    $: spellList = characterSpells.map(s => {
        let spell = allSpells.find(sp => sp.index == s);
        const colors = effectColors[spell.school.name];
        if (colors) { spell.colors = colors; }
        return spell;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

    function getSpellsByLevel(spells) {
        let spellsByLevel = [];
        for (let i = 0; i <= 20; i++) {
            let spellsAtLevel = [];
            spellsAtLevel = spellsAtLevel.concat(spellList.filter(s => s.level == i));
            spellsByLevel.push(spellsAtLevel);
        }
        return spellsByLevel;
    }

</script>


<main>
    {#each getSpellsByLevel(spellList) as levelSpells, level}
        {#if levelSpells.length > 0}
            <div class="spell-level-header">
            {#if level == 0}
                Cantrips
            {:else}
                Level {level} Spells
            {/if}
            </div>
            <div class="spell-level-row">
                {#each levelSpells as s}
                <SpellComponent name={s.name} level={s.level} casting_time={s.casting_time} range={s.range} components={s.components} duration={s.duration} concentration={s.concentration} desc={s.desc} colors={s.colors} higher_level={s.higher_level}/>
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