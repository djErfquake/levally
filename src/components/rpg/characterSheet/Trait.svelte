<script>
    export let name;
    export let description;
    export let raceclass;
    export let colors = [ '#2F4858' ];

    $: descriptionText = `<p>${description.replace(/\n{2,}/g, '</p><p>').replace(/\|ul\|/g, '<ul><li>').replace(/\|\/ul\|/g, '</li></ul>').replace(/\|li\|/g, '</li><li>')}</p>`;
</script>


<main>
    <div class="card">
        <div class="title" style="background-color: {colors[0]};">
            <div class="name">{name}</div>
        </div>
        <div class="description">{@html descriptionText}</div>
        <div class="stats" style="background-color: {colors[1]};">{raceclass}</div>
    </div>
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