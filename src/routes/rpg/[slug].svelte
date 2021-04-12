<script context="module">
    import { encode, decode } from "js-base64";
    import Encounter from "../../components/rpg/Encounter.svelte";
    import CharacterSheet from "../../components/rpg/characterSheet/CharacterSheet.svelte";

    let character = null;

    export async function preload(page, session) {
		const { slug } = page.params;
        character = JSON.parse(decode(slug));
        console.log('character', character);
	}
</script>


<main>
    <Encounter stats={character} />
    <CharacterSheet character={character}/>
</main>

<style>
    main {
        color: #343837;
        width: 85vw;
        margin: auto;
    }
</style>