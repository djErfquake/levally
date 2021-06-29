<script>
    import RecipeEdit from '../../components/recipes/RecipeEdit.svelte';
    import Button from '../../components/recipes/Button.svelte';
    import Swal from "sweetalert2";

    let recipe = clearRecipe();

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
    <RecipeEdit bind:recipe={recipe}></RecipeEdit>
    <div class="add-button" on:click={addRecipe}>
        <Button text="Add Recipe"></Button>
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