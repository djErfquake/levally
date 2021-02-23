<script context="module">
    import { encode, decode } from "js-base64";
    import CharacterSheet from "../../../components/rpg/characterSheet/CharacterSheet.svelte";
    import CharacterBuilder from "../../../components/rpg/characterSheet/CharacterBuilder.svelte";

    let encounter = { characters: [] , turnId: 0 };
    let initiative = [];
    let characterId = null;
    let characterSheet = null;

    export async function preload(page, session) {
		const { slug } = page.params;
        if (slug != 'builder') {
            characterSheet = JSON.parse(decode(slug));
            console.log('characterSheet', characterSheet);
        }
	}
</script>


<main>
    {#if characterSheet}
        <CharacterSheet characterSheet={characterSheet}/>
    {:else}
        <CharacterBuilder />
    {/if}
</main>


<style>
    main {
        color: #343837;
        width: 85vw;
        margin: auto;
    }
</style>