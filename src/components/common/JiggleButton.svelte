<script>
    export let text = "Button";
</script>


<button>
    <span>{@html text}</span>
</button>


<style>

    button {
        position: relative;
        outline: none;
        text-decoration: none;
        border-radius: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
        height: 10vh;
        width: 300px;
        opacity: 1;
        border: 3px solid #333;
        background-color: #fff;
    }

    button span {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.7px;
        color: #333;
        font-size: 2.5vh;
        font-weight: 600;
        font-family: "Lato", "Roboto";
    }
    button:hover {
        animation: rotate 0.7s ease-in-out both;
    }
    button:hover span {
        animation: storm 0.7s ease-in-out both;
        animation-delay: 0.06s;
    }

    @media only screen and (min-height: 1100px) {
        button {
            width: 600px;
            border: 8px solid #333;
        }

        button span {
            font-size: 2vh;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
        25% {
            transform: rotate(3deg) translate3d(0, 0, 0);
        }
        50% {
            transform: rotate(-3deg) translate3d(0, 0, 0);
        }
        75% {
            transform: rotate(1deg) translate3d(0, 0, 0);
        }
        100% {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
    }
    @keyframes storm {
        0% {
            transform: translate3d(0, 0, 0) translateZ(0);
        }
        25% {
            transform: translate3d(4px, 0, 0) translateZ(0);
        }
        50% {
            transform: translate3d(-3px, 0, 0) translateZ(0);
        }
        75% {
            transform: translate3d(2px, 0, 0) translateZ(0);
        }
        100% {
            transform: translate3d(0, 0, 0) translateZ(0);
        }
    }

</style>