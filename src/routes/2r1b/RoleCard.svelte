<script>
    /*
        https://flatuicolors.com/palette/ca
        https://www.shapedivider.app/
    */

    // import RoleHeader from '../../components/RoleHeader.svelte';

    export let role;

</script>


<main>
    <!-- <RoleHeader role={role}/> -->
    <section class="description">{role.power}</section>
</main>


<style>
    .description {
        font-weight: 300;
        font-size: 1.05em;
        padding: 15px;
    }
    
</style>