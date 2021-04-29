<script>
    import Header from "./carolyn/Header.svelte";
    import Banner from "./carolyn/HomeBanner.svelte";

    export let resume;
</script>


<div>
    <Header></Header>
    <Banner {resume}></Banner>
</div>

<style>

</style>