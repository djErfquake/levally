<script>
    import Header from "./calvin/Header.svelte";

    export let resume;
</script>


<div>
    <Header {resume}></Header>
</div>

<style>
    body {
        color: #333;
        font-family: Roboto, sans-serif;
        font-feature-settings: "kern", "liga", "pnum";
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
    }
    
    @media (min-width: 1200px) {
        body {
            width: 1170px;
        }
    }
</style>