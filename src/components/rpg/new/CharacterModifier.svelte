<script>
    import Button from './Button.svelte';
    import InputText from './Input_Text.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let name;
    let newName = name;
    export let description = "";
    let newDescription = description;
    const buttonFontSize = "0.8em";

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
</script>


<div class="character_modifier">
    <div class="form">
        <InputText label="Name" bind:value={newName}/>
    </div>
    <div class="form">
        <textarea rows="3" cols="40" bind:value={newDescription}></textarea>
    </div>
    <div class="buttons">
        <Button onClick={cancel} text={`Cancel`} fontSize={buttonFontSize}></Button> 
        <Button onClick={saveCharacter} text={`Save Character`} fontSize={buttonFontSize}></Button>
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
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 8px;
        margin: 5px;
    }

    .buttons {
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