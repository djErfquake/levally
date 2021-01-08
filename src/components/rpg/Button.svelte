<script>
    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';

    export let text;
    export let onClick = null;
    let hovering = false;

    function enter() { hovering = true; }
    function leave() { hovering = false; }
    function click() { if (onClick) { onClick(); }}
</script>


<main>
    <div class="button" class:hover="{hovering}" on:mouseenter={enter} on:mouseleave={leave} on:click={click}>{@html text}</div>
</main>


<style>
    main {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button {
        margin: 0 0.3em 0.3em 0;
        padding: 0.45em 0.8em;
        border: 0.1em solid #475F94;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 300;
        text-align: center;
        color: #475F94;
        transition: all 0.2s;
    }

    .hover {
        background-color: #475F94;
        color: #fff;
    }
</style>