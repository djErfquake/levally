<script>
    export let text = "Button";
    export let width = "auto";
</script>


<button style="width: {width};">{@html text}</button>


<style>

    button {
        box-shadow: inset 0 -2px 0 rgb(0 0 0 / 15%);
        background-color: #00ebc7;
        margin: 0;
        color: #fff;
        text-align: center;
        line-height: 1;
        white-space: nowrap;
        border: none;
        border-radius: 4px;
        box-sizing: border-box;
        display: inline-block;
        outline: none;
        user-select: none;
        cursor: pointer;
        transition: all .25s;

        font-size: 1em;
        padding: 30px;
    }

</style>