<script>
    import InputText from './Input_Text.svelte';
    import InputNumber from './Input_Number.svelte';
    import Button from './Button.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let character = { name: '', hp: null, initiative: null };
    let added = false;

    function addCharacter() {
        if (name != '' && hp && initiative) {
            dispatch('characterAdded', character);
        }
    }

    


</script>

{#if !added}
<div class="add_character">
    <div class="form">
        <InputText label="Name" bind:value={character.name}/>
        <InputNumber label="Init" min={1} bind:value={character.initiative}/>
        <InputNumber label="HP" min={0} bind:value={character.hp}/>
    </div>
    <div class="button">
        <Button onClick={addCharacter} text={`Add Character`} width="80%"></Button> 
    </div>
</div>
{/if}

<style>
    .add_character {
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

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        width: 100%;
    }


</style>