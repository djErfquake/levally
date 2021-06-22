<script>
    import recipes from '../../data/recipes';

    export let tags;
</script>

<div class="container">
    {#each tags as tag}
    <div class="section" style="background-color: {recipes.tags.find(t => t.name == tag).color};"></div>
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