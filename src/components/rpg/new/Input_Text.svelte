<script>
    export let label;
    export let value;
    export let width = "15vw";

    $: cssStyles = `--textInput-width:${width};`;
</script>


<div class="input" style="{cssStyles}">
    <input placeholder="{label}" type="text" bind:value={value}/>
</div>

<style>
    input {
        border: none;
        border-bottom: 4px solid #118ab2;
        padding-left: 8px;
        /* border-radius: 8px; */
        font-size: 1.5em;
        width: var(--textInput-width, 15vw);
        margin: 0 5px;
    }

    input:focus{
        outline: none;
    }
</style>