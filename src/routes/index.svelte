<script>
    import Calvin from "../components/portfolios/Calvin.svelte";

    import { stores } from '@sapper/app';
    const { page } = stores();


  
    // This will display the current host
    $: console.log("page", $page.host);
    // $: console.log($page.host);
    let currentHost = $page.host.toLower();



</script>

<main>
    <div>Current Host is {currentHost}</div>
    {#if currentHost == "calvin"}
        <Calvin />
    {/if}
</main>


