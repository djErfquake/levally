<!-- <script>
    import { tweened } from 'svelte/motion';

    export let duration; // minutes
    export let status = "OFF"; // START, STOP, ON, OFF
    const durationSections = duration * 60;
    let secondsElapsed = 0;
    $: percentageDone = secondsElapsed / durationSections;
    
    const timer = tweened(100, {duration: 200});
    let interval = null;

    if (status == "START") {
        console.log("starting timer");
        status = "ON";
        secondsElapsed = 0;
        interval = setInterval(() => {
            secondsElapsed++;
            timer.set(percentageDone);
        }, 1000);
        
    }
    else if (status == "STOP") {
        clearInterval(interval);
        status = "OFF";
    }
</script>


<main>
    <div class="bar"></div>
</main>


<style>
    main {
        height: 10px;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .bar {
        background-color: #1dd1a1;
        width: {$percentageDone};
    }
</style> -->