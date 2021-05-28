<script>
    export let team;
</script>


<div class="score">
    <div class="score-label">{team.name}</div>
    <div class="score-points" class:active-team={team.active} style="background-color: {team.color};">
        <div>{team.points}</div>
    </div>
</div>


<style>
    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        margin: 2vh 10vh 10vh 10vh;
    }

    .score-label {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2.3vh;
        margin-bottom: 2vh
    }

    .score-points {
        border-radius: 50%;
        color: #fff;
        font-weight: 600;
        font-size: 135px;
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        user-select: none;
    }

    .active-team {
        box-shadow: 0 0 0 0 rgba(136, 104, 174, 1);
        transform: scale(1);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(136, 104, 174, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(136, 104, 174, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(136, 104, 174, 0);
        }
    }
</style>