<script>
    import Button from '../../common/JiggleButton.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    function buttonClicked(button) {
        dispatch('setGameState', button);
    }

</script>

<main class="title-container">
    <h1>Monikers</h1>
    <div class="buttons">
        <div class="button" on:click={() => buttonClicked("setup")}><Button text="Play"></Button></div>
        <div class="button" on:click={() => buttonClicked("instructions")}><Button text="What?"></Button></div>
    </div>
</main>

<style>
    main {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 7vh;
        margin-top: 20vh;
        margin-bottom: 30vh;
    }

    .button {
        margin-bottom: 20px;
    }
</style>