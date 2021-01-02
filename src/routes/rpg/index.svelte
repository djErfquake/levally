<script>
    import io from "socket.io-client";
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";

    let encounter = [];

    const socket = io();
    socket.emit('initRPG');
    socket.on('update', function(data) {
        encounter = [...data];
    });
    socket.emit('catchup');
    socket.on('catchup', function(data) {
        encounter = [...data];
    });




    function addCharacter(event) {
        let character = event.detail;
        console.log("added character: ", character);
        encounter.push(character);
        encounter = encounter.sort((a, b) => b.initiative - a.initiative);

        socket.emit('update', encounter);
    }

    function updateCharacter(event) {
        let character = event.detail;
        const changed = encounter.findIndex(c => c.name = character.name);
        encounter[changed] = character;
        console.log("updated character: ", encounter[changed]);
        console.log('encounter', encounter);
        encounter = encounter;

        socket.emit('update', encounter);
    }

    const initiativeHeaders = {
        name: "<b>Name</b>",
        hp: "<b>Hit Points</b>",
        isPC: true,
        showHPs: true
    };
</script>


<main>

    <div class="encounter">
        <CharacterStats {...initiativeHeaders}/>
        {#each encounter as character}
        <CharacterStats name={character.name} hp={character.hp} isPC={character.isPC} showHPs={false} />
        {/each}
    </div>

    <div class="character-adder">
        <AddCharacter on:addCharacter={addCharacter} on:updateCharacter={updateCharacter}/>
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