<script >
    import { onMount } from 'svelte';
    import Loader from '../../components/recipes/Loader.svelte';
    import RecipeEdit from '../../components/recipes/RecipeEdit.svelte';
    import Button from '../../components/recipes/Button.svelte';
    import Swal from "sweetalert2";

    let recipe = null;
    let recipeIndex = -1;

    onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
        recipeIndex = urlParams.get('id');

        const res = await fetch(`api/recipe/${recipeIndex}`);
        if (res.ok) {
            try {
                recipe = await res.json();
                console.log('successfully found recipe', recipe.name);
                parseRecipe();
            }
            catch (err) {
                console.log('error parsing recipe', err);
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Can't find that recipe.`
            });
        }
	});

    function parseRecipe() {
        recipe.desc = recipe.desc == "[]" ? "" : JSON.parse(recipe.desc).reduce((a, i) => `${a}\n${i}`);
        recipe.ingredients = recipe.ingredients == "[]" ? "" : JSON.parse(recipe.ingredients)[0].main.reduce((a, i) => `${a}\n${i}`);
        recipe.directions = recipe.directions == "[]" ? "" : JSON.parse(recipe.directions)[0].main.reduce((a, i) => `${a}\n${i}`);
        recipe.tips = recipe.tips == "[]" ? "" : JSON.parse(recipe.tips).reduce((a, i) => `${a}\n${i}`);
        recipe.variations = recipe.variations == "[]" ? "" : JSON.parse(recipe.variations).reduce((a, i) => `${a}\n${i}`);
        recipe.tags = JSON.parse(recipe.tags);

        console.log(recipe);
    }

    function saveRecipe() {
        if (!validateRecipe()) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Recipe',
                text: 'Recipes must have a name and ingredients.'
            });
            return;
        }

        let newRecipe = recipe;
        if (newRecipe.desc.trim() !== '') { newRecipe.desc = newRecipe.desc.split("\n"); } else { newRecipe.desc = []; }
        if (newRecipe.tips.trim() !== '') { newRecipe.tips = newRecipe.tips.split("\n"); } else { newRecipe.tips = []; }
        if (newRecipe.variations.trim() !== '') { newRecipe.variations = newRecipe.variations.split("\n"); } else { newRecipe.variations = []; }
        if (newRecipe.ingredients.trim() !== '') { newRecipe.ingredients = [{main: newRecipe.ingredients.split("\n")}]; } else { newRecipe.ingredients = [{main:''}]; }
        if (newRecipe.directions.trim() !== '') { newRecipe.directions = [{main: newRecipe.directions.split("\n")}]; } else { newRecipe.directions = [{main:''}]; }

        console.log(newRecipe);
        update(newRecipe);
    }

    function validateRecipe() {
        return (recipe.name.trim() !== '' || recipe.ingredients.trim() !== '')
    }

    

    async function update(newRecipe) {
        // console.log('sending', JSON.stringify(recipe));
        const res = await fetch(`api/recipe/edit`, { 
            method: 'POST',
            body: JSON.stringify(newRecipe),
            headers: { 'Content-Type': 'application/json'}
        });
        console.log('got response on front-end', res);
        if (res.ok) {
            try {
                recipe = await res.json();
                console.log('successfully saved recipe', recipe.name);
                Swal.fire({
                    icon: 'success',
                    title: 'Recipe Saved'
                });
                parseRecipe();
            }
            catch (err) {
                console.log('error parsing recipe', err);
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
    

    {#if recipe}
    <RecipeEdit bind:recipe={recipe}></RecipeEdit>
    <div class="add-button" on:click={saveRecipe}>
        <Button text="Save Recipe"></Button>
    </div>
    {:else}
    <Loader></Loader>
    {/if}
    
</main>

<style>
    .add-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
</style>