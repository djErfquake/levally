<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characterSheet = null;
    export let isDM = false;


    /*
        examples

        carolyn eyJyYWNlIjoiRWxmIiwiY2xhc3MiOiJEcnVpZCIsImxldmVsIjoxLCJzcGVsbHMiOlsyLDMsMSw0LDUsNl19
        {"race":"Elf","class":"Druid","level":1,"spells":[2,3,1,4,5,6]}

        shane eyJyYWNlIjoiSHVtYW4iLCJjbGFzcyI6IkJhcmQiLCJsZXZlbCI6Miwic3BlbGxzIjpbMTEsMTYsMSwxNywxOCwxNCwxOV19
        {"race":"Human","class":"Bard","level":2,"spells":[11,16,1,17,18,14,19]}

    */

</script>


<main>
    <!-- {@debug characterSheet} -->
    {#if characterSheet != null}
        <Traits r={characterSheet.race} c={characterSheet.class} l={characterSheet.level} />
        <Spells characterSpells={characterSheet.spells} />
    {:else if isDM}
    <Traits isDM={true} />
    <Spells isDM={true} />
    {/if}
</main>


<style>
    

</style>