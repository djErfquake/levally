// https://data.heroku.com/dataclips/jsxhoucaywcjvdqoqanajdhsvltr
// https://livebook.manning.com/book/svelte-and-sapper-in-action/chapter-17/v-4/125
// https://node-postgres.com/features/queries

import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

let pgClient = null;
async function init() {
    if (pgClient == null) {
        pgClient = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
        await pgClient.connect();
        console.log('pgClient initialized');
    }
}

export default {
    getRecipes: async function() {
        await init();
        if (pgClient != null) {
            const text = 'SELECT * FROM recipes LIMIT 500';
            try {
                const res = await pgClient.query(text);
                if (res.rows) {
                    return { success: true, value: res.rows };
                }
                else {
                    return { success: false, value: `error getting recipes ` };
                }
            }
            catch (err) {
                return { success: false, value: `error getting recipes ${err.stack}` };
            }
        }
        else {
            return { success: false, value: `couldn't initialize pgClient` };
        }
    },
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
    },
    editRecipe: async function(recipe) {
        init();
        const text = `UPDATE recipes SET "name"=$1, "desc"=$2, "ingredients"=$3, "directions"=$4, "tips"=$5, "variations"=$6, "servings"=$7, "prepTime"=$8, "cookTime"=$9, "linkUrl"=$10, "picUrl"=$11, "tags"=$12 WHERE "id"=$13 RETURNING *`;
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
            JSON.stringify(recipe.tags),
            recipe.id
        ];
        try {
            const res = await pgClient.query(text, values);
            if (res.rows && res.rows.length == 1) {
                return { success: true, value: res.rows[0] };
            }
            else {
                console.log(`error updating recipe`);
                return { success: false, value: `error updating recipe` };
            }
        }
        catch (err) {
            console.log(`error updating recipe ${err.stack}`);
            return { success: false, value: `error updating recipe ${err.stack}` };
        }
    },
    deleteRecipe: async function(recipeIndex) {
        init();
        if (pgClient != null) {
            console.log(`deleting ${recipeIndex}`);
            const text = 'DELETE FROM recipes WHERE id = $1';
            const values = [recipeIndex];
            try {
                console.log(`trying to delete recipe ${recipeIndex}`);
                const res = await pgClient.query(text, values);
                if (res.rowCount == 1) {
                    return { success: true, value: `successfully deleted recipe` };
                }
                else {
                    return { success: false, value: `no recipe with id ${recipeIndex}` };
                }
            }
            catch (err) {
                return { success: false, value: `error deleting recipe ${err.stack}` };
            }
        }
        else {
            return { success: false, value: `couldn't initialize pgClient` };
        }
    }
};

