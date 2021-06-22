<script context="module">
    import { onMount } from 'svelte';
    import { PostgrestClient } from '@supabase/postgrest-js';

    let recipe = null;
    let recipeIndex = -1;

    const dbEndpoint = 'postgres://bvffqleuejqjsh:c2b9a63c00133c861e6f5005d7ec09a23c5075e944c684e456436064a72d3f51@ec2-54-91-188-254.compute-1.amazonaws.com:5432/d4ue1h8h4ag673';
    let dbClient = new PostgrestClient(dbEndpoint); 

    export async function preload(page, session) {
		const { slug } = page.params;
        recipeIndex = slug;

        const { data, error} = await dbClient
            .from('recipes')
            .select();
            // .match({id: recipeIndex});
        console.log('data from db', data);
        console.log('error on select', error);
	}

    onMount(async() => {
        // const { data, error} = await dbClient
        //     .from('recipes')
        //     .select();
        //     // .match({id: recipeIndex});
        // console.log('data from db', data);
        // console.log('error on select', error);

    //     recipe = {
    //         name: 'Garlic Butter Chicken Bites',
    //         desc: [
    //             "Tender, juicy, bite size pieces of chicken breast are pan seared until beautifully golden brown and coated in a rich garlic and butter sauce. Does dinner get any better?",
    //             "This is my something out of nothing dinner. You likely already have all of the ingredients on hand to make these and those that you don’t can be swapped for other flavors."
    //         ],
    //         linkUrl: 'https://www.cookingclassy.com/garlic-butter-chicken-bites/',
    //         picUrl: 'https://www.cookingclassy.com/wp-content/uploads/2020/04/garlic-butter-chicken-bites-1-600x900.jpg',
    //         servings: 3,
    //         prepTime: 9,
    //         cookTime: 6,
    //         tags: [ 'chicken' ],
    //         ingredients: [
    //             {
    //                 main: [
    //                     "1 package of chicken breasts or tenders",
    //                     "1 cup flour",
    //                     "2 tsp italian seasoning",
    //                     "1 tsp salt",
    //                     "1/2 tsp pepper",
    //                     "1 1/2 tbsp olive oil",
    //                     "3 tbsp butter",
    //                     "1 1/2 tsp garlic"
    //                 ]
    //             }
    //         ],
    //         directions: [
    //             {
    //                 main: [
    //                     "Heat pan: Preheat a 12-inch non-stick skillet over medium-high heat.",
    //                     "Dry chicken (for a better sear): Dab chicken on all sides dry with paper towels.",
    //                     "Toss chicken with flour and seasonings: Sprinkle over flour and Italian seasoning, and season with desired amount of salt and pepper. Toss well to evenly coat (all flour should stick to chicken and not be left behind on cutting board, keep tossing if needed).",
    //                     "Heat oil and 1 Tbsp butter in skillet: Add 1 Tbsp olive oil and 1 Tbsp butter to skillet, butter should melt quickly. Tilt pan to evenly coat.",
    //                     "Sear chicken: Add chicken in an even layer, work to leave some space between pieces so they’ll brown rather than steam. Let cook until nicely golden brown on bottom, about 3 minutes then flip to opposite side and cook 2 minutes longer, or until nearly cooked through.",
    //                     "Finish with butter, garlic and parsley: Add remaining 2 Tbsp butter in small pieces, garlic and parsley. Cook 1 minute longer."
    //                 ]
    //             }
    //         ],
    //         tips: [
    //             "For extra herb flavor double up on the parsley. For another layer of flavor you can finish by juicing in half a lemon.",
    //             "Nutrition estimate based on 3 servings. Does not include added salt."
    //         ],
    //         variations: [
    //             "If you prefer chicken thighs those will work here too. Just go with boneless skinless and trim away visible fat, then cook about 1 minute longer."
    //         ]
    //     };
    });



</script>
<script>
    import Recipe from '../../components/recipes/Recipe.svelte';
    import Loader from '../../components/recipes/Loader.svelte';

    // import { Client } from 'pg';
    // const pgClient = new Client({
    //     // connectionString: 'postgres://callev:ArchdukeDinosaur@localhost:5432/LeVally'
    //     connectionString: 'postgres://bvffqleuejqjsh:c2b9a63c00133c861e6f5005d7ec09a23c5075e944c684e456436064a72d3f51@ec2-54-91-188-254.compute-1.amazonaws.com:5432/d4ue1h8h4ag673',
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // });
    // pgClient.connect();

    function insertIntoDB() {
        // const text = 'INSERT INTO recipes(name, desc, ingredients, directions, tips, variations, servings, prepTime, cookTime, linkUrl, picUrl, tags) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
        // const values = [
        //     recipe.name,
        //     recipe.desc,
        //     JSON.stringify(recipe.ingredients),
        //     JSON.stringify(recipe.directions),
        //     JSON.stringify(recipe.tips),
        //     JSON.stringify(recipe.variations),
        //     parseInt(recipe.servings),
        //     parseInt(recipe.prepTime),
        //     parseInt(recipe.cookTime),
        //     recipe.linkUrl,
        //     recipe.picUrl,
        //     JSON.stringify(recipe.tags)
        // ];
        // pgClient.query(text, values, (err, res) => {
        //     if (err) {
        //         console.log(err.stack);
        //     }
        //     else {
        //         console.log(res.rows[0]);
        //     }
        // });

        doInsert();
    }

    async function doInsert() {
        const values = [
            {
                name: recipe.name,
                desc: recipe.desc,
                ingredients: JSON.stringify(recipe.ingredients),
                directions: JSON.stringify(recipe.directions),
                tips: JSON.stringify(recipe.tips),
                variations: JSON.stringify(recipe.variations),
                servings: parseInt(recipe.servings),
                prepTime: parseInt(recipe.prepTime),
                cookTime: parseInt(recipe.cookTime),
                linkUrl: recipe.linkUrl,
                picUrl: recipe.picUrl,
                tags: JSON.stringify(recipe.tags)
            }
        ];
        const { data, error} = await dbClient
            .from('recipes')
            .insert()
            .match({id: recipeIndex});
        console.log('insert on db', data);
        console.log('error on insert', error);
    }
    
</script>


<main>
    {#if recipe != null}
    <Recipe {...recipe}></Recipe>
    {:else}
    <Loader></Loader>
    <div>Loading...</div>
    {/if}
</main>