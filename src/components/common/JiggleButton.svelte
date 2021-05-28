<script>
    // colors
    export let text = "Button";
    export let color = "#000";
    export let backgroundColor = "#fff";
    export let border = {
        color: color,
        size: 3
    };

    // font
    export let font = {
        size: 2.5,
        weight: 600,
        family: "Lato, Roboto"
    };

    // size
    export let size = {
        width: 25,
        height: 10
    };
    

</script>


<button
        style="background-color: {backgroundColor};
               border: {border.size}px solid {border.color};
               width: {size.width}vw;
               height: {size.height}vh;">
    <span 
        style="color: {color};
               font: {font.size}vh {font.family}, sans-serif;
               font-weight: {font.weight}px;">
        {@html text}
    </span>
</button>


<style>

    button {
        position: relative;
        outline: none;
        text-decoration: none;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
        height: 60px;
        width: 210px;
        opacity: 1;
    }

    button span {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.7px;
    }
    button:hover {
        animation: rotate 0.7s ease-in-out both;
    }
    button:hover span {
        animation: storm 0.7s ease-in-out both;
        animation-delay: 0.06s;
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