<script>
    import Button from './Button.svelte';
    import HPStat from './HPStat.svelte';
    import Badges from './Badges.svelte';
    import CharacterModifier from './CharacterModifier.svelte';

    import encounterHelper from '../../../rpg/encounterHelper.js';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let encounter;
    export let characterId;
    export let isDm = false;
    let selectedCharacterId = null;
    $: selectedCharacter = encounter.characters.find(c => c.id == selectedCharacterId);
    $: initiative = [...encounter.characters].sort((a, b) => b.initiative - a.initiative);

    const buttonFontSize = "0.8em";

    

    function hpUpdated(e) {
        dispatch('updateStat', {characterId: e.detail.id, stat: 'hp', newValue: e.detail.value});
    }

    function characterSelected(id) {
        if (isDm) {
            if (id == selectedCharacterId) {
                selectedCharacterId = null;
                return;
            }
            selectedCharacterId = id;
        }
    }

    function nextCharacter() {
        const availableCharacters = encounter.characters.filter(c => c.status == encounterHelper.turnStatuses.READY).sort((a, b) => b.initiative - a.initiative);
        if (availableCharacters.length > 0) {
            const nextCharacter = availableCharacters[0].id;
            dispatch('updateStat', {characterId: nextCharacter, stat: 'status', newValue: encounterHelper.turnStatuses.ACTIVE});

            const activeCharacter = encounter.characters.find(c => c.status == encounterHelper.turnStatuses.ACTIVE)?.id;
            if (activeCharacter) {
                dispatch('updateStat', {characterId: activeCharacter, stat: 'status', newValue: encounterHelper.turnStatuses.DONE});
            }
        }
        else {
            resetRound();
        }
    }

    function resetRound() {
        dispatch('resetRound');
    }

    function setSelectedCharacterStatus(status) {
        dispatch('updateStat', {characterId: selectedCharacterId, stat: 'status', newValue: status});
        selectedCharacterId = null;
    }

    function selectedCharacterModified(e) {
        if (e.detail.description) {
            dispatch('updateStat', {characterId: selectedCharacterId, stat: 'description', newValue: e.detail.description});
        }
        else if (e.detail.name) {
            dispatch('updateStat', {characterId: selectedCharacterId, stat: 'name', newValue: e.detail.name});
        }
        else if (e.detail.conditions) {
            let char = encounter.characters.find(c => c.id == selectedCharacterId);
            char.conditions.push(e.detail.conditions.name);
            dispatch('updateStat', {characterId: selectedCharacterId, stat: 'conditions', newValue: char.conditions});
        }
        selectedCharacterId = null;
    }

    function removeCondition(e) {
        let char = encounter.characters.find(c => c.id == e.detail.id);
        const conditionIndex = char.conditions.indexOf(e.detail.condition);
        if (conditionIndex !== -1) {
            char.conditions.splice(conditionIndex, 1);
            dispatch('updateStat', {characterId: selectedCharacterId, stat: 'conditions', newValue: char.conditions});
        }
    }

</script>


<div class="table">
    <div class="table_row table_header">
        <div class="stat initiative"></div>
        <div class="name stat">Name</div>
        <div class="description stat">Description</div>
        <div class="hp stat">Hit Points</div>
        <div class="stat badges"></div>
    </div>
    {#if encounter.characters.length == 0}
        <div class="table_row">Waiting for Players...</div>
    {:else}
        {#each initiative as c}
        <div class="table_row stat_row" class:done_row={c.status==encounterHelper.turnStatuses.DONE} class:active_row={c.status==encounterHelper.turnStatuses.ACTIVE} on:click={() => characterSelected(c.id)} class:selected_row={c.id == selectedCharacterId}>
            <div class="stat initiative ">{c.initiative}</div>
            <div class="name stat">{c.name}</div>
            <div class="description stat">{c.description}</div>
            {#if isDm}
                <HPStat bind:hp={c.hp} on:hpUpdated={hpUpdated} id={c.id}></HPStat>
            {:else}
                {#if c.id==characterId}
                    <HPStat bind:hp={c.hp} on:hpUpdated={hpUpdated} id={c.id}></HPStat>
                {:else if c.monsterId}
                    <div class="hp stat">?</div>
                {:else}
                    <div class="hp stat">{c.hp}</div>
                {/if}
            {/if}
            <div class="stat badges">
            <Badges conditions={c.conditions} characterId={c.id} on:removeCondition={removeCondition}></Badges>
            </div>
        </div>
        {/each}
    {/if}
    {#if isDm}
        <div class="table_footer">
            <Button onClick={nextCharacter} text={`Next Player`} fontSize={buttonFontSize}></Button> 
            <Button onClick={resetRound} text={`Reset Round`} fontSize={buttonFontSize}></Button> 
        </div>
        {#if selectedCharacterId}
            <div class="table_footer">
                <CharacterModifier on:modifyCharacter={selectedCharacterModified} bind:name={selectedCharacter.name} bind:description={selectedCharacter.description}></CharacterModifier>
            </div>
        {/if}
    {/if}
</div>

<style>

    .table {
        color:#000;
        background-color: #fff;
        font-size: 2em;
        margin-top: 5vh;
        border-radius: 8px;
        overflow: hidden;
    }

    .table_header {
        font-size: 1.4em;
        background-color: #118ab2;
        color: #fff;
    }

    .table_footer {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding: 15px 0;
        justify-content: space-evenly;
    }

    .table_row {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
    } 

    .active_row {
        background-color: #073b4c;
        color: #fff;
    }

    .done_row {
        background-color: #ddd;
    }

    .selected_row {
        background-color: #ffd166;
    }

    .stat_row {
        height: 8vh;
    }

    .stat {
        flex-grow: 1;
        text-align: center;
        align-self: center;
    }

    .initiative {
        width: 5%;
    }

    .name {
        width: 30%;
    }

    .description {
        width: 35%;
    }

    .badges { 
        width: 15%;
    }
</style>