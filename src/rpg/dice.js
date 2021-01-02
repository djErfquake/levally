const rollDie = function(sides) { return Math.floor(Math.random() * sides) + 1; };


module.exports = {
    rollDie: rollDie,
    rollCheck: function(mod) { return rollDie(20) + mod; },
    parseAndRollDice: function(dice) {
        let numDice = '';
        let dieSides = '';
        let plusAmount = '';
        for (let i = 0; i < dice.length; i++) {
            const letter = dice.charAt(i);
            if (typeof(numDice) != 'number') {
                if (letter == 'd') {
                    numDice = parseInt(numDice);
                } else {
                    numDice += letter
                }
                continue;
            }
            if (typeof(dieSides) != 'number') {
                if (letter == '+') {
                    dieSides = parseInt(dieSides);
                } else {
                    dieSides += letter
                }

                if (i == dice.length - 1) {
                    dieSides = parseInt(dieSides);
                }
                continue;
            }
            if (typeof(plusAmount) != 'number') {
                plusAmount += letter
                if (i == dice.length - 1) {
                    plusAmount = parseInt(plusAmount);
                }
            }
        }

        let rollingTotal = 0;
        for (let i = 0; i < numDice; i++) {
            rollingTotal += rollDie(dieSides);
        }
        rollingTotal += plusAmount;
        return rollingTotal;
    }
}