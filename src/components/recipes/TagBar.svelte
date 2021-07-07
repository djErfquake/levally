<script>
    export let tags;
</script>

<div class="container">
    {#each tags as tag}
    {#if tag.active}
    <div class="section" style="background-color: {tag.color};"></div>
    {/if}
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        width: 100%;
        height: 5px;
    }

    .section {
        height: 100%;
        flex-grow: 1;
    }
</style>