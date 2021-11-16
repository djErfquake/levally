<script>
    import RoleHeader from './RoleHeader.svelte';

    export let role;

</script>


<main>
    <RoleHeader role={role}/>
    <section class="description">{role.power}</section>
</main>


<style>
    .description {
        font-weight: 300;
        font-size: 1.05em;
        padding: 15px;
    }
    
</style>