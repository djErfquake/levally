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



    function rollDie(sides) { return Math.floor(Math.random() * sides) + 1; }
    function rollCheck(mod) { return rollDie(20) + mod; }
    function parseAndRollDice(dice) {
        let numDice = '';
        let dieSides = '';
        let plusAmount = '';
        for (let i = 0; i < dice.length; i++) {
            const letter = dice.charAt(i);
            if (typeof(numDice) != 'number') {
                if (letter == 'd') {
                    numDice = parseInt(numDice);
                } else {
                    numDice += letter
                }
                continue;
            }
            if (typeof(dieSides) != 'number') {
                if (letter == '+') {
                    dieSides = parseInt(dieSides);
                } else {
                    dieSides += letter
                }

                if (i == dice.length - 1) {
                    dieSides = parseInt(dieSides);
                }
                continue;
            }
            if (typeof(plusAmount) != 'number') {
                plusAmount += letter
                if (i == dice.length - 1) {
                    plusAmount = parseInt(plusAmount);
                }
            }
        }

        let rollingTotal = 0;
        for (let i = 0; i < numDice; i++) {
            rollingTotal += rollDie(dieSides);
        }
        rollingTotal += plusAmount;
        return rollingTotal;
    }

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
        <AddMonster monsters={monsterValues} roll={parseAndRollDice} rollCheck={rollCheck} on:addCharacter={addCharacter} />
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