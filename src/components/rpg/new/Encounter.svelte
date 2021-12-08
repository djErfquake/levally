<script>
    /* #ef476f #ffd166 #06d6a0 #118ab2 #073b4c */
    import io from "socket.io-client";
    import intiative from '../../../rpg/initiative';

    import InitiativeTable from '../../../components/rpg/new/InitiativeTable.svelte';
    import AddCharacter from '../../../components/rpg/new/AddCharacter.svelte';
    import AddMonster from '../../../components/rpg/new/AddMonster.svelte';
   
    export let isDm = false;
    let encounter = intiative.defaultEncounter;
    let characterId = null;

    const socket = io();
    socket.on('update', function(data) {
        console.log('update');
        encounter = data;
    });
    socket.on('character_added', function(data) {
        console.log('character_added');
        characterId = data;
    });
    socket.emit('initRPG');

    function addCharacter(e) {
        socket.emit('add_character', e.detail);
    }

    function updateStat(e) {
        socket.emit('modify_stat', e.detail);
    }

    function addMonster(e) {
        socket.emit('add_monster', e.detail);
    }

</script>


<main>
    <InitiativeTable encounter={encounter} characterId={characterId} isDm={isDm} on:updateStat={updateStat}></InitiativeTable>
    <div class="add_elements">
        {#if isDm}
            <AddMonster on:monsterAdded={addMonster}></AddMonster>
        {:else}
            {#if !characterId}
                <AddCharacter on:characterAdded={addCharacter}></AddCharacter>
            {/if}
        {/if}
    </div>
</main>

<style>
    :global(body) {
        height: 100%;

        /* color: #fff; */
        /* background-color: #073b4c; */
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