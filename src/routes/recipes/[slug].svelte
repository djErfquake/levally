<script context="module">
    import { onMount } from 'svelte';

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
        else {
            recipe = {
                name: 'Garlic Butter Chicken Bites',
                desc: [
                    "Tender, juicy, bite size pieces of chicken breast are pan seared until beautifully golden brown and coated in a rich garlic and butter sauce. Does dinner get any better?",
                    "This is my something out of nothing dinner. You likely already have all of the ingredients on hand to make these and those that you don’t can be swapped for other flavors."
                ],
                linkUrl: 'https://www.cookingclassy.com/garlic-butter-chicken-bites/',
                picUrl: 'https://www.cookingclassy.com/wp-content/uploads/2020/04/garlic-butter-chicken-bites-1-600x900.jpg',
                servings: 3,
                prepTime: 9,
                cookTime: 6,
                tags: [ 'chicken' ],
                ingredients: [
                    {
                        main: [
                            "1 package of chicken breasts or tenders",
                            "1 cup flour",
                            "2 tsp italian seasoning",
                            "1 tsp salt",
                            "1/2 tsp pepper",
                            "1 1/2 tbsp olive oil",
                            "3 tbsp butter",
                            "1 1/2 tsp garlic"
                        ]
                    }
                ],
                directions: [
                    {
                        main: [
                            "Heat pan: Preheat a 12-inch non-stick skillet over medium-high heat.",
                            "Dry chicken (for a better sear): Dab chicken on all sides dry with paper towels.",
                            "Toss chicken with flour and seasonings: Sprinkle over flour and Italian seasoning, and season with desired amount of salt and pepper. Toss well to evenly coat (all flour should stick to chicken and not be left behind on cutting board, keep tossing if needed).",
                            "Heat oil and 1 Tbsp butter in skillet: Add 1 Tbsp olive oil and 1 Tbsp butter to skillet, butter should melt quickly. Tilt pan to evenly coat.",
                            "Sear chicken: Add chicken in an even layer, work to leave some space between pieces so they’ll brown rather than steam. Let cook until nicely golden brown on bottom, about 3 minutes then flip to opposite side and cook 2 minutes longer, or until nearly cooked through.",
                            "Finish with butter, garlic and parsley: Add remaining 2 Tbsp butter in small pieces, garlic and parsley. Cook 1 minute longer."
                        ]
                    }
                ],
                tips: [
                    "For extra herb flavor double up on the parsley. For another layer of flavor you can finish by juicing in half a lemon.",
                    "Nutrition estimate based on 3 servings. Does not include added salt."
                ],
                variations: [
                    "If you prefer chicken thighs those will work here too. Just go with boneless skinless and trim away visible fat, then cook about 1 minute longer."
                ]
            };
            // console.log('recipe', recipe);
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
    {#if recipe != null}
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