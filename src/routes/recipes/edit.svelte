<script >
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';
    import Recipes from '../../data/recipes.js';
    import Loader from '../../components/recipes/Loader.svelte';
    import RecipeEdit from '../../components/recipes/RecipeEdit.svelte';
    import Button from '../../components/recipes/Button.svelte';

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
                recipe = dbToString(recipe);
            }
            catch (err) {
                console.log('error parsing recipe', err);
                Recipes.showError(Swal, `Error parsing recipe.`);
            }
        }
        else {
            Recipes.showError(Swal, `Can't find that recipe.`);
        }
	});

    function saveRecipe() {
        if (!Recipes.validate(recipe)) {
            Recipes.showWarning(Swal, `Invalid Recipe`, `Recipes must have a name and ingredients.`);
            return;
        }

        let newRecipe = Recipes.toDB(recipe);
        updateOnDB(newRecipe);
    }
    

    async function updateOnDB(newRecipe) {
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
                Recipes.showSuccess(Swal, `Recipe saved`);
                recipe = dbToString(recipe);
            }
            catch (err) {
                console.log('error parsing recipe', err);
                Recipes.showError(Swal, `Something went wrong. The recipe couldn't be saved`);
            }
        }
    }

    function deleteRecipe() {
        Swal.fire({
            title: 'Are you sure you want to delete this recipe?',
            showCancelButton: true,
            confirmButtonText: 'Yes. Delete this recipe.'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFromDB(recipe.id);
            }
        });
    }

    async function deleteFromDB(id) {
        const res = await fetch(`api/recipe/del?recipeId=${id}`, { 
            method: 'DELETE'
        });
        console.log('got response on front-end', res);
        if (res.ok) {
            try {
                recipe = await res.json();
                console.log('successfully deleted recipe', recipe.name);
                Recipes.showSuccess(Swal, `Recipe deleted`);
                recipe = dbToString(recipe);
            }
            catch (err) {
                console.log('error parsing recipe', err);
                Recipes.showError(Swal, `Something went wrong. The recipe couldn't be deleted`);
            }
        }
        else {
            console.log('error deleting recipe');
            Recipes.showError(Swal, `Something went wrong. The recipe couldn't be deleted`);
        }

        let newPage = window.location.href;
        newPage = newPage.replace(/\/\d+/g, ''); // remove recipe id
        if (!newPage.endsWith('/')) { newPage += '/'; }
        newPage += `recipes`;
        window.location = newPage;
    }

    function dbToString(recipe) {
        let newRecipe = Recipes.fromDB(recipe);
        newRecipe.ingredients = Recipes.parseMultiPartSectionToString(recipe.ingredients);
        newRecipe.directions = Recipes.parseMultiPartSectionToString(recipe.directions);
        return newRecipe;
    }
    
</script>


<main>
    {#if recipe}
    <RecipeEdit bind:recipe={recipe}></RecipeEdit>
    <div class="buttons">
        <div class="add-button button" on:click={saveRecipe}>
            <Button text="Save Recipe"></Button>
        </div>
        <div class="delete-button button" on:click={deleteRecipe}>
            <Button text="Delete Recipe"></Button>
        </div>
    </div>
    {:else}
    <Loader></Loader>
    {/if}
</main>


<style>
    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }

    .button {
        margin: 0 50px;
    }
</style>