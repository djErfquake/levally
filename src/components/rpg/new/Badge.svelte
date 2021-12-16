<script>
    export let color = "#ef476f";
    export let name = "Badge";
    $: cssStyles = `--badge-bgColor:${color};`;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function badgeClicked() {
        dispatch('removeBadge', name);
    }
</script>


<div class="badge" style="{cssStyles}" on:click|stopPropagation={badgeClicked}>
    <div>{name}</div>
</div>


<style>
    .badge {
        border-radius: 20px;
        padding: 8px;
        text-align: center;
        background-color: var(--badge-bgColor, #ef476f);
        color: #fff;
        width: 130px;
        height: 25px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
    }
</style>