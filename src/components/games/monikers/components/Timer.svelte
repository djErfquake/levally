<script>
    import { onDestroy } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let time;
    export let color;

    let secondsPassed = 0;
    let interval = null;
    $: secondsLeft = time - secondsPassed;
    $: minutes = Math.floor(secondsLeft / 60);
    $: seconds = Math.floor(secondsLeft % 60);
    $: prettySeconds = seconds < 10 ? `0${seconds}` : seconds;

    console.log("starting timer");
    interval = setInterval(() => {
        secondsPassed++;
        if (secondsPassed >= time) {
            dispatch('timesUp');
            stop = true;
        }
    }, 1000);

    onDestroy(() => {
		console.log("stopping timer");
            clearInterval(interval);
            interval = null;
	});

</script>


<main style="background-color: {color};">
    <div class="time">{minutes}:{prettySeconds}</div>
</main>


<style>
    main {
        width: 100%;
        height: 15vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .time {
        color: #fff;
        font-size: 13vh;
        font-weight: 600;
    }


</style>