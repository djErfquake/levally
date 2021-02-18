<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characterSheet;

    /*
        examples

        carolyn eyJyYWNlIjoiRWxmIiwiY2xhc3MiOiJEcnVpZCIsImxldmVsIjoxLCJzcGVsbHMiOlsyLDMsMSw0LDUsNl19
        {"race":"Elf","class":"Druid","level":1,"spells":[2,3,1,4,5,6]}

    */

</script>


<main>
    <!-- {@debug characterSheet} -->
    {#if characterSheet != null}
        <Traits r={characterSheet.race} c={characterSheet.class} l={characterSheet.level} />
        <Spells characterSpells={characterSheet.spells} />
    {/if}
</main>


<style>
    

</style>