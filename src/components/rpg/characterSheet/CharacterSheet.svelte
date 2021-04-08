<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let character = null;

    

</script>


<main>
    <!-- {@debug character} -->
    {#if character != null}
        <Traits character={character}/>
        <Spells characterSpells={character.spells} />
    {/if}
</main>


<style>
    

</style>