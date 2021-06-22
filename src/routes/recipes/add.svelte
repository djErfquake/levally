<script>
    import recipes from '../../data/recipes';
    import Button from '../../components/recipes/Button.svelte';
    import Toggle from '../../components/recipes/Toggle.svelte';

    let recipe = {
        name: '',
        desc: '',
        linkUrl: '',
        picUrl: '',
        servings: 1,
        prepTime: 0,
        cookTime: 0,
        ingredients: '',
        directions: '',
        tips: '',
        variations: '',
        tags: ''
    };
    let tags = recipes.tags.map(t => {return {name: t.name, active: false, color: t.color}});

    function addRecipe() {
        recipe.desc = recipe.desc.split("\n");
        recipe.tips = recipe.tips.split("\n");
        recipe.variations = recipe.variations.split("\n");
        recipe.ingredients = [{main: recipe.ingredients.split("\n")}];
        recipe.directions = [{main: recipe.directions.split("\n")}];
        recipe.tags = tags.filter(t => t.active).map(t => t.name);
        console.log(recipe);
    }
    
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
        {#each tags as tag}
        <div class="tag" style="background-color: {tag.color};">{tag.name}</div>
        <Toggle bind:checked={tag.active}></Toggle>
        {/each}
    </div>
    <div class="add-button" on:click={addRecipe}>
        <Button text="Add Recipe"></Button>
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

    .tag {
        color: #fff;
    }

    .add-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
</style>