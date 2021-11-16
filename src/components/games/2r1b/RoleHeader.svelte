<script>
    export let role;
</script>

<main>
    <div class="name-color" style="background-color: {role.color};">
        <div class="name">{role.name}</div>
    </div>
    
    <div class="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" style="fill: {role.color};"></path>
        </svg>
    </div>
</main>

<style>
    .name-color {
        margin: 0;
        padding: 0;
        color: white;
        height: 28vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .name {
        font-size: 3rem;
        font-weight: 700;
        padding: 20px;
        padding-top: 7vh;
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
</style>