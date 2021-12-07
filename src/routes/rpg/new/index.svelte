<script>
    /* #ef476f #ffd166 #06d6a0 #118ab2 #073b4c */
    import io from "socket.io-client";
    import intiative from '../../../rpg/initiative';

    import InitiativeTable from '../../../components/rpg/new/InitiativeTable.svelte';
    // import Button from '../../../components/rpg/new/Button.svelte';
    import AddCharacter from '../../../components/rpg/new/AddCharacter.svelte';
   
    let encounter = intiative.defaultEncounter;

    const socket = io();
    socket.on('update', function(data) {
        encounter = data;
    });
    socket.emit('initRPG');

    function addCharacter() {

    }
</script>


<main>
    <InitiativeTable encounter={encounter}></InitiativeTable>
    <div class="add_elements">
        <AddCharacter></AddCharacter>
    </div>
</main>

<style>
    :global(body) {
        height: 100%;

        color: #fff;
        background-color: #073b4c;

        width: 85vw;
        margin: auto;
    }

    .add_elements {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>