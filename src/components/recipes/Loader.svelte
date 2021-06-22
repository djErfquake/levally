<div class="container">
    <div class="loader"></div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .loader {
        color:#00ebc7;
        width:20vw;
        height:10vw;
        background: 
            radial-gradient(circle closest-side,currentColor 90%,#0000) 0%   50%,
            radial-gradient(circle closest-side,currentColor 90%,#0000) 50%  50%,
            radial-gradient(circle closest-side,currentColor 90%,#0000) 100% 50%;
        background-size:calc(100%/3) 5vw;
        background-repeat: no-repeat;
        animation:a 1s infinite linear;
    }

    @keyframes a {
        20%{background-position:0%   0%, 50%  50%,100%  50%}
        40%{background-position:0% 100%, 50%   0%,100%  50%}
        60%{background-position:0%  50%, 50% 100%,100%   0%}
        80%{background-position:0%  50%, 50%  50%,100% 100%}
    }
</style>