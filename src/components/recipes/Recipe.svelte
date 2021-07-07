<script>
    import Recipes from '../../data/recipes';
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
    
    recipe = Recipes.fromDB(recipe);

    let servingSize = recipe.servings;
    recipe.directions = recipe.directions.map(d => {
        const direction = Object.entries(d);
        const section = direction[0][0].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        const list = direction[0][1].filter(r => r.trim() != '');
        return {
            section: section,
            list: list
        };
    });
    recipe.ingredients = recipe.ingredients.map(i => {
        const ingredient = Object.entries(i);
        const section = ingredient[0][0].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        const list = ingredient[0][1].map(r => {
            let parsed = parseIngredient(r)[0];
            if (parsed.quantity) {
                parsed.perServingSize = quantity ? quantity / servingSize : null;
                return parsed;
            }
            else {
                return { description: r };
            }
        });
        
        return {
            section: section,
            list: list
        };
    });
    recalculateIngredientAmounts();
    console.log(recipe);

    function adjustServingSize(adjustment) {
        servingSize += adjustment;
        if (servingSize < 1) { servingSize = 1; }
        recalculateIngredientAmounts();
    }

    function recalculateIngredientAmounts() {
        const allowableFractions = [0.167, 0.25, 0.333, 0.5, 0.667, 0.75, 0.833, 1];

        recipe.ingredients.forEach(i => {
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
        recipe.ingredients = recipe.ingredients;
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
        <div class="cover" style="background-image: url('{recipe.picUrl}');"></div>
        <h1 class="name">{recipe.name}</h1>
    </div>
    <TagBar tags={recipe.tags}></TagBar>
    <div class="recipe">
        <div class="time">
            <div class="icon">
                <Fa icon={faClock} {...clockIconTheme}/>
            </div>
            <div class="time-text">
                <div>Prep: {recipe.prepTime} min</div>
                <div>Cook: {recipe.cookTime} min</div>
                <div class="total-time">Total: {recipe.prepTime + recipe.cookTime} min</div>
            </div>
        </div>
        <div class="description section">
            {#each recipe.desc as d}
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
            {#each recipe.ingredients as ingredientSection}
            {#if ingredientSection.list.length > 0}
            {#if ingredientSection.section != "Main"}
            <h4>{ingredientSection.section}</h4>
            {/if}
            <ul>
                {#each ingredientSection.list as ingredient}
                <li>{#if ingredient.quantity}
                    {ingredient.quantity} 
                    {#if ingredient.unitOfMeasure}
                    {ingredient.unitOfMeasure}{#if ingredient.quantity != 1 && !ingredient.unitOfMeasure.endsWith('s')}s{/if}
                    {/if}
                    {/if}
                    {ingredient.description}</li>
                {/each}
            </ul>
            {/if}
            {/each}
        </div>
        {#if recipe.directions[0].section != "Main" || recipe.directions[0].list.length > 0}
        <div class="directions section">
            <h2>Directions</h2>
            <ol>
                {#each recipe.directions as directionSection}
                {#if directionSection.list.length > 0}
                {#if directionSection.section != "Main"}
                <h4>{directionSection.section}</h4>
                {/if}
                <ul>
                    {#each directionSection.list as direction}
                    <li>{direction}</li>
                    {/each}
                </ul>
                {/if}
                {/each}
            </ol>
        </div>
        {/if}
        {#if recipe.tips && recipe.tips.length > 0}
        <div class="tips section">
            <h2>Tips</h2>
            <ul>
                {#each recipe.tips as t}
                <li>{t}</li>
                {/each}
            </ul>
        </div>
        {/if}
        {#if recipe.variations && recipe.variations.length > 0}
        <div class="variations section">
            <h2>Variations</h2>
            <ul>
                {#each recipe.variations as v}
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
        background-color: #fffffe;
        color: #1b2d45;
    }

    h2 {
        font-size: 1.6em;
    }

    h4 {
        margin-bottom: 0;
    }

    ul {
        margin-top: 3px;
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