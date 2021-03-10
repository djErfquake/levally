<script context="module">
    // https://www.base64encode.org/

    import io from "socket.io-client";
    import { encode, decode } from "js-base64";
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";
    import CharacterSheet from "../../components/rpg/characterSheet/CharacterSheet.svelte";
    import Button from '../../components/rpg/Button.svelte';
    import TimeBar from "../../components/rpg/TimeBar.svelte";

    let encounter = { characters: [] , turnId: 0, timeSpent: 0, options: { hideTimeBar: false } };
    let initiative = [];
    let characterId = null;
    let characterSheet = null;
    const NUM_MINUTES = 24 * 60;
    let timePercentage = encounter.timeSpent / NUM_MINUTES;

    export async function preload(page, session) {
		const { slug } = page.params;
        characterSheet = JSON.parse(decode(slug));
        console.log('characterSheet', characterSheet);
	}

    const socket = io();
    socket.emit('initRPG');
    socket.on('update', function(data) {
        encounter = data;
        mapEncounter();
    });
    socket.emit('catchup');
    socket.on('catchup', function(data) {
        encounter = data;
        mapEncounter();
    });

    function addCharacter(event) {
        let character = event.detail;
        console.log("added character: ", character);
        characterId = character.id;
        encounter.characters.push(character);
        encounter.characters = encounter.characters.sort((a, b) => b.initiative - a.initiative);
        mapEncounter();
        updateServer();
    }

    function updateCharacter(event) {
        let character = event.detail;
        const changed = encounter.characters.findIndex(c => c.id == character.id);
        console.log("updated character: ", character);
        encounter.characters[changed] = character;
        mapEncounter();
        updateServer();
    }

    function characterTurnDone(event) {
        const characterIndex =  encounter.characters.findIndex(c => c.id == characterId)
        encounter.characters[characterIndex].turnStatus = "DONE";
        mapEncounter();
        updateServer();
    }

    function mapEncounter() {
        timePercentage = encounter.timeSpent / NUM_MINUTES;
        for (let i = 0; i < encounter.characters.length; i++) {
            let character = encounter.characters[i];
            if (character.turnStatus != "DONE") {
                encounter.turnId = character.id;
                break;
            }
        }
        initiative = encounter.characters.map(c => {
            return { character: c, dmView: false }
        }).sort((a, b) => b.character.initiative - a.character.initiative);
        // console.log('encounter', encounter);
        console.log("characterId", characterId);
        console.log("encounter.turnId", encounter.turnId);
    }

    function updateServer() {
        socket.emit('update', encounter);
    }

    const headers = {
        character: {
            initiative: "Initiative",
            name: "Name",
            hp: "Hit Points",
            isPC: true
        },
        isHeader: true
    };
</script>


<main>
    <div class="encounter">
        <CharacterStats {...headers} />
        {#each initiative as e}
        <CharacterStats {...e} />
        {/each}
    </div>

    {#if !encounter.options.hideTimeBar}
    <section class='section-time-bar'>
        <TimeBar percentage={timePercentage} />
    </section>
    {/if}

    <div class="character-adder">
        <AddCharacter on:addCharacter={addCharacter} on:updateCharacter={updateCharacter} dmView={false}/>
    </div>

    {#if encounter.turnId == characterId}
    <div class="character-adder">
        <Button onClick={characterTurnDone} text={`Turn Done`}/>
    </div>
    {/if}

    <CharacterSheet characterSheet={characterSheet}/>
</main>


<style>
    main {
        color: #343837;
        width: 85vw;
        margin: auto;
    }

    .encounter {
        margin: 30px;
        border-style: solid;
        border-width: 3px;
        border-color: #0f0e17;
    }

    .encounter:last-child {
        margin-bottom: 50px;
    }

    .character-adder {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>