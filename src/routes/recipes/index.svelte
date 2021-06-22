<script>
    import { onMount } from 'svelte';

    import RecipeCard from '../../components/recipes/RecipeCard.svelte';
    import Loader from '../../components/recipes/Loader.svelte';

    let recipes = null;

    onMount(async () => {
        console.log('index page');
		const res = await fetch(`api/recipe`);
        // console.log('got response on front-end', res);
        if (res.ok) {
            try {
                recipes = await res.json();
                console.log(`successfully found ${recipes.length} recipes`);
            }
            catch (err) {
                console.log('error parsing recipes');
            }
        }
	});
    
</script>


<main>
    {#if recipes}
    <div class="container">
        {#each recipes as r}
        <RecipeCard recipe={r}></RecipeCard>
        {/each}
    </div>
    {:else}
    <Loader></Loader>
    {/if}
</main>

<style>
    main {
        font-size: 1.5em;
        background-color: #fffffe;
        color: #1b2d45;
        width: 85vw;
        margin: auto;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 5vh;
    }
</style>