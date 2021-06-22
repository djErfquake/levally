import db from '../../../data/db';

export async function get(req, res) {
	const result = await db.getRecipes();
    if (result) {
        if (result.success) {
            const recipes = result.value;
            console.log(`got ${recipes.length} recipes`);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(recipes));
        }
        else {
            return (res.statusCode=403,res.end(result.value));
        }
    }
    else {
        return (res.statusCode=500,res.end('error getting recipe'));
    }
}