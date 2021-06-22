<script>
    import { onMount } from 'svelte';

    import RecipeCard from '../../components/recipes/RecipeCard.svelte';
    import Loader from '../../components/recipes/Loader.svelte';

    import Fa from 'svelte-fa';
    import { faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
    // const iconTheme = { primaryColor: '#00ebc7', size: '2em' };
    const iconTheme = { primaryColor: '#fff', size: '2em' };

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

    function toggleFilterModal() {

    }

    function addRecipe() {
        window.location = `${window.location}/add`;
    }
    
</script>


<main>
    {#if recipes}
    <div class="container">
        {#each recipes as r}
        <RecipeCard recipe={r}></RecipeCard>
        {/each}
    </div>
    <div class="filter-button bottom-button" on:click={toggleFilterModal}><Fa icon={faFilter} {...iconTheme}/></div>
    <div class="add-button bottom-button" on:click={addRecipe}><Fa icon={faPlusCircle} {...iconTheme}/></div>
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

    .bottom-button {
        position: fixed;
        z-index: 100;
        bottom: 3%;
        background-color: #00ebc7;
        padding: 10px;
        border-radius: 5px;
    }

    .filter-button {
        left: 3%;
    }

    .add-button {
        right: 3%;
    }
</style>