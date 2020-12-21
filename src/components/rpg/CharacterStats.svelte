<script>

    export let name;
    export let hp;
    export let statuses;


</script>


<main>
    <div class="stat">{name}</div>
    <div class="stat">{hp}</div>
</main>


<style>
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>