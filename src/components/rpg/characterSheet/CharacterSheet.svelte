<script>
    import Spells from './CharacterSpells.svelte';
    import Traits from './CharacterTraits.svelte';

    export let characterSheet = null;
    export let isDM = false;


    /*
        examples

        carolyn eyJzIjpbMiwzLDQsNSwxLDZdLCJsIjoxLCJyIjoiRWxmIiwiYyI6IkRydWlkIn0=
        dom     eyJzIjpbXSwibCI6MSwiciI6IkhhbGYtT3JjIiwiYyI6IkZpZ2h0ZXItUHJvdGVjdGlvbiJ9
        grace   eyJzIjpbMjAsMTEsMTIsMjEsMjIsMjMsMjQsMjUsNV0sImwiOjEsInIiOiJEcmFnb25ib3JuLUdvbGQiLCJjIjoiV2l6YXJkIn0
        rose    eyJzIjpbNyw4LDksMSwxMF0sImwiOjEsInIiOiJEd2FyZiIsImMiOiJDbGVyaWMifQ
        colin   eyJzIjpbXSwibCI6MSwiciI6IkhhbGZsaW5nIiwiYyI6IlJvZ3VlIn0
        am      eyJzIjpbMTEsMTIsMTMsMjMsMTQsMTUsNF0sImwiOjEsInIiOiJHbm9tZSIsImMiOiJCYXJkIn0=


        {"s":[20,11,12,21,22,23,24,25,5],"l":1,"r":"Dragonborn","c":"Wizard","sub":["draconicAncestry":"Gold"}]}


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

            https://emn178.github.io/online-tools/sha256.html
            https://github.com/brix/crypto-js
    */

</script>


<main>
    <!-- {@debug characterSheet} -->
    {#if characterSheet != null}
        <Traits r={characterSheet.r} c={characterSheet.c} l={characterSheet.l} sub={characterSheet.sub}/>
        <Spells characterSpells={characterSheet.s} />
    {:else if isDM}
    <Traits isDM={true} />
    <Spells isDM={true} />
    {/if}
</main>


<style>
    

</style>