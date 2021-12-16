<script>
    export let text;
    export let onClick = null;
    export let width = "auto";
    export let fontSize = "1.5em";
    export let hoverColor = "#06d6a0";
    $: cssStyles = `--hover-color:${hoverColor}; --font-size:${fontSize};`;
    let hovering = false;

    function enter() { hovering = true; }
    function leave() { hovering = false; }
    function click() { if (onClick) { onClick(); }}
</script>


<main style="width: {width};{cssStyles}">
    <div class="button unselectable" class:hover="{hovering}" on:mouseenter={enter} on:mouseleave={leave} on:click|stopPropagation={click}>{@html text}</div>
</main>


<style>

    .button {
        margin: 0 0.3em 0.3em 0;
        padding: 0.45em 0.8em;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 600;
        text-align: center;     
        transition: all 0.2s;
        border-radius: 8px;
        background-color: #118ab2;
        color: #fff;

        font-size: var(--font-size, 1.5em);

        width: 100%;
    }

    .hover {
        background-color: var(--hover-color, #06d6a0);
    }

    .unselectable {
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>