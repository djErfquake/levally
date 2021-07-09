<script context="module">
    let recipe = null;
    let recipeIndex = -1;

    export async function preload(page, session) {
		const { slug } = page.params;
        recipeIndex = slug;

        const res = await this.fetch(`api/recipe/${recipeIndex}`);
        // console.log('got response on front-end', res);
        if (res.ok) {
            try {
                recipe = await res.json();
                console.log('successfully found recipe', recipe.name);
            }
            catch (err) {
                console.log('error parsing recipe');
            }
        }
	}



</script>
<script>
    import Recipe from '../../components/recipes/Recipe.svelte';
    import Loader from '../../components/recipes/Loader.svelte';

    function addRecipe() {
        insert();
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
            }
            catch (err) {
                console.log('error parsing recipe');
            }
        }
    }
    
</script>


<main>
    <!-- <button class="test" on:click={addRecipe}></button> -->
    {#if recipe}
    <Recipe recipe={recipe}></Recipe>
    {:else}
    <Loader></Loader>
    {/if}
</main>

<style>
    /* .test {
        width: 500px;
        height: 500px;
        background-color: royalblue;
    } */
</style>