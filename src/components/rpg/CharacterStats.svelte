<script>

    export let name;
    export let hp;
    export let isPC;
    export let showHPs = false;

    const displayHP = isPC || showHPs ? hp : "?";


</script>


<main>
    <div class="stat">{@html name}</div>
    <div class="stat">{@html displayHP}</div>
</main>


<style>
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>