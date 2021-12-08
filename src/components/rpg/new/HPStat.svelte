<script>
    import Button from './Button.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let hp;

    function add() { updateHP(hp + 1); }
    function sub() { updateHP(hp - 1); }

    const buttonFontSize = "1em";

    function updateHP(value) {
        dispatch('hpUpdated', value);
    }

</script>


<div class="stat">
    <Button onClick={sub} text={`-`} fontSize={buttonFontSize} hoverColor="#ef476f"></Button> 
    <div class="hp">{hp}</div>
    <Button onClick={add} text={`+`} fontSize={buttonFontSize}></Button> 
</div>


<style>
    .stat {
        flex-grow: 1;
        text-align: center;
        align-self: center;
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hp {
        text-align: center;
        align-self: center;
        width: 10%;
    }
</style>