<script>
    import io from "socket.io-client";
    import Button from '../../components/rpg/Button.svelte';
    import FoWMap from '../../components/rpg/map/Map.svelte';
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddMonster from "../../components/rpg/AddMonster.svelte";
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";
    import monsters from '../../rpg/monsters.js';
    

    let monsterValues = Object.values(monsters).map(function(m) { return { label: m.name, value: m, group: m.group} });

    let encounter = { characters: [] , turnId: 0 };
    let initiative = [];
    let selectedCharacterIndex = null;

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

    function killCharacter(event) {
        let characterId = event.detail;
        const characterIndex = encounter.characters.findIndex(c => c.id == characterId);
        console.log(`killed ${encounter.characters[characterIndex].name}`);
        encounter.characters.splice(characterIndex, 1);
        mapEncounter();
        updateServer();
    }

    function characterClicked(event) {
        let characterId = event.detail;
        const characterIndex = encounter.characters.findIndex(c => c.id == characterId);
        const previousStatus = encounter.characters[characterIndex].selected;
        encounter.characters.forEach(c => { c.selected = false; });
        encounter.characters[characterIndex].selected = !previousStatus;
        selectedCharacterIndex = encounter.characters[characterIndex].selected ? characterIndex : null;
        mapEncounter();
    }

    function renameCharacter() {
        encounter.characters.forEach(c => { c.selected = false; });
        selectedCharacterIndex = null;
        mapEncounter();
        updateServer();
    }

    function toggleCharacterTurn() {
        const prevStatus = encounter.characters[selectedCharacterIndex].turnStatus;
        encounter.characters[selectedCharacterIndex].turnStatus = prevStatus == "DONE" ? "READY" : "DONE";
        selectedCharacterIndex = null;
        mapEncounter();
        updateServer();
    }

    function startRound() {
        encounter.characters.forEach(c => { c.turnStatus = "READY"; });
        mapEncounter();
        updateServer();
    }

    function reset() {
        encounter.characters.length = 0;
        encounter.turnIndex = 0;
        mapEncounter();
        updateServer();
    }

    function mapEncounter() {
        for (let i = 0; i < encounter.characters.length; i++) {
            let character = encounter.characters[i];
            if (character.turnStatus != "DONE") {
                encounter.turnId = character.id;
                break;
            }
        }
        initiative = encounter.characters.map(c => {
            return { character: c, dmView: true }
        });
        // console.log('encounter', encounter);
    }

    function updateServer() {
        if (selectedCharacterIndex != null) { encounter.characters[selectedCharacterIndex].selected = false; }
        socket.emit('update', encounter);
        if (selectedCharacterIndex != null) { encounter.characters[selectedCharacterIndex].selected = true; }
    }

    const headers = {
        character: {
            initiative: "<b>Initiative</b>",
            name: "<b>Name</b>",
            hp: "<b>Hit Points</b>",
            isPC: true
        }
    };
</script>


<main>
    <!-- <section class='fog-of-war-map'>
        <FoWMap/>
    </section> -->

    <section class='section-encounter'>
        <div class="encounter">
            <CharacterStats {...headers}/>
            {#each initiative as e}
            <CharacterStats {...e} on:updateCharacter={updateCharacter} on:killCharacter={killCharacter} on:characterClicked={characterClicked} />
            {/each}
        </div>
    </section>

    {#if selectedCharacterIndex != null}
    <section class='section-selector-controls'>
        <div class="character-adder">
            <div>Rename Character</div>
            <input type="text" bind:value={encounter.characters[selectedCharacterIndex].name}/>
            <Button onClick={renameCharacter} text={`Rename`} />
            <Button onClick={toggleCharacterTurn} text={`Turn Done`} />
        </div>
    </section>
    {/if}

    <section class='section-adder'>
        <div class="character-adder">
            <AddMonster monsters={monsterValues} on:addCharacter={addCharacter} />
        </div>

        <div class="character-adder">
            <AddCharacter on:addCharacter={addCharacter} on:updateCharacter={updateCharacter} dmView={true}/>
        </div>
    </section>

    <section class='section-encounter-controls'>
        <div class="character-adder">
            <Button onClick={startRound} text={`Start New Round`} />
            <Button onClick={reset} text={`Reset`} />
        </div>
    </section>
</main>


<style>
    main {
        /* color: #333; */
        color: #343837;
        width: 85vw;
        margin: auto;
    }

    .encounter {
        padding: 30px;
    }

    .character-adder {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    input {
        border: 3px solid #475F94;
        border-radius: 6px;
    }
</style>