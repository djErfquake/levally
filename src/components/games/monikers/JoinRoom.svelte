<script>
    import Button from '../../common/JiggleButton.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    let roomCode = "";

    function joinRoom() {
        dispatch('joinRoom', roomCode.toUpperCase());
    }

</script>

<main class="title-container">
    <h1>Monikers</h1>
    <div class="input-text">
        <input maxlength="4" minLength="4" pattern="[A-Za-z]{4}" bind:value={roomCode} />
    </div>
    <div class="buttons">
        <div class="button" on:click={joinRoom}><Button text="Join"></Button></div>
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

    .input-text {
        width: 70vw;
        font-size: 15vh;
        margin-bottom: 5vh;
        border-bottom: 3px solid black;
    }

    input {
        text-transform: uppercase;
        width: 100%;
        text-align: center;
    }
</style>