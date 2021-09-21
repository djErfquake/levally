<script>
    import { onMount } from 'svelte';
    import Trakt from '../../utilities/trakt.js';

    let data = "...";
    onMount(async () => {
        data = await Trakt.getTrendingShows();
	});
    
</script>


<main>
    <div>Testing</div>
    <div>{data}</div>
</main>

<style>
    /*https://www.happyhues.co/palettes/9*/

    :global(body) {
        background-color: #eff0f3;
        /* background-color: magenta; */
        color: #2a2a2a;
    }

    main {
        font-size: 1.5em;
        
        width: 85vw;
        margin: auto;
    }
</style>