<script>
    export let label;
    export let value;
</script>


<div class="input">
    <input placeholder="{label}" type="text" bind:value={value}/>
</div>

<style>
    input {
        border: none;
        border-bottom: 5px solid #118ab2;
        padding-left: 8px;
        /* border-radius: 8px; */
        font-size: 1.5em;
        width: 15vw;
        margin: 0 5px;
    }

    input:focus{
        outline: none;
    }
</style>