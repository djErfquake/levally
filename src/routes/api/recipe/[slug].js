import db from '../../../data/db';

export async function get(req, res) {
    const { slug } = req.params;
	const result = await db.getRecipe(slug);
    if (result) {
        if (result.success) {
            const recipe = result.value;
            console.log(`got recipe ${recipe.name}`);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(recipe));
        }
        else {
            return (res.statusCode=403,res.end(result.value));
        }
    }
    else {
        return (res.statusCode=500,res.end('error getting recipe'));
    }
}