<script>
    import Calvin from "../components/portfolios/Calvin.svelte";
    // import Carolyn from "../components/portfolios/Carolyn.svelte";

    const calvinResume = {
        name: "Calvin LeVally",
        title: "Software Engineer",
        email: "calvinlevally@gmail.com",
        phone: "614-806-3499",
        links: [
            {
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/calvin-levally-816b8938/",
                icon: "fab fa-linkedin"
            },
            {
                title: "Github",
                link: "https://github.com/djErfquake",
                icon: "fab fa-github"
            }
        ]
    };

</script>

<!-- <Carolyn /> -->
<Calvin resume={calvinResume} />
