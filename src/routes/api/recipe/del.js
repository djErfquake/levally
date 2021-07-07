import db from '../../../data/db';

export async function del(req, res) {
    console.log('got to delete endpoint', req.query);
    const { recipeId } = req.query;
	const result = await db.deleteRecipe(recipeId);
    if (result) {
        console.log('delete result', result);
        if (result.success) {
            const message = result.value;
            console.log(message);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
        }
        else {
            return (res.statusCode=403,res.end(result.value));
        }
    }
    else {
        return (res.statusCode=500,res.end('error deleting recipe'));
    }
}