<script>
    import io from "socket.io-client";
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddMonster from "../../components/rpg/AddMonster.svelte";
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";
    import monsters from '../../rpg/monsters.js';
    

    let monsterValues = Object.values(monsters).map(function(m) { return { label: m.name, value: m} });

    let characters = [];
    let encounter = [];
    let selectedCharacterIndex = null;

    const socket = io();
    socket.emit('initRPG');
    socket.on('update', function(data) {
        characters = [...data];
        mapEncounter();
    });
    socket.emit('catchup');
    socket.on('catchup', function(data) {
        characters = [...data];
        mapEncounter();
    });

    function addCharacter(event) {
        let character = event.detail;
        console.log("added character: ", character);
        characters.push(character);
        characters = characters.sort((a, b) => b.initiative - a.initiative);
        mapEncounter();
        updateServer();
    }

    function updateCharacter(event) {
        let character = event.detail;
        const changed = characters.findIndex(c => c.id == character.id);
        console.log("updated character: ", character);
        characters[changed] = character;
        mapEncounter();
        updateServer();
    }

    function killCharacter(event) {
        let characterId = event.detail;
        const characterIndex = characters.findIndex(c => c.id == characterId);
        console.log(`killed ${characters[characterIndex].name}`);
        characters.splice(characterIndex, 1);
        mapEncounter();
        updateServer();
    }

    function characterClicked(event) {
        let characterId = event.detail;
        const characterIndex = characters.findIndex(c => c.id == characterId);
        const previousStatus = characters[characterIndex].selected;
        characters.forEach(c => { c.selected = false; });
        characters[characterIndex].selected = !previousStatus;
        selectedCharacterIndex = characterIndex;
        mapEncounter();
    }

    function renameCharacter(event) {
        characters.forEach(c => { c.selected = false; });
        selectedCharacterIndex = null;
        mapEncounter();
        updateServer();
    }

    function reset() {
        characters.length = 0;
        mapEncounter();
        updateServer();
    }

    function mapEncounter() {
        encounter = characters.map(c => {
            return { character: c, dmView: true }
        });
        // console.log('encounter', encounter);
    }

    function updateServer() {
        socket.emit('update', characters);
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
    <section class='section-encounter'>
        <div class="encounter">
            <CharacterStats {...headers}/>
            {#each encounter as e}
            <CharacterStats {...e} on:updateCharacter={updateCharacter} on:killCharacter={killCharacter} on:characterClicked={characterClicked} />
            {/each}
        </div>
    </section>

    {#if selectedCharacterIndex != null}
    <section class='section-selector-controls'>
        <div class="character-adder">
            <div>Rename Character</div>
            <input type="text" bind:value={characters[selectedCharacterIndex].name}/>
            <button on:click={renameCharacter}>Rename</button> 
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
            <button on:click={reset}>Reset</button>
        </div>
    </section>
</main>


<style>
    main {
        color: #333;
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
</style>