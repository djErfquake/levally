<script>
    import { onMount } from 'svelte';

    import Utilities from '../../utilities/helper.js';
    import Recipes from '../../data/recipes.js';
    import Loader from '../../components/recipes/Loader.svelte';
    import RecipeCard from '../../components/recipes/RecipeCard.svelte';
    import FilterModal from '../../components/recipes/FilterModal.svelte';

    import Fa from 'svelte-fa';
    import { faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
    const iconTheme = { primaryColor: '#fff', size: '2em' };

    let loading = true;
    let allRecipes = [];
    let filters = Recipes.tags.map(t => t.name);
    let filterModalActive = false;
    $: filteredRecipes = allRecipes.filter(r => {
        const tags = JSON.parse(r.tags);
        return tags.length == 0 || tags.some(t => filters.includes(t))
    });
    
    onMount(async () => {
        console.log('index page');
		const res = await fetch(`api/recipe`);
        // console.log('got response on front-end', res);
        if (res.ok) {
            try {
                allRecipes = await res.json();
                loading = false;
                console.log(`successfully found ${allRecipes.length} recipes`);
                Utilities.shuffleArray(allRecipes);
            }
            catch (err) {
                console.log('error parsing recipes');
            }
        }
	});

    function toggleFilterModal() {
        filterModalActive = !filterModalActive;
    }

    function addRecipe() {
        let newPage = window.location.href;
        if (!newPage.endsWith('/')) { newPage += '/'; }
        newPage += 'add';
        window.location = newPage;
    }

    function updateFilters(event) {
        filters = event.detail;
    }
    
</script>


<main>
    {#if loading}
    <Loader></Loader>
    {:else}
        <FilterModal bind:active={filterModalActive} on:updateFilters={updateFilters}></FilterModal>
        {#if filteredRecipes.length == 0}
        <div class="error-text">Sorry. No recipes with those tags.</div>
        {:else}
        <div class="container">
            {#each filteredRecipes as r}
            <RecipeCard recipe={r}></RecipeCard>
            {/each}
        </div>
        {/if}
        <div class="filter-button bottom-button" on:click={toggleFilterModal}><Fa icon={faFilter} {...iconTheme}/></div>
        <div class="add-button bottom-button" on:click={addRecipe}><Fa icon={faPlusCircle} {...iconTheme}/></div>
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
        margin-bottom: 12vh;
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

    .error-text {
        font-size: 8vh;
        margin: 3vh;
    }
</style>