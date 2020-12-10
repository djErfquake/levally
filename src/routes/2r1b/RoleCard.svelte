<script>
    /*
        https://flatuicolors.com/palette/ca
        https://www.shapedivider.app/
    */

    export let role;

    const colors = {
        red: '#ff6b6b',
        blue: '#54a0ff',
        grey: '#8395a7',
        green: '#1dd1a1',
        purple: '#5f27cd',
        black: '#222f3e',
        pink: '#ff9ff3',
        yellow: '#feca57'
    };

</script>


<main>

    <div class="name" style="background-color: {colors[role.team]};">
        <div>{role.name}</div>
    </div>

    <div class="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" style="fill: {colors[role.team]};"></path>
        </svg>
    </div>
    <section class="description">{role.power}</section>
</main>


<style>

    .name {
        margin: 0;
        padding: 0;

        color: white;
        background-color: #FF6B6B;

        font-size: 5em;
    }

    .shape-divider {
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .shape-divider svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 50px;
        transform: rotateY(180deg);
    }

    .shape-divider .shape-fill {
        fill: #FF6B6B;
    }
</style>