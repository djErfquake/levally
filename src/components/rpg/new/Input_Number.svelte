<script>
    export let label;
    export let value;
    export let min = null;
</script>


<div class="input">
    {#if min}
    <input placeholder="{label}" type="number"inputmode="decimal" min="{min}" bind:value={value}/>
    {:else}
    <input placeholder="{label}" type="number" inputmode="decimal" bind:value={value}/>
    {/if}
</div>

<style>
    input {
        border: none;
        border-bottom: 5px solid #118ab2;
        /* min-width: 20vw; */
        padding-left: 8px;
        /* border-radius: 8px; */
        font-size: 1.5em;
        width: 3vw;
        margin: 0 5px;
    }

    input:focus{
        outline: none;
    }
</style>