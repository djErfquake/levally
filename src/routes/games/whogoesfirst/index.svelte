<script>
    import Button from '../../../components/rpg/Button.svelte';
    import firstPlayer from '../../../game/firstPlayer.js';
    
    const TIEBREAKER = "Get Tiebreaker";
    const GET_ANOTHER = "Get Another";

    const LARGEST_INDEX = firstPlayer.picks[firstPlayer.picks.length - 1].index;

    let picks = [];
    let pick = null;
    

    function MakePick() {
        const newPick = getRandomPick();
        SetPick(newPick);
    }

    function GetTiebreaker() {
        // find groups and combine into one
        let alike = Object.entries(firstPlayer.groups).filter(g => g[1].includes(pick.index)).map(g => g[1]).flat();

        // shuffle group
        shuffleArray(alike);

        // iterate through group to get a new one
        let newPick = -1;
        for (let i = 0; i < alike.length; i++) {
            if (!picks.includes(alike[i])) {
                newPick = alike[i];
                break;
            }
        }

        // if no new ones, grab a random one
        if (newPick == -1) { newPick = getRandomPick(); }

        // set pick
        SetPick(newPick);
    }


    function getRandomPick() {
        let pickIndex = Math.floor(Math.random() * (LARGEST_INDEX - 1) + 1);
        while (picks.includes(pickIndex)) {
            pickIndex = Math.floor(Math.random() * (LARGEST_INDEX - 1) + 1);
        }
        return pickIndex;
    }

    function SetPick(pickIndex) {
        pick = firstPlayer.picks.find(p => p.index == pickIndex);
        if (!pick.description.endsWith('.')) { pick.description += '.'; }
        
        picks.push(pickIndex);
        if (picks.length == firstPlayer.picks.length) { picks.length = 0; }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    MakePick();

</script>

<main>
    {#if pick}
    <div class="page">
        <div class="who-starts center">Who Starts?</div>
        <div class="pick">
            <div class="title center">{pick.title}</div>
            <div class="description">The player who {pick.description}</div>
        </div>
        <div class="buttons">
            <Button text={TIEBREAKER} onClick={GetTiebreaker} />
            <Button text={GET_ANOTHER} onClick={MakePick} />
        </div>
    </div>
    {/if}
</main>


<style>

    main {
        color: #333;
        background-color: #fffffe;
        width: 85vw;
        margin: auto;
    }

    .page {
        height: 100vh;
        display: flex;
        flex-flow: column;
    }

    .who-starts {
        font-size: 4em;
        font-weight: 600;
        flex: 0 1 auto;
        margin-bottom: 10vh;
    }

    .pick {
        flex: 1 1 auto;
    }

    .description {
        font-size: 1.5em;
    }

    .title {
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 600;
    }

    .buttons {
        flex: 0 1 15vh;
    }

    .center {
        text-align: center;
    }
</style>