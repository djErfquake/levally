<script context="module">
    let recipe = {}

    export async function preload(page, session) {
		const { slug } = page.params;

        recipe = {
            name: 'Apple Cinnamon Glazed Chicken',
            desc: [
                "Chicken breasts are universally loved because they are tender and juicy when cooked correctly and because they combine well with so many different ingredients. This sweet and slightly spicy recipe is a case in point.",
                "It's delicious served with grilled asparagus and French bread. Or serve this chicken with some hot cooked rice or pasta, a gelatin fruit salad, some homemade and simple dinner rolls, and an ice cream pie or brownies for dessert."
            ],
            linkUrl: 'https://www.thespruceeats.com/apple-cinnamon-glazed-chicken-recipe-479476',
            picUrl: 'https://www.thespruceeats.com/thmb/YSy26MmvnVQKr8h5HWfX1yEBFm0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/aplle-and-cinnamon-183579009-58adc9d15f9b58a3c9d12698.jpg',
            servings: 4,
            prepTime: 10,
            cookTime: 20,
            tags: [ 'chicken' ],
            ingredients: [
                {
                    main: [
                        "2 tbsp applesauce",
                        "1/3 cup apple jelly",
                        "1 tablespoon honey",
                        "5/6 tablespoons honey dijon mustard",
                        "1/2 teaspoon cinnamon",
                        "1/4 tsp salt",
                        "1/8 tsp white pepper",
                        "4 chicken breast halves (boneless, skinless)"
                    ]
                }
            ],
            directions: [
                {
                    main: [
                        "Gather the ingredients.",
                        "Prepare and preheat grill so the coals are medium. Make sure that the grill rack is very clean.",
                        "Meanwhile, in a small bowl, combine the applesauce, apple jelly, honey, honey Dijon mustard, cinnamon, salt, and pepper, and stir to combine.",
                        "When ready to cook, grease the grill rack with a paper towel dipped in oil.",
                        "Brush apple mixture on the chicken and place on grill 4 to 6 inches from medium coals.",
                        "Cook the chicken for 15 to 20 minutes, turning occasionally and brushing frequently with the jelly mixture until chicken is no longer pink and internal temperature reaches 165 F.",
                        "Discard any remaining jelly mixture.",
                        "Serve and enjoy!"
                    ]
                }
            ],
            tips: [
                "Make sure that you buy chicken breasts that are no larger than 8 ounces each. The larger breasts come from older hens and are best braised or stewed. They will be tough if you cook them as this recipe directs.",
                "When you are grilling chicken, make sure you are cooking over medium coals. Chicken needs some time to cook through. If the coals are any hotter than medium the meat may burn before the inside cooks through. In fact, indirect heat is one of the best ways to cook chicken. Place a grill pan in the center of the coal grate, and pile coals around it. If the chicken is cooking too quickly, place it over the part of the grate that doesn't have any coals.",
                "And always cook the chicken to 165 F as tested with a reliable meat thermometer. Chicken cooked to any temperature lower than that could harbor dangerous bacteria.",
                "Let the chicken rest after it comes off the grill for 5 to 10 minutes so the juices can redistribute. Then enjoy every juicy and flavorful bite!"
            ],
            variations: [
                "If you love cinnamon, increase the amount of cinnamon in this recipe to one teaspoon."
            ]
        };
	}
</script>
<script>
    import recipes from '../../data/recipes';
    import parseIngredient from 'parse-ingredient';
    import { create, all } from 'mathjs';
    const mathjs = create(all, {number: 'Fraction'});
    import Fa from 'svelte-fa';
    import { faClock } from '@fortawesome/free-regular-svg-icons';
    import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
    const clockIconTheme = { primaryColor: '#1b2d45', size: '4em' };
    const servingSizeIconTheme = { primaryColor: '#00ebc7', size: '2em' };


    
    let servingSize = recipe.servings;
    let ingredients = recipe.ingredients.length == 1 ? recipe.ingredients[0].main : recipe.ingredients;
    let directions = recipe.directions.length == 1 ? recipe.directions[0].main : recipe.directions;

    ingredients = ingredients.map(i => parseIngredient(i, { normalizeUOM: true })[0]);
    ingredients.forEach(i => {
        i.perServingSize = i.quantity / servingSize;
    });
    recalculateIngredientAmounts();

    function adjustServingSize(adjustment) {
        servingSize += adjustment;
        recalculateIngredientAmounts();
    }

    function recalculateIngredientAmounts() {
        const allowableFractions = [0.167, 0.333, 0.667, 0.833, 1];

        ingredients.forEach(i => {
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
    
</script>


<main>
    <div class="title">
        <div class="cover" style="background-image: url('{recipe.picUrl}');"></div>
        <h1 class="name">{recipe.name}</h1>
    </div>
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
            {#each recipe.desc as desc}
            <p>{desc}</p>
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
                <li>{ingredient.quantity} 
                    {#if ingredient.unitOfMeasure}{ingredient.unitOfMeasure}{/if}
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

        .name {
            font-size: 2em;
        }

        .section {
            margin: 100px 0px;
        }
    }
    
</style>