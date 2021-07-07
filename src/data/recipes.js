//https://www.happyhues.co/palettes/2
//https://flatuicolors.com/palette/nl

/*
TODO:
 - support for sections (besides main)
    - ingredients
    - directions
    - fix recipes in db
 
 - levally index have links to projects


 [{"main":["1 package of chicken breasts or tenders","1 cup flour","2 tsp italian seasoning","1 tsp salt","1/2 tsp pepper","1 1/2 tbsp olive oil","3 tbsp butter","1 1/2 tsp garlic"]}]


*/

const tags = [
    { name: 'chicken', color: '#ffdd59' },
    { name: 'pork', color: '#b53471' },
    { name: 'beef', color: '#3c40c6' },
    { name: 'fish', color: '#4bcffa' },
    { name: 'sauce', color: '#1e272e' },
    { name: 'soup', color: '#ffa801' },
    { name: 'dessert', color: '#fda7df' },
    { name: 'drink', color: '#00d8d6' },
    { name: 'side', color: '#05c46b' },
    { name: 'bread', color: '#ee5a24' },
    { name: 'breakfast', color: '#575fcf' },
    { name: 'slow cooker', color: '#f53b57' },
    { name: 'casserole', color: '#1b1464' },
    { name: 'steak', color: '#ef5777' }
];

function parseMultiPartSectionForDB(value) {
    let rows = value.split("\n").map(r => r.trim());
    const blankLineIndex = rows.indexOf('');
    if (blankLineIndex == -1 || blankLineIndex == rows.length - 1) {
        // normal, just do main
        return [{main: rows}];
    }

    // not hyphens or blank
    function IsActualLine(line) {
        return /.*?[^-+].*/.test(line) && line != '';
    }

    let parts = [];
    let partName = null;
    let part = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const actualLine = IsActualLine(row);

        // done with section
        if (!actualLine && partName != null) {
            parts.push({[partName]: part});
            partName = null;
            part.length = 0;
            continue;
        }

        if (actualLine) {
            // starting section
            if (partName == null) {
                partName = row;
                continue;
            }

            // adding to section
            part.push(row);
        }
    }

    if (part.length > 0) {
        parts.push({[partName]: part});
    }

    return parts;
}

function parseMultiPartSectionToString(value) {
    let stringValue = '';
    const values = Object.values(value);
    values.forEach(a => {
        const v = Object.entries(a);
        const partName = v[0][0];
        stringValue += `${partName}\n`;
        const partList = v[0][1];
        partList.forEach(p => {
            stringValue += `${p}\n`;
        });
        stringValue += `\n`;
    });

    stringValue = stringValue.trimEnd();
    if (stringValue == 'main') { stringValue = ''; }

    return stringValue;
    // JSON.parse(recipe.ingredients)[0].main.reduce((a, i) => `${a}\n${i}`);
}


module.exports = {
    tags: tags,
    CreateBlankRecipe: function() {
        return {
            name: '',
            desc: '',
            linkUrl: '',
            picUrl: '',
            servings: 1,
            prepTime: 0,
            cookTime: 0,
            ingredients: '',
            directions: '',
            tips: '',
            variations: '',
            tags: []
        };
    },
    fromDB: function(recipe) {
        let newRecipe = recipe;
        newRecipe.desc = recipe.desc == "[]" ? "" : JSON.parse(recipe.desc).reduce((a, i) => `${a}\n${i}`);
        newRecipe.tips = recipe.tips == "[]" ? "" : JSON.parse(recipe.tips).reduce((a, i) => `${a}\n${i}`);
        newRecipe.variations = recipe.variations == "[]" ? "" : JSON.parse(recipe.variations).reduce((a, i) => `${a}\n${i}`);
        newRecipe.ingredients = JSON.parse(recipe.ingredients);
        newRecipe.directions = JSON.parse(recipe.directions);
        const dbTags = JSON.parse(recipe.tags);
        newRecipe.tags = tags.map(t => {return {name: t.name, active: dbTags.includes(t.name), color: t.color}});
        return newRecipe;
    },
    toDB: function(recipe) {
        let newRecipe = recipe;
        if (newRecipe.desc.trim() !== '') { newRecipe.desc = newRecipe.desc.split("\n"); } else { newRecipe.desc = []; }
        if (newRecipe.tips.trim() !== '') { newRecipe.tips = newRecipe.tips.split("\n"); } else { newRecipe.tips = []; }
        if (newRecipe.variations.trim() !== '') { newRecipe.variations = newRecipe.variations.split("\n"); } else { newRecipe.variations = []; }
        // if (newRecipe.ingredients.trim() !== '') { newRecipe.ingredients = [{main: newRecipe.ingredients.split("\n")}]; } else { newRecipe.ingredients = [{main:''}]; }
        // if (newRecipe.directions.trim() !== '') { newRecipe.directions = [{main: newRecipe.directions.split("\n")}]; } else { newRecipe.directions = [{main:''}]; }
        newRecipe.ingredients = parseMultiPartSectionForDB(recipe.ingredients);
        newRecipe.directions = parseMultiPartSectionForDB(recipe.directions);
        newRecipe.tags = newRecipe.tags.filter(t => t.active).map(t => t.name);
        return newRecipe;
    },
    validate: function(recipe) {
        return (recipe.name.trim() !== '' || recipe.ingredients.trim() !== '')
    },
    parseMultiPartSectionToString: parseMultiPartSectionToString,
    showSuccess: function(Swal, text) {
        Swal.fire({
            icon: 'success',
            title: text
        });
    },
    showError: function(Swal, text) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: text
        });
    },
    showWarning: function(Swal, title, text) {
        Swal.fire({
            icon: 'warning',
            title: title,
            text: text
        });
    }
};