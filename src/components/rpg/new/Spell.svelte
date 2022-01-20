<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let spell;
    export let characterId;
    $: levelText = spell.level == 0 ? "Cantrip" : `Level ${spell.level}`;
    $: descriptionText = spell.higher_level ? spell.desc.concat(spell.higher_level).reduce((d, d1) => `${d}<p>${d1}</p>`) : spell.desc.reduce((d, d1) => `${d}<p>${d1}</p>`);
    $: componentsText = spell.components.join(' ');

    function removeSpell() {
        dispatch('removeSpell', { spell: spell.index, characterId: characterId });
    }
</script>


<div class="spell">
    <div class="card">
        <div class="title" style="background-color: {spell.colors[0]};">
            <div class="name">{spell.name}<span class="close-button" on:click={removeSpell}>✕</span></div>
            <div class="level-text">{levelText}</div>
        </div>
        <div class="description">{@html descriptionText}</div>
        <div class="stats" style="background-color: {spell.colors[1]};">
            <div class="stat">
                <div class="stat-key">DURATION</div>
                <div class="stat-value">{spell.duration}</div>
            </div>
            <div class="stat">
                <div class="stat-key">CASTING TIME</div>
                <div class="stat-value">{spell.casting_time}</div>
            </div>
            <div class="stat">
                <div class="stat-key">CONCENTRATION</div>
                <div class="stat-value">{spell.concentration ? "Yes" : "No"}</div>
            </div>
            <div class="stat">
                <div class="stat-key">RANGE</div>
                <div class="stat-value">{spell.range}</div>
            </div>
            <div class="stat">
                <div class="stat-key">COMPONENTS</div>
                <div class="stat-value">{componentsText}</div>
            </div>
        </div>
    </div>
</div>


<style>
    .spell {
        margin-left: 20px;
        margin-right: 20px;
    }

    .close-button {
        display: none;
        position: absolute;
        top: 5px;
        right: 15px;
    }

    .card:hover .close-button {
        display: block;
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
        color: #fff;
    }

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