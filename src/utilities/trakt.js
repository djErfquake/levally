/*
https://trakt.docs.apiary.io/#
https://trakt.docs.apiary.io/#reference/shows/trending/get-trending-shows?console=1
https://trakt.tv/oauth/applications/85517
https://www.happyhues.co/palettes/9
*/


// import dotenv from 'dotenv';
// dotenv.config();


const headers = {
    'Content-type': 'application/json',
    // 'trakt-api-key': process.env.TRAKT_CLIENT_ID,
    'trakt-api-version': 2
};
// console.log('headers', headers);

async function get(endpoint) {
    const res = await fetch(`https://api.trakt.tv${endpoint}`, { method: 'GET', headers: headers});
    if (res.ok) {
        try {
            console.log('requesting data from trakt:');
            let data = await res.json();
            console.log('got data from trakt:', data);
            return data;
        }
        catch (err) {
            console.log('error retrieving data from trakt.');
        }
    }
}

async function getTrendingShows() {
    let data = await get('/shows/trending');
    return data;
};


export default {
    getTrendingShows: getTrendingShows
};