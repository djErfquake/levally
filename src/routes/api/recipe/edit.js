import db from '../../../data/db';

export async function post(req, res) {
    const recipe = req.body;
    console.log(`editing recipe ${recipe.id}`);
    try {
        const result = await db.editRecipe(recipe);
        if (result) {
            if (result.success) {
                const recipe = result.value;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(recipe));
            }
            else {
                return (res.statusCode=403,res.end(result.value));
            }
        }
        else {
            return (res.statusCode=500,res.end('error editing recipe'));
        }
    }
    catch (err) {
        return (res.statusCode=500,res.end(`error editing recipe. ${err}`));
    }
}