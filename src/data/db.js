import { Client } from 'pg';

let pgClient = null;
async function init() {
    if (pgClient == null) {
        pgClient = new Client({
            // connectionString: 'postgres://callev:ArchdukeDinosaur@localhost:5432/LeVally' // local
            connectionString: 'postgres://bvffqleuejqjsh:c2b9a63c00133c861e6f5005d7ec09a23c5075e944c684e456436064a72d3f51@ec2-54-91-188-254.compute-1.amazonaws.com:5432/d4ue1h8h4ag673',
            ssl: {
                rejectUnauthorized: false
            }
        });
        await pgClient.connect();
        console.log('pgClient initialized');
    }
}

export default {
    getRecipe: async function(recipeIndex) {
        await init();
        if (pgClient != null) {
            const text = 'SELECT * FROM recipes WHERE id = $1';
            const values = [recipeIndex];
            try {
                const res = await pgClient.query(text, values);
                if (res.rows && res.rows.length == 1) {
                    return { success: true, value: res.rows[0] };
                }
                else {
                    return { success: false, value: `no recipe with id ${recipeIndex}` };
                }
            }
            catch (err) {
                return { success: false, value: `error getting recipe ${err.stack}` };
            }
        }
        else {
            return { success: false, value: `couldn't initialize pgClient` };
        }
    },
    addRecipe: async function(recipe) {
        init();
        const text = `INSERT INTO "recipes" ("name", "desc", "ingredients", "directions", "tips", "variations", "servings", "prepTime", "cookTime", "linkUrl", "picUrl", "tags") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`;
        const values = [
            recipe.name,
            JSON.stringify(recipe.desc),
            JSON.stringify(recipe.ingredients),
            JSON.stringify(recipe.directions),
            JSON.stringify(recipe.tips),
            JSON.stringify(recipe.variations),
            parseInt(recipe.servings),
            parseInt(recipe.prepTime),
            parseInt(recipe.cookTime),
            recipe.linkUrl,
            recipe.picUrl,
            JSON.stringify(recipe.tags)
        ];
        try {
            const res = await pgClient.query(text, values);
            if (res.rows && res.rows.length == 1) {
                return { success: true, value: res.rows[0] };
            }
            else {
                console.log(`error adding recipe`);
                return { success: false, value: `error adding recipe` };
            }
        }
        catch (err) {
            console.log(`error adding recipe ${err.stack}`);
            return { success: false, value: `error adding recipe ${err.stack}` };
        }
    }
};

