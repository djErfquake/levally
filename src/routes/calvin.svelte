<script>
    import Calvin from "../components/portfolios/Calvin.svelte";

    const resume = {
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


<Calvin {resume} />


<style>
    /* body {
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
    } */
</style>
