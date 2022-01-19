<script>
    import Select from 'svelte-select'; // https://github.com/rob-balfre/svelte-select
    import Button from './Button.svelte';
    import InputText from './Input_Text.svelte';

    import status from '../../../rpg/status';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let name;
    let newName = name;
    export let description = "";
    let newDescription = description;
    const buttonFontSize = "0.8em";

    const conditions = status.statuses.map(s => { return { label: s.name, value: s }});

    function saveCharacter() {
        console.log(`name: ${name}, newName: ${newName}`);
        if (newName != name && newName != "") {
            dispatch('modifyCharacter', { name: newName });
        }

        if (newDescription != description) {
            dispatch('modifyCharacter', { description: newDescription });
        }
    }

    function cancel() {
        dispatch('modifyCharacter', { canceled: true });
    }

    function conditionSelected(e) {
        dispatch('modifyCharacter', { conditions: e.detail.value });
    }

    function removeCharacter() {
        dispatch('removeCharacter');
    }

    function wait() {
        dispatch('selectedCharacterWaits');
    }

</script>


<div class="character_modifier">
    <div class="form">
        <InputText label="Name" bind:value={newName} width="25vw"/>
    </div>
    <div class="form">
        Description
        <textarea rows="3" cols="40" bind:value={newDescription}></textarea>
    </div>
    <div class="form conditions">
        Conditions
        <Select items={conditions} containerStyles={`width: 65%; border-color: #118ab2`} on:select={conditionSelected}></Select>
    </div>
    <div class="form">
        <Button onClick={removeCharacter} text="Remove Character" fontSize={buttonFontSize}></Button> 
        <Button onClick={saveCharacter} text="Save Character" fontSize={buttonFontSize}></Button>
    </div>
    <div class="form">
        <Button onClick={cancel} text="Cancel" fontSize={buttonFontSize}></Button>
        <Button onClick={wait} text="Wait" fontSize={buttonFontSize}></Button>
    </div>
</div>


<style>
    .character_modifier {
        display: flex;
        flex-wrap: wrap;
        width: 30vw;
        margin: 10px;
        background-color: #fff;
        border-radius: 8px;
    }

    .form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 8px;
        margin: 5px;
    }

    textarea {
        width: 100%;
    }
</style>