<script>
    export let title;
    export let link;
    export let icon;
</script>


<li>
    <a target="_blank" href={link}>
        <i class={icon} title={title}></i>
    </a>
</li>


<style>
    li {
        padding-left: 0.75rem;

        /* test */
        width: 60px;
        height: 60px;
        background-color: lightseagreen;
    }

    a {
        width: 60px;
        height: 60px;
        min-width: 0;
        padding: 0;
        color: #fff;
        transition: color 0.3s;

        line-height: 2.8rem;
        text-align: center;
        border: 0;
        box-shadow: none;
        border: 100%;

        font-weight: 500;
    }
</style>