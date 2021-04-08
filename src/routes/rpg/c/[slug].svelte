<script context="module">
    import { encode, decode } from "js-base64";
    import CharacterSheet from "../../../components/rpg/characterSheet/CharacterSheet.svelte";
    
    let characterSheet = null;

    export async function preload(page, session) {
		const { slug } = page.params;
        characterSheet = JSON.parse(decode(slug));
        console.log('characterSheet', characterSheet);
	}
</script>


<main>
    {#if characterSheet}
        <CharacterSheet characterSheet={characterSheet}/>
    {/if}
</main>


<style>
    main {
        color: #343837;
        width: 85vw;
        margin: auto;
    }
</style>