<script context="module">
    import { encode, decode } from "js-base64";
    import CharacterSheet from "../../../components/rpg/characterSheet/CharacterSheet.svelte";

    let encounter = { characters: [] , turnId: 0 };
    let initiative = [];
    let characterId = null;
    let characterSheet = null;

    export async function preload(page, session) {
		const { slug } = page.params;
        characterSheet = JSON.parse(decode(slug));
        console.log('characterSheet', characterSheet);

        /*
            const cs = {"spells":["all"]}; // all eyJzcGVsbHMiOlsiYWxsIl19
            const cs = {"spells":[2,3,1,4,5,6]}; // carolyn eyJzcGVsbHMiOlsyLDMsMSw0LDUsNl19
            const cs = {"spells":[7,8,9,10,1]}; // rose eyJzcGVsbHMiOls3LDgsOSwxMCwxXX0
            const cs = {"spells":[11,12,13,14,15,4]}; // am eyJzcGVsbHMiOlsxMSwxMiwxMywxNCwxNSw0XX0
            const cs = {"spells":20,11,12,21,22,23,24,25,5}; // grace eyJzcGVsbHMiOlsyMCwxMSwxMiwyMSwyMiwyMywyNCwyNSw1XX0
            const cs = {"spells":[11,16,1,17,18,14,19]}; // shane eyJzcGVsbHMiOlsxMSwxNiwxLDE3LDE4LDE0LDE5XX0
            const cs = {"spells":[26,27,13,28,29,30]}; // kevin eyJzcGVsbHMiOlsyNiwyNywxMywyOCwyOSwzMF19
            const cs = {"spells":[2,31,1,32]}; // andy eyJzcGVsbHMiOlsyLDMxLDEsMzJdfQ
            const cs = {"spells":[11]}; // jonny eyJzcGVsbHMiOlsxMV19
            const encoded = btoa(JSON.stringify(cs));
            console.log("encode", encoded);
            console.log("decode", atob(encoded));

            https://www.base64encode.org/
            https://mycolor.space/?hex=%2300C7A5&sub=1
            Carolyn: http://localhost:3000/rpg/eyJzcGVsbHMiOlsyLDMsMSw0LDUsNl19

        */
	}
</script>


<main>
    <CharacterSheet characterSheet={characterSheet}/>
</main>


<style>
    main {
        color: #343837;
        width: 85vw;
        margin: auto;
    }
</style>