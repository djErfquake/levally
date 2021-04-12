<script>
    import { stores } from '@sapper/app';
    const { page } = stores();
  
    $: console.log("page", $page.host);
    // $: console.log($page.host);
    let currentHost = $page.host;
    // This will display the current host
  </script>

<main>
    <div>Current Host is {currentHost}</div>
</main>


