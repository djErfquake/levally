<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characters = [];
    $: allSpells = [].concat(...characters.map(c => c.s)); // dedup

</script>


<main>
    <!-- <Traits r={characterSheet.r} c={characterSheet.c} l={characterSheet.l} sub={characterSheet.sub}/> -->
    <Spells characterSpells={allSpells} />
</main>


<style>
    

</style>