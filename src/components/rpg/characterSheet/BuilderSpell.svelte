<script>
    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';
    

    export let id;
    export let name;

    function remove(event) {
        dispatch('removeSpell', id);
    }

</script>


<main>
    <button on:click={remove}>X</button> 
    {name}
</main>


<style>
    

</style>