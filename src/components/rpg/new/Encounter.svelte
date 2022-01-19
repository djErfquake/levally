<script>
    /* #ef476f #ffd166 #06d6a0 #118ab2 #073b4c */
    import io from "socket.io-client";
    import encounterHelper from '../../../rpg/encounterHelper';

    import InitiativeTable from '../../../components/rpg/new/InitiativeTable.svelte';
    import AddCharacter from '../../../components/rpg/new/AddCharacter.svelte';
    import AddMonster from '../../../components/rpg/new/AddMonster.svelte';
    import AddSpell from '../../../components/rpg/new/AddSpell.svelte';
    import Spells from '../../../components/rpg/new/Spells.svelte';
   
    export let isDm = false;
    let encounter = encounterHelper.defaultEncounter;
    let characterId = null;
    $: character = encounter.characters.find(c => c.id == characterId);

    const socket = io();
    socket.on('update', function(data) {
        encounter = data;
    });
    socket.on('character_added', function(data) {
        characterId = data;
    });
    socket.emit('initRPG');

    function addCharacter(e) {
        socket.emit('add_character', e.detail);
    }

    function addMonster(e) {
        socket.emit('add_monster', e.detail);
    }
    
    function updateStat(e) {
        socket.emit('modify_stat', e.detail);
    }

    function resetRound() {
        socket.emit('reset_round');
    }

    function removeCharacter(e) {
        socket.emit('remove_character', e.detail);
    }

    function addSpell(e) {
        socket.emit('add_spell', e.detail);
    }

</script>


<main>
    <InitiativeTable {encounter} {characterId} {isDm} on:updateStat={updateStat} on:removeCharacter={removeCharacter} on:resetRound={resetRound}></InitiativeTable>
    <div class="add_elements">
        {#if isDm}
            <AddMonster on:monsterAdded={addMonster}></AddMonster>
            <AddSpell {character} on:updateStat={updateStat} on:addSpell={addSpell}></AddSpell>
        {:else}
            {#if !characterId}
                <AddCharacter on:characterAdded={addCharacter}></AddCharacter>
            {:else}
            <AddSpell {character} on:updateStat={updateStat} on:addSpell={addSpell}></AddSpell>
            {/if}
        {/if}
    </div>
    <Spells {encounter} {isDm} {characterId}></Spells>
</main>

<style>
    :global(body) {
        height: 100%;
        background-color: #4b355f;
        width: 85vw;
        margin: auto;
    }

    .add_elements {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
    }
</style>