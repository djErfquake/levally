<script>
    import dnd from '../../../rpg/dnd.js'
    import Spell from './Spell.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let encounter;
    export let isDm = false;
    export let characterId = null;

    const DEFAULT_COLORS = [ "#ffbe76", "#f0932b" ];

    let spells = [];
    $: {
        if (isDm) {
            const dmSpells = [...encounter.spells].map(s => {
                return {
                    spell: s,
                    characterId: null
                };
            });
            let characterSpells = [];
            encounter.characters.forEach(c => {
                if (c.spells) {
                    const cSpells = c.spells.map(s => {
                        return {
                            spell: s,
                            characterId: c.id
                        };
                    });
                    characterSpells = characterSpells.concat(cSpells);
                }
            });
            spells = [...dmSpells, ...characterSpells];
            spells = [...new Set(spells)];
        }
        else if (characterId) {
            spells = [
                ...encounter.characters
                    .find(c => c.id == characterId).spells
                    .map(s => { return {
                        spell: s,
                        characterId: characterId
                    }})
            ];
        }
        spells = spells.map(s => {
            let spell = dnd.spells.find(dndS => parseInt(dndS.index) == s.spell);
            if (spell.school && spell.school.name && dnd.magicSchools[spell.school.name]) {
                spell.colors = dnd.magicSchools[spell.school.name];
            }
            else {
                spell.color = DEFAULT_COLORS;
            }
            return {
                spell: spell,
                characterId: s.characterId
            };
        });
    }

    function removeSpell(e) {
        dispatch('removeSpell', e.detail);
    }
</script>


<div class="spells">
    {#each spells as s}
         <Spell spell={s.spell} characterId={s.characterId} on:removeSpell={removeSpell}></Spell>
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