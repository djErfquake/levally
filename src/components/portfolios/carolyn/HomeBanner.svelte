<script>
    import Fa from 'svelte-fa';
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
    const linkedinIconTheme = {
        primaryColor: '#766dff',
        size: '1.3em'
    };


    export let resume;
</script>

<section class="home_banner_area" id="home-section">
    <div class="container box_1620">
        <div class="banner_inner d-flex align-items-center">
            <div class="banner_content">
                <div class="media">
                    <div class="d-flex">
                        <img src=./portfolios/{resume.headshot} alt="">
                    </div>
                    <div class="media-body">
                        <div class="personal_text">
                            <h6>Hello Everybody, i am</h6>
                            <h3>{resume.name}</h3>
                            <h4>{resume.title}</h4>
                            <p>{resume.description}</p>
                            <ul class="list basic_info">
                                <li><a target="_blank" href="tel:{resume.phone}"><i class="lnr lnr-phone-handset"></i> {resume.phone}</a></li>
                                <li><a target="_blank" href="mailto:{resume.email}"><i class="lnr lnr-envelope"></i> {resume.email}</a></li>
                                <li><a target="_blank" href="{resume.location.latlon}"><i class="lnr lnr-home"></i> {resume.location.description}</a></li>
                                <li><a target="_blank" href="{resume.linkedIn}"><div class="linkedin-icon"><Fa icon={faLinkedin} {...linkedinIconTheme}/></div> {resume.linkedIn}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<style>
    .home_banner_area {
        line-height: 26px;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        font-weight: normal;
        color: #777777;

        position: relative;
        z-index: 1;
        background-image: -moz-linear-gradient(0deg, #766dff 0%, #88f3ff 100%);
        background-image: -webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%);
        background-image: -ms-linear-gradient(0deg, #766dff 0%, #88f3ff 100%);
        margin-bottom: 200px;
    }

    .home_banner_area .box_1620 {
        min-height: 700px;
        border-radius: 12px;
        position: relative;
        bottom: -200px;
        background: #fff;
        padding: 30px;
        box-shadow: 0px 20px 80px 0px rgb(153 153 153 / 30%);
    }

    @media (min-width: 1620px) {
        .box_1620 {
            max-width: 1620px;
            margin: auto;
            width: 100%;
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    .home_banner_area .banner_inner {
        position: relative;
        width: 100%;
        min-height: 700px;
        display: flex;
    }

    .align-items-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }

    .home_banner_area .banner_inner .banner_content {
        color: #222222;
        vertical-align: middle;
        align-self: center;
        text-align: left;
    }

    .media {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: start;
        align-items: flex-start;
    }

    .home_banner_area .banner_inner .banner_content .media .d-flex {
        padding-right: 125px;
    }

    .d-flex {
        display: -ms-flexbox !important;
        display: flex !important;
    }

    img {
        vertical-align: middle;
        border-style: none;
    }

    .home_banner_area .banner_inner .banner_content .media .media-body {
        vertical-align: middle;
        align-self: center;
    }
    .media-body {
        -ms-flex: 1;
        flex: 1;
    }

    .personal_text h6 {
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        letter-spacing: 2.1px;
        font-weight: normal;
        margin-bottom: 12px;
        color: #222222;
    }

    .personal_text h3 {
        margin-top: 26px;
        font-size: 48px;
        text-transform: uppercase;
        margin-bottom: 15px;
        color: #222222;
        margin-block-start: 0;
        line-height: 26px;
    }

    .personal_text h4 {
        font-size: 16px;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #222222;
    }

    .personal_text p {
        font-family: "Roboto", sans-serif;
        max-width: 540px;
        color: #777777;
        margin-bottom: 40px;
        margin-top: 0;
        text-size-adjust: 100%;
        line-height: 26px;
    }

    .list {
        list-style: none;
        margin: 0px;
        padding: 0px;
    }

    ul {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    .personal_text .basic_info li {
        margin-bottom: 15px;
    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    .personal_text .basic_info li a {
        position: relative;
        padding-left: 40px;
        font-size: 16px;
        color: #777777;
    }

    a {
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    a:-webkit-any-link {
        cursor: pointer;
    }

    .personal_text .basic_info li a i {
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        color: #766dff;
    }

    .linkedin-icon{
        margin: 0;
        margin-left: 2px;
        padding: 0;
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        height: 20px;
    }

    .lnr {
        font-family: 'Linearicons-Free';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h3, h4, h6 {
        font-family: "Heebo", sans-serif;
        font-weight: bold;
        margin-bottom: .5rem;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }
</style>