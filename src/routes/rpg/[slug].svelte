<script context="module">
    import { encode, decode } from "js-base64";
    import Encounter from "../../components/rpg/Encounter.svelte";
    import CharacterSheet from "../../components/rpg/characterSheet/CharacterSheet.svelte";

    let characterSheet = null;

    export async function preload(page, session) {
		const { slug } = page.params;
        characterSheet = JSON.parse(decode(slug));
        console.log('characterSheet', characterSheet);
	}
</script>


<main>
    <Encounter stats={characterSheet} />
    <CharacterSheet characterSheet={characterSheet}/>
</main>

<style>
    main {
        color: #343837;
        width: 85vw;
        margin: auto;
    }
</style>