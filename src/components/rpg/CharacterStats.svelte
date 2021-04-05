<script>
    import Button from './Button.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let character;
    export let dmView = false;
    export let isHeader = false;
    export let selectedCharacterId = null;

    $: displayHP = character.isPC || dmView ? character.hp : "?";

    function addHP() { character.hp++; updateCharacter(); }
    function removeHP() { character.hp--; updateCharacter(); }
    function kill() { dispatch('killCharacter', character.id); }
    function updateCharacter() {
        dispatch('updateCharacter', character );
    }

    function characterClicked() {
        dispatch('characterClicked', character.id);
    }

    function openLink(link) {
        if (dmView && link) { window.open(link, '_blank'); }
    }

</script>


<main class="stat-row" class:selected="{dmView && character.id == selectedCharacterId}" class:turn-done="{character.turnStatus == 'DONE'}" class:header="{isHeader}">
    <div class="stat" on:click={characterClicked}>{@html character.initiative}</div>
    <div class="stat" on:click={() => openLink(character.link)}>
        {#if !character.isPC}👹{/if}
        {@html character.name}
    </div>
    <div class="stat hp">{@html displayHP}
        {#if dmView}
        <div class="hp-buttons">
            <Button onClick={addHP} text={`+`} width={`45px`}></Button> 
            <Button onClick={removeHP} text={`-`} width={`45px`}></Button> 
            <Button onClick={kill} text={`Kill`} width={`60px`}></Button> 
        </div>
        {/if}
    </div>
</main>


<style>
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .header {
        border-style: solid;
        border-width: 2px;
        background-color: #0f0e17;
        color: white;
        font-size: 1.5em;
        font-weight: 600;
    }

    .stat {
        flex-grow: 1;
        text-align: center;
        align-self: center;
        width: 33%;
    }

    .selected {
        background-color: #f25f4c;
    }

    .turn-done {
        color: white;
        background-color: #ff8906;
    }

    .hp {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .hp-buttons {
        margin-left: 10px;
        margin-top: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>