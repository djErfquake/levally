<script>
    import dnd from '../../../rpg/dnd.js'
    import Spell from './Spell.svelte';

    export let encounter;
    export let isDm = false;
    export let characterId = null;

    const DEFAULT_COLORS = [ "#ffbe76", "#f0932b" ];

    let spells = [];
    $: {
        if (isDm) {
            const dmSpells = [...encounter.spells];
            let characterSpells = [];
            encounter.characters.forEach(c => {
                if (c.spells) {
                    characterSpells = characterSpells.concat(c.spells);
                }
            });
            spells = [...dmSpells, ...characterSpells];
            spells = [...new Set(spells)];
        }
        else if (characterId) {
            spells = [...encounter.characters.find(c => c.id == characterId).spells];
        }
        spells = spells.map(s => {
            let spell = dnd.spells.find(dndS => parseInt(dndS.index) == s);
            if (spell.school && spell.school.name && dnd.magicSchools[spell.school.name]) {
                spell.colors = dnd.magicSchools[spell.school.name];
            }
            else {
                spell.color = DEFAULT_COLORS;
            }
            return spell;
        });
    }
</script>


<div class="spells">
    {#each spells as spell}
         <Spell {spell}></Spell>
    {/each}
</div>


<style>
    .spells {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 25px;
    }
</style>