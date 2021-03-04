<script>
    export let percentage = 0;
    $: percentages = [ 
        (percentage / 0.25),
        (percentage - 0.25) / 0.25,
        (percentage - 0.5) / 0.25,
        (percentage - 0.75) / 0.25,
    ];
    $: timePercentages = [
        (percentages[0] > 1 ? 1 : percentages[0] < 0 ? 0 : percentages[0]) * 25,
        (percentages[1] > 1 ? 1 : percentages[1] < 0 ? 0 : percentages[1]) * 25,
        (percentages[2] > 1 ? 1 : percentages[2] < 0 ? 0 : percentages[2]) * 25,
        (percentages[3] > 1 ? 1 : percentages[3] < 0 ? 0 : percentages[3]) * 25,
    ];
</script>


<main>
    <div class="time-labels">
        <div class="time-label">Morning</div>
        <div class="time-label">Afternoon</div>
        <div class="time-label">Evening</div>
        <div class="time-label">Night</div>
    </div>
    <div class="bar-container">
        <div class="bar morning" style="width: {timePercentages[0]}%"></div>
        <div class="bar afternoon" style="width: {timePercentages[1]}%"></div>
        <div class="bar evening" style="width: {timePercentages[2]}%"></div>
        <div class="bar night" style="width: {timePercentages[3]}%"></div>
    </div>
</main>



<style>
    .morning {
        background: rgb(255,137,6);
        background: linear-gradient(90deg, rgba(255,137,6,1) 0%, rgba(242,95,76,1) 100%);
    }

    .afternoon {
        background: rgb(242,95,76);
        background: linear-gradient(90deg, rgba(242,95,76,1) 0%, rgba(229,49,112,1) 100%);
    }

    .evening {
        background: rgb(229,49,112,1);
        background: linear-gradient(90deg, rgba(229,49,112,1) 0%, rgba(187,64,142,1) 100%);
    }

    .night {
        background: rgb(187,64,142,1);
        background: linear-gradient(90deg, rgba(187,64,142,1) 0%, rgba(136,79,152,1) 100%);
    }


    main {
        width: 100%;
    }

    .bar-container {
        width: 100%;
        height: 5vh;
        display: flex;
        flex-wrap: nowrap;
        border-style: solid;
        border-width: 2px;
    }
    
    .bar {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .time-labels {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        font-weight: 600;
    }

</style>