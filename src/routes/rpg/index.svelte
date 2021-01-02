<script>
    import io from "socket.io-client";
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";

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

    function mapEncounter() {
        encounter = characters.map(c => {
            return { character: c, dmView: false }
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
    <div class="encounter">
        <CharacterStats {...headers} />
        {#each encounter as e}
        <CharacterStats {...e} />
        {/each}
    </div>

    <div class="character-adder">
        <AddCharacter on:addCharacter={addCharacter} on:updateCharacter={updateCharacter} dmView={false}/>
    </div>
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