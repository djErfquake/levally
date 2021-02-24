<script>
    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';

    import Button from '../Button.svelte';
    

    export let id;
    export let name;

    function remove(event) {
        dispatch('removeSpell', id);
    }

</script>


<main>
    <Button onClick={remove} text={`✖`}></Button>
    <div class="spell-name">{name}</div>
</main>


<style>
    main {
        display: flex;
        align-items: center;
    }

    .spell-name {
        font-size: 1.1em;
        margin-left: 5px;
    }

</style>