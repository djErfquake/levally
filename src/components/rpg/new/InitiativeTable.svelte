<script>
    import HPStat from './HPStat.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let encounter;
    export let characterId;
    export let isDm = false;

    function hpUpdated(e) {
        dispatch('updateStat', {characterId: e.detail.id, stat: 'hp', newValue: e.detail.value});
    }

</script>


<div class="table">
    <div class="table_row table_header">
        <div class="name stat">Name</div>
        <div class="initiative stat">Initiative</div>
        <div class="hp stat">Hit Points</div>
    </div>
    {#if encounter.characters.length == 0}
        <div class="table_row">Waiting for Players...</div>
    {:else}
        {#each encounter.characters as c}
        <div class="table_row stat_row">
            <div class="name stat">{c.name}</div>
            <div class="initiative stat">{c.initiative}</div>
            {#if isDm}
                <HPStat bind:hp={c.hp} on:hpUpdated={hpUpdated} id={c.id}></HPStat>
            {:else}
                {#if c.id==characterId}
                    <HPStat bind:hp={c.hp} on:hpUpdated={hpUpdated} id={c.id}></HPStat>
                {:else if c.monsterId}
                    <div class="hp stat">?</div>
                {:else}
                    <div class="hp stat">{c.hp}</div>
                {/if}
            {/if}
            
        </div>
        {/each}
    {/if}
</div>

<style>

    .table {
        color:#000;
        background-color: #fff;
        font-size: 2em;
        margin-top: 5vh;
        border-radius: 8px;
        overflow: hidden;
    }

    .table_header {
        font-size: 1.4em;
        background-color: #118ab2;
        color: #fff;
    }

    .table_row {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
    }

    .stat_row {
        height: 8vh;
    }

    .stat {
        flex-grow: 1;
        text-align: center;
        align-self: center;
        width: 33%;
    }
</style>