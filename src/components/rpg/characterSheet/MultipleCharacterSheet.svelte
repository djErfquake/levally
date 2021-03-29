<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characters = [];
    $: allSpells = []
        .concat(...characters.map(c => c.s ))
        .filter((item, pos, self) => self.indexOf(item) == pos); // dedup

</script>


<main>
    {#each characters as c, i}
        <Traits l={c.l} r={c.r} c={c.c} sub={c.sub} showHeader={i == 0}/>
    {/each}

    <Spells characterSpells={allSpells} />
</main>


<style>
    

</style>