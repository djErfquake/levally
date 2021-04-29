<header class="header_area">
    <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container box_1620">
                <!-- Brand and toggle get grouped for better mobile display -->
                <!-- <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a> -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- Collect the nav links, forms, and other content for toggling home, about, experience, skills, projects, recommendations -->
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav ml-auto">
                        <li class="nav-item active"><a class="nav-link" href="#home-section">Home</a></li> 
                        <li class="nav-item"><a class="nav-link" href="#about-section">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#experience-section">Experience</a></li>
                        <li class="nav-item"><a class="nav-link" href="#skills-section">Skills</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects-section">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#recommendations-section">Recommendations</a></li>
                    </ul>
                </div> 
            </div>
        </nav>
    </div>
</header>



<style>
    .header_area {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 99;
        transition: background 0.4s, all 0.3s linear;
        line-height: 26px;
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        font-weight: normal;
        color: #777777;
    }

    .navbar {
        background: transparent;
        padding: 0px;
        border: 0px;
        border-radius: 0px;
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: .5rem 1rem;
    }

    @media (min-width: 992px) {
        .navbar-expand-lg {
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }
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

    .navbar>.container, .navbar>.container-fluid {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    @media (min-width: 992px) {
        .navbar-expand-lg>.container, .navbar-expand-lg>.container-fluid {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }
    }

    .navbar>.container, .navbar>.container-fluid {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .navbar-toggler:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    .navbar-light .navbar-toggler {
        color: rgba(0, 0, 0, .5);
        border-color: rgba(0, 0, 0, .1);
    }
    @media (min-width: 992px) {
        .navbar-expand-lg .navbar-toggler {
            display: none;
        }
    }

    [type=reset], [type=submit], button, html [type=button] {
        -webkit-appearance: button;
    }

    .navbar-toggler {
        padding: .25rem .75rem;
        font-size: 1.25rem;
        line-height: 1;
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: .25rem;
    }

    button, select {
        text-transform: none;
    }

    button, input {
        overflow: visible;
    }

    button, input, optgroup, select, textarea {
        margin: 0;
        font-family: inherit;
    }

    @media (min-width: 992px) {
        .navbar-expand-lg .navbar-collapse {
            display: flex !important;
            flex-basis: auto;
        }
    }

    .navbar-collapse {
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-align: center;
        align-items: center;
    }

    @media (min-width: 992px) {
        .navbar-expand-lg .navbar-nav {
            -ms-flex-direction: row;
            flex-direction: row;
        }
    }
    .ml-auto, .mx-auto {
        margin-left: auto !important;
    }
    .navbar-nav {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }
    .nav {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }
    dl, ol, ul {
        margin-top: 0;
    }

    ul {
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    .header_area .navbar .nav .nav-item {
        margin-right: 45px;
        color: #fff;
        box-sizing: border-box;
        text-size-adjust: 100%;
    }

    .header_area .navbar .nav .nav-item.active .nav-link {
        color: #fff;
    }
    .header_area .navbar .nav .nav-item .nav-link {
        font: 500 12px/120px "Roboto", sans-serif;
        text-transform: uppercase;
        padding: 0px;
        display: inline-block;
    }

    a {
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }

    li {
        text-align: -webkit-match-parent;
    }

    a:-webkit-any-link {
        color: #fff;
    }

</style>