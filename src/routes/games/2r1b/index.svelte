<script>
    import io from 'socket.io-client';
    import playerSocket from '../../../game/2r1b/playerSocket';
    import RoleCard from '../../../components/games/2r1b/RoleCard.svelte';

    let gameSettings = {
        // Bomber, President, Agent are mandatory
        roles: [ 'Sniper', 'Target', 'Decoy' ] 
    };

    let role = null;

    
    function gotRole(newRole) {
        role = newRole;
    }
    playerSocket.host.initialize({callbacks: { gotRole: gotRole}});
    playerSocket.host.createRoom();

    function getRole() {
        playerSocket.host.sendRoles(gameSettings);
    }


</script>


<main>
    {#if role != null}
        <RoleCard role={role}></RoleCard>
    {:else}
    role: {JSON.stringify(role)}
    {/if}

    <button on:click={getRole}>get role</button>

</main>


<style>

</style>