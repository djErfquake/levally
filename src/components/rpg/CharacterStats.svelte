<script>
    import Button from './Button.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let character;
    export let dmView = false;

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


<main class:selected="{character.selected}">
    <div class="stat" on:click={characterClicked}>{@html character.initiative}</div>
    <div class="stat" on:click={() => openLink(character.link)}>
        {#if !character.isPC}👹{/if}
        {@html character.name}
    </div>
    <div class="stat">{@html displayHP}
        {#if dmView}
        <Button onClick={addHP} text={`+`}></Button> 
        <Button onClick={removeHP} text={`-`}></Button> 
        <Button onClick={kill} text={`Kill`}></Button> 
        {/if}
    </div>
</main>


<style>
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .stat {
        flex-grow: 1;
        text-align: center;
        align-self: center;
        width: 33%;
    }

    .selected {
        background-color: #FDDC5C;
    }
</style>