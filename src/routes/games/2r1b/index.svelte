<script>
    import io from "socket.io-client";
    import RoleCard from '../../../components/games/2r1b/RoleCard.svelte';

    let role = null;

    const socket = io();
    socket.on('setRole', function(data) {
        role = data;
    });
    socket.emit('init2R1B');


</script>


<main>
    {#if role != null}
        <RoleCard role={role}></RoleCard>
    {/if}
</main>


<style>

</style>