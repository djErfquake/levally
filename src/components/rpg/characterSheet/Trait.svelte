<script>
    import { onMount } from 'svelte';

    export let name;
    export let description;
    export let raceclass;
    export let colors = [ '#FDDC5C', '#2F4858' ];
    
    export let size = 1;
    let doBigCards = true;
    let cardWidth = null;

    onMount(async () => {
        doBigCards = screen.width >= 1366;
        if (doBigCards) {
            if (screen.width > 800)
            {
                let desiredWidth = screen.width <= 1366 ? 25 : 18;
                cardWidth = `${(size * desiredWidth) + ((size - 1) * 2)}vw`;
            }
            else {
                doBigCards = false;
            }
        }
        // console.log(cardWidth);
    });
</script>


<main>
    {#if doBigCards}
    <div class="card" style="width:{cardWidth};">
        <div class="title" style="background-color: {colors[0]};">
            <div class="name">{name}</div>
        </div>
        <div class="description">{@html description}</div>
        <div class="stats" style="background-color: {colors[1]};">{raceclass}</div>
    </div>
    {:else}
    <div class="card">
        <div class="title" style="background-color: {colors[0]};">
            <div class="name">{name}</div>
        </div>
        <div class="description">{@html description}</div>
        <div class="stats" style="background-color: {colors[1]};">{raceclass}</div>
    </div>
    {/if}
</main>


<style>
    main {
        margin-left: 20px;
        margin-right: 20px;
    }

    .card {
        position: relative;

        width: 18vw;
        min-height: 400px;

        background-color: rgb(240, 240, 240);
        box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.5), 0 0px 0 1px rgba(10, 10, 10, 0.02);

        border-radius: 13px;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 20px;

    }

    @media only screen and (max-width: 1366px) {
        .card {
            width: 25vw;
        }
    }

    @media only screen and (max-width: 800px) {
        .card {
            width: 35vw;
        }
    }

    @media only screen and (max-width: 450px) {
        .card {
            width: 85vw;
        }
    }

    .title {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        background-color: #FDDC5C;
        justify-content: center;
        align-items: center;
        border-radius: 13px 13px 0 0;
        text-align: center;
    }

    .name {
        font-size: 1.8em;
        font-weight: 600;
        width: 100%;
    }

    .description {
        padding: 15px 20px;
        flex-grow: 1;
    }

    .stats {
        width: 100%;
        height: 45px;
        background-color: #fe7231;
        border-radius: 0 0 13px 13px;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        color: white;
        font-weight: 600;
        text-transform: uppercase;
    }
    

</style>