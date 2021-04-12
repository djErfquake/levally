<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characters = [];
    $: allSpells = []
        .concat(...characters.map(c => c.spells ))
        .filter((item, pos, self) => self.indexOf(item) == pos); // dedupe

</script>


<main>
    {#each characters as c, i}
        <Traits character={c} showHeader={i == 0}/>
    {/each}

    <Spells characterSpells={allSpells} />
</main>