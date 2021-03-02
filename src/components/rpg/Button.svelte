<script>
    const dispatch = createEventDispatcher();
    import { createEventDispatcher } from 'svelte';

    export let text;
    export let onClick = null;
    export let width = "auto";
    let hovering = false;

    function enter() { hovering = true; }
    function leave() { hovering = false; }
    function click() { if (onClick) { onClick(); }}
</script>


<main style="width: {width};">
    <div class="button" class:hover="{hovering}" on:mouseenter={enter} on:mouseleave={leave} on:click={click}>{@html text}</div>
</main>


<style>

    .button {
        margin: 0 0.3em 0.3em 0;
        padding: 0.45em 0.8em;
        border: 0.1em solid #0f0e17;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 300;
        text-align: center;
        color: #0f0e17;
        transition: all 0.2s;
    }

    .hover {
        background-color: #0f0e17;
        color: #fff;
    }
</style>