<script >
    import Swal from 'sweetalert2';
    import Recipes from '../../data/recipes.js';
    import Loader from '../../components/recipes/Loader.svelte';
    import RecipeEdit from '../../components/recipes/RecipeEdit.svelte';
    import Button from '../../components/recipes/Button.svelte';

    let recipe = Recipes.CreateBlankRecipe();

    function saveRecipe() {
        if (!Recipes.validate(recipe)) {
            Recipes.showWarning(Swal, `Invalid Recipe`, `Recipes must have a name and ingredients.`);
            return;
        }

        let newRecipe = Recipes.toDB(recipe);
        insert(newRecipe);
    }
    
    async function insert(newRecipe) {
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
                console.log('successfully saved recipe', recipe.name);
                Recipes.showSuccess(Swal, `Recipe saved`);
                recipe = Recipes.fromDB(recipe);
            }
            catch (err) {
                console.log('error parsing recipe', err);
                Recipes.showError(Swal, `Something went wrong. The recipe couldn't be saved`);
            }
        }
    }
    
</script>


<main>
    <RecipeEdit bind:recipe={recipe}></RecipeEdit>
    <div class="add-button" on:click={saveRecipe}>
        <Button text="Save Recipe"></Button>
    </div>
</main>


<style>
    .add-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
</style>



