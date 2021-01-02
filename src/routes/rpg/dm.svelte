<script>
    import io from "socket.io-client";
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddMonster from "../../components/rpg/AddMonster.svelte";
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";
    import monsters from '../../rpg/monsters.js';
    

    let monsterValues = Object.values(monsters).map(function(m) { return { label: m.name, value: m} });

    let characters = [];
    let encounter = [];

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

        socket.emit('update', characters);
    }

    function updateCharacter(event) {
        let character = event.detail;
        const changed = characters.findIndex(c => c.id == character.id);
        console.log("updated character: ", character);
        characters[changed] = character;
        mapEncounter();

        socket.emit('update', characters);
    }

    function killCharacter(event) {
        let characterId = event.detail;
        const killedIndex = characters.findIndex(c => c.id == characterId);
        console.log(`killed ${characters[killedIndex].name}`);
        characters.splice(killedIndex, 1);
        mapEncounter();
        socket.emit('update', characters);
    }

    function reset() {
        socket.emit('reset');
    }

    function mapEncounter() {
        encounter = characters.map(c => {
            return { character: c, dmView: true }
        });
        // console.log('encounter', encounter);
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
    <div class="encounter">
        <CharacterStats {...headers}/>
        {#each encounter as e}
        <CharacterStats {...e} on:killCharacter={killCharacter}/>
        {/each}
    </div>

    <div class="character-adder">
        <AddMonster monsters={monsterValues} on:addCharacter={addCharacter} />
    </div>

    <div class="character-adder">
        <AddCharacter on:addCharacter={addCharacter} on:updateCharacter={updateCharacter}/>
    </div>

    <div class="character-adder">
        <button on:click={reset}>Reset</button>
    </div>
</main>


<style>
    main {
        color: #333;
        width: 85vw;
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