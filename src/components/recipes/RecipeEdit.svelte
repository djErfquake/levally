<script>
    import Recipes from '../../data/recipes';
    import Toggle from './Toggle.svelte';

    export let recipe = Recipes.CreateBlankRecipe();
    recipe.tags = Recipes.tags.map(t => {return {name: t.name, active: recipe.tags.includes(t.name), color: t.color}});
    
</script>


<main>
    <div class="section">
        <h4>Name</h4>
        <input bind:value={recipe.name}>
    </div>
    <div class="section">
        <h4>Description</h4>
        <textarea bind:value={recipe.desc}></textarea>
    </div>
    <div class="section">
        <h4>Recipe URL</h4>
        <input bind:value={recipe.linkUrl}>
    </div>
    <div class="section">
        <h4>Picture URL</h4>
        <input bind:value={recipe.picUrl}>
    </div>
    <div class="section">
        <h4>Servings</h4>
        <input type=number bind:value={recipe.servings} min=1>
    </div>
    <div class="section">
        <h4>Prep Time (Min)</h4>
        <input type=number bind:value={recipe.prepTime} min=0>
    </div>
    <div class="section">
        <h4>Cook Time (Min)</h4>
        <input type="number" bind:value={recipe.cookTime} min=0>
    </div>
    <div class="section">
        <h4>Ingredients</h4>
        <textarea bind:value={recipe.ingredients}></textarea>
    </div>
    <div class="section">
        <h4>Directions</h4>
        <textarea bind:value={recipe.directions}></textarea>
    </div>
    <div class="section">
        <h4>Tips</h4>
        <textarea bind:value={recipe.tips}></textarea>
    </div>
    <div class="section">
        <h4>Variations</h4>
        <textarea bind:value={recipe.variations}></textarea>
    </div>
    <div class="section">
        <h4>Tags</h4>
        <div class="tags">
            {#each recipe.tags as tag}
            <div class="tag" style="background-color: {tag.color};">
                <div class="tag-text">{tag.name}</div>
                <Toggle bind:checked={tag.active}></Toggle>
            </div>
            {/each}
        </div>
    </div>
    
</main>

<style>
    main {
        font-size: 1.5em;
        background-color: #fffffe;
        color: #1b2d45;
        width: 85vw;
        margin: auto;
    }

    .section {
        width: 100%;
        margin-bottom: 20px;
    }

    h4 {
        margin: 0px;
    }

    input {
        width: 100%;
    }

    textarea {
        width: 100%;
        height: 100px;
    }

    .tags {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .tag {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 60px;
        margin: 5px;
        padding: 5px;
    }

    .tag-text {
        color: #fff;
        flex-grow: 1;
        margin: 5px;
    }

    
</style>