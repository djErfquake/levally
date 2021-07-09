<script>
    import Recipes from '../../data/recipes';
    import TagBar from './TagBar.svelte';

    export let recipe;
    recipe = Recipes.fromDBForRecipePage(recipe);
    
    function goToRecipe() {
        let newPage = window.location.href;
        if (!newPage.endsWith('/')) { newPage += '/'; }
        newPage += recipe.id;
        window.location = newPage;
    }
</script>

<div class="card" on:click={goToRecipe}>
    <div class="cover" style="background-image: url('{recipe.picUrl}');"></div>
    <TagBar tags={recipe.tags}></TagBar>
    <div class="name">{recipe.name}</div>
</div>

<style>
    .card {
        width: 500px;
        height: 250px;
        border-radius: 15px;
        margin: 20px;

        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;

        background-color: #1b2d45;
        color: #fffffe;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .cover {
        width: 100%;
        height: 75%;
        border-radius: 15px 15px 0 0;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #fde24f;
    }

    .name {
        padding: 5px 10px;
        font-size: 30px;
        font-weight: 600;
    }

    @media only screen and (max-width: 1000px) {
        .card {
            width: 300px;
        }
    }

    @media only screen and (max-width: 700px) {
        .card {
            width: 300px;
            height: 150px;
            border-radius: 5px;
            margin: 8px;
        }

        .cover {
            border-radius: 5px 5px 0 0;
        }

        .name {
            padding: 4px 8px;
            font-size: 20px;
        }
    }
</style>