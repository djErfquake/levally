<script>
    import { onDestroy } from 'svelte';
    import { writable } from 'svelte-persistent-store/dist/local';
    import Encounter from "../../components/rpg/Encounter.svelte";
    import CharacterSheet from "../../components/rpg/characterSheet/CharacterSheet.svelte";
    
    let character = null;

    const localCharacterWriter= writable('dndCharacter');

    const unsubscribe = localCharacterWriter.subscribe(c => {
        if (c) {
            character = JSON.parse(c);
            console.log('got character from session', character);
        }
    });
    onDestroy(unsubscribe);
</script>

<main>
    <Encounter stats={character}/>
    {#if character}
        <CharacterSheet character={character}/>
    {/if}
</main>


<style>
    main {
        color: #343837;
        width: 85vw;
        margin: auto;
    }
</style>

