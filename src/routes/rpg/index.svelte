<script>
    import io from "socket.io-client";
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";
    import AddMonster from "../../components/rpg/AddMonster.svelte";

    import { stores } from '@sapper/app';
    const { page } = stores(); 
    $: isDM = $page.query.dm === "true";
    $:console.log('is DM?', isDM);



    const socket = io();
    socket.on('update', function(data) {
        encounter = [...data, data.length + 1];
    });
    socket.emit('initRPG');



    let encounter = [];

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
        {#if !isDM}
        <AddMonster on:addCharacter={addCharacter} />
        {:else}
        <AddCharacter on:addCharacter={addCharacter} on:updateCharacter={updateCharacter}/>
        {/if}
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