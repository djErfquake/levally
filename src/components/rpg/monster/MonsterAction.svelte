<script>
    import Dice from '../../../rpg/dice.js';
    import Button from '../Button.svelte';

    export let name;
    export let desc;
    export let damage;
    $: damages = desc.match(/\dd\d (\+|\-) \d/gm) ?? [];
    $: damageButtonTexts = desc.match(/\dd\d (\+|\-) \d/gm) != null ? desc.match(/\dd\d (\+|\-) \d/gm).map(d => `Damage (${d})`) : [];

    export let isAlternate = false;

    let rollValue = "-";

    function rollAttack() {
        const bonus = desc.match(/\+\d|-\d/gm);
        const rollText = `1d20${bonus}`;
        const roll = Dice.parseAndRollDice(rollText);
        rollValue = roll;
        console.log(`rolled an attack roll of ${roll} for ${name} from ${rollText}`);
    }

    function rollDamage(d) {
        // let bonus = { type: '+', amount: damage[0].damage_bonus };
        // if (bonus.amount < 0) { bonus.type = '-'; }
        // const rollText = `${damage[0].damage_dice}${bonus.type}${bonus.amount}`;
        const rollText = d;
        const roll = Dice.parseAndRollDice(rollText);
        rollValue = roll;
        console.log(`rolled a damage roll of ${roll} for ${name} from ${rollText}`);
    }

</script>

<div class="action" class:alternate={isAlternate}>
    <div class="name">{name}</div>
    <div class="desc">{desc}</div>
    {#if damage && damage.length > 0}
    <div class="damage">{rollValue}</div>
    <div class="damage-buttons">
        <Button onClick={rollAttack} text='Attack'></Button>
        {#each damages as d, i}
        <Button onClick={() => { rollDamage(d); }} text={damageButtonTexts[i]}></Button>
        {/each}
    </div>
    {/if}
</div>

<style>
    .alternate {
        background-color: white;
    }

    .name {
        font-weight: 600;
        font-size: 0.8em;
        text-transform: uppercase;
        text-align: center;
        padding-top: 5px;
    }

    .desc {
        padding: 5px 20px;
    }

    .damage {
        text-align: center;
    }

    .damage-buttons {
        padding: 15px;
    }
</style>