module.exports = [
    {
        name: 'Bomber',
        team: 'red',
        power: 'At the end of the game, everyone in your room dies. You and the red team win if the President dies.',
        mandatory: true
    },
    {
        name: 'President',
        team: 'blue',
        power: "At the end of the game, everyone in the same room as the Bomber dies. You and the blue team win if you don't die.",
        mandatory: true
    },
    // {
    //     name: 'Agent',
    //     team: 'red/blue',
    //     power: 'Once per round you may privately reveal your card to a player, and tell them you are using your Agent power. They must reveal their entire role to you, unless another condition has been applied to them which prevents them to do so.',
    // },
    {
        name: 'Agoraphobe',
        team: 'grey',
        power: 'You win if you are never sent to a different room.',
        associated: 'Traveler'
    },
    {
        name: 'Ahab',
        team: 'grey',
        power: 'You win if Moby dies and you do not.',
        associated: 'Moby'
    },
    {
        name: 'Moby',
        team: 'grey',
        power: 'You win if Ahab dies and you do not.',
        associated: 'Ahab'
    },
    {
        name: 'Ambassador',
        team: 'red,blue',
        power: "Before the game begins, you must publically announce that you are an Ambassador. You keep you role publically revealled for the rest of the game. You are immuned to all conditions and can walk freely between rooms.",
    },
    // {
    //     name: 'Amnesiac',
    //     team: 'purple',
    //     power: 'At the end of the last round, before all players reveal their roles, you must declare which team you are on by saying, "I remember which team I am on. I am on the _________." You must choose the red team, blue team, or neither team. To win you need to guess the team allegiance of the /buried/ card. If you choose the correct team but your team loses, you lose too.',
    //     buried: true
    // },
    {
        name: 'Born Leader',
        team: 'grey',
        power: "You win if you are a room's leader at the end of the game",
    },
    {
        name: 'Decoy',
        team: 'grey',
        power: 'You win if the Sniper shoots you at the end of the last round.',
        associated: 'Sniper,Target'
    },
    {
        name: 'Paper',
        team: 'grey',
        power: 'You win if you are in the same room as the Rock, but a different room than Scissors at the end of the game.',
        associated: 'Rock,Scissors'
    },
    {
        name: 'Rock',
        team: 'grey',
        power: 'You win if you are in the same room as the Scissors, but a different room than Paper at the end of the game.',
        associated: 'Paper,Scissors'
    },
    {
        name: 'Scissors',
        team: 'grey',
        power: 'You win if you are in the same room as the Paper, but a different room than Rock at the end of the game.',
        associated: 'Paper,Rock'
    },
    {
        // name: 'Sniper',
        name: 'Sniper President',
        team: 'grey',
        power: 'At the end of the last round, before players reveal their roles, you must publically announce which player you are shooting. The selected player does not need to be in the same room ast you. You win if the player you selected is the Target. Whichever player you choose dies, which may impact other roles.',
        associated: 'Target,Decoy'
    },
    {
        name: 'Target',
        team: 'grey',
        power: 'You win if the Sniper does not shoot you at the end of the last round.',
        associated: 'Sniper,Decoy'
    },
    {
        name: 'Traveler',
        team: 'grey',
        power: 'You win if you are sent to a different room at the end of at least 3 rounds.',
        associated: 'Agoraphobe'
    }
];