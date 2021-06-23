<script>
    import recipes from '../../data/recipes';
    import Button from '../../components/recipes/Button.svelte';
    import Toggle from '../../components/recipes/Toggle.svelte';
    import Swal from "sweetalert2";

    let recipe = clearRecipe();
    let tags = recipes.tags.map(t => {return {name: t.name, active: false, color: t.color}});

    function clearRecipe() {
        return {
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
    }

    function addRecipe() {
        if (!validateRecipe()) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Recipe',
                text: 'Recipes must have a name and ingredients.'
            });
            return;
        }

        if (recipe.desc.trim() !== '') { recipe.desc = recipe.desc.split("\n"); }
        if (recipe.tips.trim() !== '') { recipe.tips = recipe.tips.split("\n"); }
        if (recipe.variations.trim() !== '') { recipe.variations = recipe.variations.split("\n"); }
        if (recipe.ingredients.trim() !== '') { recipe.ingredients = [{main: recipe.ingredients.split("\n")}]; }
        if (recipe.directions.trim() !== '') { recipe.directions = [{main: recipe.directions.split("\n")}]; }

        recipe.tags = tags.filter(t => t.active).map(t => t.name);

        console.log(recipe);
        insert();
    }

    function validateRecipe() {
        return (recipe.name.trim() !== '' || recipe.ingredients.trim() !== '')
    }

    

    async function insert() {
        // console.log('sending', JSON.stringify(recipe));
        const res = await fetch(`api/recipe/add`, { 
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: { 'Content-Type': 'application/json'}
        });
        console.log('got response on front-end', res);
        if (res.ok) {
            try {
                recipe = await res.json();
                console.log('successfully added recipe', recipe.name);
                Swal.fire({
                    icon: 'success',
                    title: 'Recipe Added'
                });
                recipe = clearRecipe();
            }
            catch (err) {
                console.log('error parsing recipe');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. The recipe couldn\'t be saved'
                });
            }
        }
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
        <div class="tags">
            {#each tags as tag}
            <div class="tag" style="background-color: {tag.color};">
                <div class="tag-text">{tag.name}</div>
                <Toggle bind:checked={tag.active}></Toggle>
            </div>
            {/each}
        </div>
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

    .add-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }

    
</style>