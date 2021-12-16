<script>
    import Badge from './Badge.svelte';
    import status from '../../../rpg/status';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let characterId = null;
    export let conditions = [];
    $: statuses = status.statuses.filter(s => conditions.includes(s.name));

    function removeBadge(e) {
        dispatch('removeCondition', { id: characterId, condition: e.detail});
    }
</script>


<div class="badges">
    {#each statuses as s}
        <Badge {...s} on:removeBadge={removeBadge}></Badge>
    {/each}
</div>


<style>
    .badges {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 100%;
    }
</style>