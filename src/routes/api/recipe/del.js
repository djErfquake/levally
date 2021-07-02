import db from '../../../data/db';

export async function del(req, res) {
    console.log('got to delete endpoint', req.params);
    const { slug } = req.params;
	const result = await db.deleteRecipe(slug.recipeId);
    if (result) {
        if (result.success) {
            const message = result.value;
            console.log(message);
            res.setHeader('Content-Type', 'application/json');
            res.end();
        }
        else {
            return (res.statusCode=403,res.end(result.value));
        }
    }
    else {
        return (res.statusCode=500,res.end('error deleting recipe'));
    }
}