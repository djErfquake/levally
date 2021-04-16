<script>
    import Action from './MonsterAction.svelte';

    export let name;
    export let armorClass;
    export let speed;

    export let actions;

    export let charisma;
    export let constitution;
    export let dexterity;
    export let intelligence;
    export let strength;
    export let wisdom;
    
    export let colors = [ '#FDDC5C', '#fe7231'];

</script>


<main>
    <div class="card">
        <div class="title" style="background-color: {colors[0]};">
            <div class="armor-class">
                <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 323.36 323.36" style="enable-background:new 0 0 323.36 323.36;" xml:space="preserve">
                    <g><g><path d="M28.741,242.03c0,44.916,71.883,81.33,113.589,81.33h38.699c41.707,0,113.589-36.415,113.589-81.33l11.585-138.794c0.555-6.63-3.28-14.816-8.561-18.275L166.589,2.613c-5.281-3.465-2.975-3.486-8.273-0.049L25.744,85.009c-5.298,3.437-9.143,11.596-8.588,18.226L28.741,242.03z"/></g></g>
                    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                </svg>
                <div class="armor-class-text">{armorClass}</div>
            </div>
            <div class="name">{name}</div>
            <div class="speed">SPEED: {speed}</div>
        </div>
        <div class="description">
            {#each actions as a, i}
            <Action 
                name={a.name}
                desc={a.desc}
                damage={a.damage}
                isAlternate={i % 2 == 1}
            />
            {/each}
        </div>
        <div class="stats" style="background-color: {colors[1]};">
            <div class="stat">
                <div class="stat-key">CHA</div>
                <div class="stat-value">{charisma}</div>
            </div>
            <div class="stat">
                <div class="stat-key">CON</div>
                <div class="stat-value">{constitution}</div>
            </div>
            <div class="stat">
                <div class="stat-key">DEX</div>
                <div class="stat-value">{dexterity}</div>
            </div>
            <div class="stat">
                <div class="stat-key">INT</div>
                <div class="stat-value">{intelligence}</div>
            </div>
            <div class="stat">
                <div class="stat-key">STR</div>
                <div class="stat-value">{strength}</div>
            </div>
            <div class="stat">
                <div class="stat-key">WIS</div>
                <div class="stat-value">{wisdom}</div>
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
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        border-radius: 13px 13px 0 0;
        text-align: center;
        height: 50px;
        overflow: hidden;
    }

    svg {
        width: 60%
    }

    svg path {
        fill: #fe7231;
    }

    .armor-class {
        width: 18%;
        height: 100%;
        padding-top: 16px;
        font-weight: 600;
        font-size: 1.2em;
    }

    .armor-class-text {
        position: absolute;
        left: 20px;
        top: 14px;
    }

    .name {
        font-size: 1.8em;
        font-weight: 600;
        flex-grow: 1;
        height: 100%;
        padding-top: 10px;
    }

    .speed {
        background-color: #fe7231;
        width: 18%;
        height: 100%;
        font-weight: 600;
    }

    .description {
        /* padding: 15px 20px; */
        flex-grow: 1;
        font-size: 16px;
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
        width: 33.33%;
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