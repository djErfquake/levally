<script>
    import Calvin from "../components/portfolios/Calvin.svelte";

    import { stores } from '@sapper/app';
    const { page } = stores();


  
    // This will display the current host
    $: console.log("page", $page.host);
    // $: console.log($page.host);
    $: currentHost = $page.host.toLowerCase();



</script>

<main>
    <div>Current Host is {currentHost}</div>
    {#if currentHost == "calvin"}
        <Calvin />
    {:else}
        Welcome to the site!
    {/if}
</main>


