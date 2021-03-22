<script>
    export let name;
    export let level;
    export let casting_time;
    export let range;
    export let components;
    export let duration;
    export let school;
    export let concentration;
    export let desc;
    export let colors = [ '#FDDC5C', '#fe7231'];

    $: levelText = level == 0 ? "Cantrip" : `Level ${level}`;
    $: descriptionText = desc.reduce((d, d1) => `${d1}<p>${d.replace(/\n{2,}/g, '</p><p>').replace(/\|ul\|/g, '<ul><li>').replace(/\|\/ul\|/g, '</li></ul>').replace(/\|li\|/g, '</li><li>')}</p>`);
    $: componentsText = components.join(' ');

</script>


<main>
    <div class="card">
        <div class="title" style="background-color: {colors[0]};">
            <!-- <div class="icon" style="background-image: url({icon});"></div> -->
            <div class="name">{name}</div>
            <div class="level-text">{levelText}</div>
        </div>
        <div class="description">{@html descriptionText}</div>
        <div class="stats" style="background-color: {colors[1]};">
            <div class="stat">
                <div class="stat-key">DURATION</div>
                <div class="stat-value">{duration}</div>
            </div>
            <div class="stat">
                <div class="stat-key">CASTING TIME</div>
                <div class="stat-value">{casting_time}</div>
            </div>
            <div class="stat">
                <div class="stat-key">CONCENTRATION</div>
                <div class="stat-value">{concentration ? "Yes" : "No"}</div>
            </div>
            <div class="stat">
                <div class="stat-key">RANGE</div>
                <div class="stat-value">{range}</div>
            </div>
        </div>
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

    /* .icon {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 35px;
        height: 35px;
        background-repeat: no-repeat;
        background-size: cover;
    } */

    .name {
        font-size: 1.8em;
        font-weight: 600;
        width: 100%;
    }

    .level-text {
        font-weight: 600;
    }

    .description {
        padding: 15px 20px;
        flex-grow: 1;
    }

    .stats {
        width: 100%;
        height: 130px;
        background-color: #fe7231;
        border-radius: 0 0 13px 13px;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .stat {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        color: white;
    }

    .stat-key {
        font-size: 0.8em;
        font-weight: 600;
    }

    .stat-value {
        font-size: 0.8em;
    }
    

</style>