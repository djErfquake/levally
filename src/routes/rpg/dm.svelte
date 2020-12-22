<script>
    import io from "socket.io-client";
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddMonster from "../../components/rpg/AddMonster.svelte";
    import monsters from '../../rpg/monsters.js';
    let monsterValues = Object.values(monsters).map(function(m) { return { label: m.name, value: m} });

    let encounter = [];

    const socket = io();
    socket.emit('initRPG');
    socket.on('update', function(data) {
        encounter = [...data, data.length + 1];
    });




    function addCharacter(event) {
        let character = event.detail;
        console.log("added character: ", character);
        encounter.push(character);
        encounter = encounter.sort((a, b) => b.initiative - a.initiative);
    }

    function updateCharacter(event) {
        let character = event.detail;
        console.log("updated character: ", character);
        setCharacter(character);
    }

    function setCharacter(character) {
        for (let i = 0; i < encounter.length; i++) {
            if (encounter[i].name == character.name) {
                encounter[i] = character;
                break;
            }
        }
    }

</script>


<main>

    <div class="encounter">
        {#each encounter as character}
        <CharacterStats {...character}/>
        {/each}
    </div>

    <div class="character-adder">
        <AddMonster monsters={monsterValues} on:addCharacter={addCharacter} />
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