<script>
    import LinkButton from "./LinkButton.svelte";

    export let resume;
</script>


<main>
    <div class="name-title">
        <div class="name">{resume.name}</div>
        <div class="title">{resume.title}</div>
    </div>
    <div class="links">
        <ul class="link-list">
            {#each resume.links as link}
            <LinkButton {link} />
            {/each}
        </ul>
        <div class="text-link">
            Email: <a href="mailto:{resume.email}" target="_blank">{resume.email}</a>
        </div>
        <div class="text-link">
            Phone Number: <a href="tel:{resume.phone}" target="_blank">{resume.phone}</a>
        </div>
    </div>
</main>





<style>
    main {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 768px) {
        main {
            margin-top: 0px;
            text-align: center;
        }
    }

    .name-title {
        width: 800px;
    }


    .name {
        font-size: 4rem;
        margin-bottom: 0.1rem;
        font-weight: 500;
        line-height: 1.2;
        margin: 0 0 0 0.75rem;
    }

    .title {
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.2;
        margin: 0 0 0 0.75rem;
    }



    .link-list {
        margin-top: 0;
        padding: 0;
        font-size: 1rem;
        margin-bottom: 20px;
        text-align: right;

        list-style-type: none;

        display: flex;
        flex-wrap: wrap;
    }





    .text-link {
        margin-bottom: 3px;
        font-size: 1.6rem;
        text-align: right;
        margin: 0 0 0.75rem;
    }

    .text-link a {
        color: inherit;
        font-weight: 500;
        text-decoration: none;
    }

</style>