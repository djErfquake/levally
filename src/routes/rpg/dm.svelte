<script>
    import io from "socket.io-client";
    import { encode, decode } from "js-base64";
    import Button from '../../components/rpg/Button.svelte';
    import CharacterStats from "../../components/rpg/CharacterStats.svelte";
    import AddMonster from "../../components/rpg/AddMonster.svelte";
    import MonsterStats from "../../components/rpg/monster/MonsterStats.svelte"
    import AddCharacter from "../../components/rpg/AddCharacter.svelte";
    import CharacterSheet from "../../components/rpg/characterSheet/CharacterSheet.svelte";
    import MultiCharacterSheet from "../../components/rpg/characterSheet/MultipleCharacterSheet.svelte";
    import TimeBar from "../../components/rpg/TimeBar.svelte";

    let encounter = { characters: [] , turnId: 0, timeSpent: 0, options: { hideTimeBar: false } };
    let initiative = [];
    $: allCharacterStats = encounter.characters
        .filter(c => c.isPC && c.stats)
        .map(c => c.stats);

    let selectedCharacterId = null;
    $: selectedCharacterIndex = selectedCharacterId ? encounter.characters.findIndex(c => c.id == selectedCharacterId) : null;

    const NUM_MINUTES = 24 * 60;
    $: timePercentage = encounter.timeSpent / NUM_MINUTES;

    let selectedMonsterStats = null;


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
        encounter.characters[changed] = character;
        mapEncounter();
        updateServer();
    }

    function killCharacter(event) {
        selectedCharacterId = null;
        selectedMonsterStats = null;
        let characterId = event.detail;
        const characterIndex = encounter.characters.findIndex(c => c.id == characterId);
        console.log(`killed ${encounter.characters[characterIndex].name}`);
        encounter.characters.splice(characterIndex, 1);
        mapEncounter();
        updateServer();
    }

    function characterClicked(event) {
        const characterId = event.detail;
        selectedCharacterId = (selectedCharacterId != characterId) ? characterId : null;
        
        const character = encounter.characters.find(c => c.id == selectedCharacterId);
        if (!character.isPC) {
            selectedMonsterStats = character.stats;
        }
    }

    function renameCharacter() {
        selectedCharacterId = null;
        selectedMonsterStats = null;
        mapEncounter();
        updateServer();
    }

    function toggleCharacterTurn() {
        const prevStatus = encounter.characters[selectedCharacterIndex].turnStatus;
        encounter.characters[selectedCharacterIndex].turnStatus = prevStatus == "DONE" ? "READY" : "DONE";
        selectedCharacterId = null;
        selectedMonsterStats = null;
        mapEncounter();
        updateServer();
    }

    function startRound() {
        encounter.characters.forEach(c => { c.turnStatus = "READY"; });
        mapEncounter();
        updateServer();
    }

    function toggleTimeBar() { encounter.options.hideTimeBar = !encounter.options.hideTimeBar; updateServer(); }
    function addTenMinutes() { encounter.timeSpent += 10; if (encounter.timeSpent > NUM_MINUTES) { encounter.timeSpent = NUM_MINUTES;} updateServer();}
    function subtractTenMinutes() { encounter.timeSpent -= 10; if (encounter.timeSpent < 0) { encounter.timeSpent = 0;} updateServer();}
    function addSixtyMinutes() { encounter.timeSpent += 60; if (encounter.timeSpent > NUM_MINUTES) { encounter.timeSpent = NUM_MINUTES;} updateServer();}
    function subtractSixtyMinutes() { encounter.timeSpent -= 60; if (encounter.timeSpent < 0) { encounter.timeSpent = 0;} updateServer();}
    function resetDay() { encounter.timeSpent = 0; updateServer();}

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
        }).sort((a, b) => b.character.initiative - a.character.initiative);
        // console.log('encounter', encounter);
    }

    function updateServer() {
        socket.emit('update', encounter);
    }

    const headers = {
        character: {
            initiative: "<b>Initiative</b>",
            name: "<b>Name</b>",
            hp: "<b>Hit Points</b>",
            isPC: true
        },
        isHeader: true
    };
</script>


<main>

    <section class='section-encounter'>
        <div class="encounter">
            <CharacterStats {...headers}/>
            {#each initiative as e}
            <CharacterStats {...e} selectedCharacterId={selectedCharacterId} on:updateCharacter={updateCharacter} on:killCharacter={killCharacter} on:characterClicked={characterClicked} />
            {/each}
        </div>
    </section>

    <section class='section-time-bar'>
        {#if !encounter.options.hideTimeBar}
        <TimeBar percentage={timePercentage} />
        <div class="time-bar-buttons">
            <Button onClick={addTenMinutes} text={`+10`} />
            <Button onClick={subtractTenMinutes} text={`-10`} />
            <Button onClick={addSixtyMinutes} text={`+60`} />
            <Button onClick={subtractSixtyMinutes} text={`-60`} />
            <Button onClick={resetDay} text={`Reset Day`} />
        </div>
        {/if}
        <Button onClick={toggleTimeBar} text={`Toggle Time Bar Visibility`} />
    </section>
    


    {#if selectedCharacterId != null}
    <section class='section-selector-controls'>
        <div class="character-adder">
            <div>Update Character</div>
            <input type="number" bind:value={encounter.characters[selectedCharacterIndex].initiative}/>
            <input type="text" bind:value={encounter.characters[selectedCharacterIndex].name}/>
            <Button onClick={renameCharacter} text={`Update`} />
            <Button onClick={toggleCharacterTurn} text={`Turn Done`} />
        </div>
    </section>
    {/if}

    <section class='section-adder'>
        <div class="character-adder">
            <AddMonster on:addCharacter={addCharacter} />
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

    <section>
        {#if selectedMonsterStats}
        <MonsterStats
            name={selectedMonsterStats.name} 
            armorClass={selectedMonsterStats.armor_class}
            speed={selectedMonsterStats.speed.walk}
            actions={selectedMonsterStats.actions}
            charisma={selectedMonsterStats.charisma}
            constitution={selectedMonsterStats.constitution}
            dexterity={selectedMonsterStats.dexterity}
            intelligence={selectedMonsterStats.intelligence}
            strength={selectedMonsterStats.strength}
            wisdom={selectedMonsterStats.wisdom}
        />
        {/if}
        <MultiCharacterSheet characters={allCharacterStats}></MultiCharacterSheet>
    </section>
</main>


<style>
    main {
        /* color: #333; */
        background-color: #fffffe;
        color: #0f0e17;
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

    .time-bar-buttons {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        margin-top: 8px;
    }

    .character-adder {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    input {
        border: 3px solid #0f0e17;
        border-radius: 6px;
    }
</style>