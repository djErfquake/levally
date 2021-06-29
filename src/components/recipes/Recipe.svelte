<script>
    import Button from './Button.svelte';
    import TagBar from './TagBar.svelte';
    import parseIngredient from 'parse-ingredient';
    import { create, all } from 'mathjs';
    const mathjs = create(all, {number: 'Fraction'});
    import Fa from 'svelte-fa';
    import { faClock } from '@fortawesome/free-regular-svg-icons';
    import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
    const clockIconTheme = { primaryColor: '#1b2d45', size: '4em' };
    const servingSizeIconTheme = { primaryColor: '#00ebc7', size: '2em' };

    export let recipe = {
            name: '',
            desc: [],
            linkUrl: '',
            picUrl: '',
            servings: 1,
            prepTime: 0,
            cookTime: 0,
            tags: [],
            ingredients: [{main: []}],
            directions: [{main: []}],
            tips: [],
            variations: []
        };
    
    let name = recipe.name;
    let desc = JSON.parse(recipe.desc);
    let ingredients = JSON.parse(recipe.ingredients);
    let directions = JSON.parse(recipe.directions);
    let tips = JSON.parse(recipe.tips);
    let variations = JSON.parse(recipe.variations);
    let servings = recipe.servings;
    let prepTime = recipe.prepTime;
    let cookTime = recipe.cookTime;
    let linkUrl = recipe.linkUrl;
    let picUrl = recipe.picUrl;
    let tags = JSON.parse(recipe.tags);

    let servingSize = servings;
    ingredients = ingredients.length == 1 ? ingredients[0].main : ingredients;
    directions = directions.length == 1 ? directions[0].main : directions;

    ingredients = ingredients.filter(i => i.trim() !== '');
    ingredients = ingredients.map(i => parseIngredient(i)[0]);
    ingredients.forEach(i => {
        i.perServingSize = i.quantity ? i.quantity / servingSize : null;
    });
    recalculateIngredientAmounts();

    function adjustServingSize(adjustment) {
        servingSize += adjustment;
        recalculateIngredientAmounts();
    }

    function recalculateIngredientAmounts() {
        const allowableFractions = [0.167, 0.25, 0.333, 0.5, 0.667, 0.75, 0.833, 1];

        ingredients.forEach(i => {
            if (!i.perServingSize) return;

            let quantity = i.perServingSize * servingSize;
            
            // do fraction if not a whole number
            if (quantity % 1 != 0) {
                // get decimal and whole number
                let whole = Math.floor(quantity);
                let decimal = quantity - Math.floor(quantity);

                // get closest fraction
                let closestFraction = allowableFractions.reduce((a, i) => (Math.abs(i - decimal) < Math.abs(a - decimal) ? i : a));

                // set repeating digits for formattting
                if (closestFraction == 0.167) { closestFraction = '0.1(6)'; } // 1/6
                else if (closestFraction == 0.333) { closestFraction = '0.(3)'; }  // 1/3
                else if (closestFraction == 0.667) { closestFraction = '0.(6)'; } // 2/5
                else if (closestFraction == 0.833) { closestFraction = '0.8(3)'; } // 5/6

                decimal = closestFraction != 1 ? mathjs.format(mathjs.fraction(closestFraction), { fraction: 'ratio'}) : closestFraction;

                if (whole > 0) {
                    quantity = `${whole} ${decimal}`;
                }
                else {
                    quantity = decimal;
                }
            }
            i.quantity = quantity;
        });
        ingredients = ingredients;
    }

    function editRecipe() {
        let newPage = window.location.href;
        newPage = newPage.replace(/\/\d+/g, ''); // remove recipe id
        if (!newPage.endsWith('/')) { newPage += '/'; }
        newPage += `edit?id=${recipe.id}`;
        window.location = newPage;
    }
    
</script>


<main>
    <div class="title">
        <div class="cover" style="background-image: url('{picUrl}');"></div>
        <h1 class="name">{name}</h1>
    </div>
    <TagBar tags={tags}></TagBar>
    <div class="recipe">
        <div class="time">
            <div class="icon">
                <Fa icon={faClock} {...clockIconTheme}/>
            </div>
            <div class="time-text">
                <div>Prep: {prepTime} min</div>
                <div>Cook: {cookTime} min</div>
                <div class="total-time">Total: {prepTime + cookTime} min</div>
            </div>
        </div>
        <div class="description section">
            {#each desc as d}
            <p>{d}</p>
            {/each}
        </div>
        <div class="ingredients section">
            <h2>Ingredients</h2>
            <div class="serving-buttons">
                <div class="serving-button" on:click={() => adjustServingSize(-1)}><Fa icon={faMinusCircle} {...servingSizeIconTheme}/></div>
                <div class="serving-button" on:click={() => adjustServingSize(1)}><Fa icon={faPlusCircle} {...servingSizeIconTheme}/></div>
            </div>
            <p>Makes {servingSize} servings.</p>
            <ul>
                {#each ingredients as ingredient}
                <li>{#if ingredient.quantity}
                    {ingredient.quantity} 
                    {#if ingredient.unitOfMeasure}
                    {ingredient.unitOfMeasure}{#if ingredient.quantity != 1 && !ingredient.unitOfMeasure.endsWith('s')}s{/if}
                    {/if}
                    {/if}
                    {ingredient.description}</li>
                {/each}
            </ul>
        </div>
        <div class="directions section">
            <h2>Directions</h2>
            <ol>
                {#each directions as direction}
                <li>{direction}</li>
                {/each}
            </ol>
        </div>
        {#if tips && tips.length > 0}
        <div class="tips section">
            <h2>Tips</h2>
            <ul>
                {#each tips as t}
                <li>{t}</li>
                {/each}
            </ul>
        </div>
        {/if}
        {#if variations && variations.length > 0}
        <div class="variations section">
            <h2>Variations</h2>
            <ul>
                {#each variations as v}
                <li>{v}</li>
                {/each}
            </ul>
        </div>
        {/if}
        <div class="buttons section">
            <div class="edit-button" on:click={editRecipe}><Button text="Edit Recipe"></Button></div>
        </div>
    </div>
</main>

<style>
    main {
        font-size: 1.5em;
    }

    h2 {
        font-size: 1.6em;
    }

    .title {
        position: relative;
    }

    .name {
        position: absolute;
        bottom: 0px;
        left: 25px;
        font-size: 3em;
        font-weight: 600;
        color: #fff;
    }

    .cover {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #fde24f;
        width: 100%;
        height: 20vh;
    }

    .recipe {
        background-color: #fffffe;
        color: #1b2d45;
        width: 85vw;
        margin: auto;
    }

    .time {
        display: flex;
        width: 100%;
        margin-top: 50px;
    }

    .icon {
        width: 40%;
        display: flex;
        text-align: center;
        flex-flow: column;
        justify-content: center;
    }

    .time-text {
        width: 60%;
    }

    .total-time {
        font-weight: 600;
        font-size: 1.2em;
    }

    .section {
        margin: 50px 0px;
    }

    .serving-buttons {
        display: flex;
        justify-content: left;
        padding: 0;
    }

    .serving-button {
        margin: 0 10px;
    }

    @media only screen and (max-width: 1000px) {
        main {
            font-size: 3em;
        }

        .cover {
            height: 30vh;
        }

        .name {
            font-size: 2em;
        }

        .section {
            margin: 100px 0px;
        }
    }

    @media only screen and (max-width: 700px) {
        main {
            font-size: 1.5em;
        }

        .cover {
            height: 30vh;
        }

        .name {
            font-size: 1.8em;
        }

        .section {
            margin: 40px 0px;
        }
    }
    
</style>