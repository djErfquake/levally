<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characterSheet = null;
    export let isDM = false;


    /*
        examples

        carolyn eyJyIjoiRWxmIiwiYyI6IkRydWlkIiwibCI6MSwicyI6WzIsMywxLDQsNSw2XX0
        {"r":"Elf","c":"Druid","l":1,"s":[2,3,1,4,5,6]}

        dom eyJyIjoiSGFsZi1PcmMiLCJjIjoiRmlnaHRlci1Qcm90ZWN0b3IiLCJsIjoxLCJzIjpbXX0
        {"r":"Half-Orc","c":"Fighter-Protector","l":1,"s":[]}



        shane eyJyIjoiSHVtYW4iLCJjIjoiQmFyZCIsImwiOjIsInMiOlsxMSwxNiwxLDE3LDE4LDE0LDE5XX0
        {"r":"Human","c":"Bard","l":2,"s":[11,16,1,17,18,14,19]}

        jobin eyJyIjoiRHdhcmYiLCJjIjoiRmlnaHRlci1HcmVhdF9XZWFwb25fRmlnaHRpbmciLCJsIjoyLCJzIjpbXX0
        {"r":"Dwarf","c":"Fighter-Great_Weapon_Fighting","l":2,"s":[]}

        andy eyJyIjoiSGFsZi1PcmMiLCJjIjoiRHJ1aWQiLCJsIjoyLCJzIjpbMiwzMSwxLDMyXX0
        {"r":"Half-Orc","c":"Druid","l":2,"s":[2,31,1,32]}

        kevin eyJyIjoiRWxmIiwiYyI6IldhcmxvY2siLCJsIjoyLCJzIjpbMjYsMjcsMTMsMjgsMjksMzBdfQ
        {"r":"Elf",c":"Warlock","l":2,"s":[26,27,13,28,29,30]}

        jonny eyJyIjoiSGFsZi1FbGYiLCJjIjoiUm9ndWUiLCJsIjoyLCJzIjpbMTFdfQ
        {"r":"Half-Elf","c":"Rogue","l":2,"s":[11]}


        const cs = {"spells":[2,31,1,32]}; // andy eyJzcGVsbHMiOlsyLDMxLDEsMzJdfQ
            const cs = {"spells":[11]}; // jonny eyJzcGVsbHMiOlsxMV19
            const encoded = btoa(JSON.stringify(cs));
            console.log("encode", encoded);
            console.log("decode", atob(encoded));

            https://www.base64encode.org/
            https://mycolor.space/?hex=%2300C7A5&sub=1
    */

</script>


<main>
    <!-- {@debug characterSheet} -->
    {#if characterSheet != null}
        <Traits r={characterSheet.r} c={characterSheet.c} l={characterSheet.l} />
        <Spells characterSpells={characterSheet.s} />
    {:else if isDM}
    <Traits isDM={true} />
    <Spells isDM={true} />
    {/if}
</main>


<style>
    

</style>