<script>
    export let name;
    export let color = "#8a2be2";

</script>



<div class="input-contain">
    <input type="text" id="fname" name="fname" autocomplete="off" bind:value={name} aria-labelledby="placeholder-fname">
    <label class="placeholder-text" for="fname" id="placeholder-fname">
        <div class="text">{name}</div>
    </label>
</div>


<style>
    .input-contain{
        position: relative;
    }
    input{
        height: 5rem;
        width: 40rem;
        border: 2px solid black;
        border-radius: 1rem;
    }
    input:focus{
        outline: none;
        border-color: #8a2be2;
    }
    input:focus + .placeholder-text .text, :not(input[value=""]) + .placeholder-text .text{
        background-color: white;
        font-size: 1.1rem;
        color: black;
        transform: translate(0, -170%);
    }
    input:focus + .placeholder-text .text{
        border-color: blueviolet;
        color: blueviolet;
    }
    .placeholder-text{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 3px solid transparent;
        background-color: transparent;
        pointer-events: none;
        display: flex;
        align-items: center;
    }
    .text{
        font-size: 1.4rem;
        padding: 0 0.5rem;
        background-color: transparent;
        transform: translate(0);
        color: black;
        transition: transform 0.15s ease-out, font-size 0.15s ease-out, background-color 0.2s ease-out, color 0.15s ease-out;
    }
    input, .placeholder-text{
        font-size: 1.4rem;
        padding: 0 1.2rem;
    }

    @media (max-width: 40rem) {
        input{
            width: 70vw;
        }
    }

</style>