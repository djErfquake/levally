<script>
    import Spells from './CharacterSpells.svelte';
    // export let encodedCharacterSheet;
    export let characterSheet;
    // console.log('CharacterSheet.svelte', characterSheet);
    // console.log('decoded', new Buffer(encodedCharacterSheet, 'base64'));


</script>


<main>
    <!-- {@debug characterSheet} -->
    {#if characterSheet != null}
        <Spells characterSpells={characterSheet.spells} />
    {/if}
</main>


<style>
    

</style>