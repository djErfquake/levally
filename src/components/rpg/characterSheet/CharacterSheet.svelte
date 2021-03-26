<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characterSheet = null;

    

</script>


<main>
    <!-- {@debug characterSheet} -->
    {#if characterSheet != null}
        <Traits r={characterSheet.r} c={characterSheet.c} l={characterSheet.l} sub={characterSheet.sub}/>
        <Spells characterSpells={characterSheet.s} />
    {/if}
</main>


<style>
    

</style>