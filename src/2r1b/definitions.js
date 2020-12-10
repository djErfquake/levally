module.exports = {
    dies: {
        description: "Certain players can make players die. This means that their power no longer activates.",
        examples: {
            Bomber: "The Bomber makes everyone in their room at the end of the game die.",
            Sniper: "Before everyone reavals their roles at the end of the game, the sniper chooses one other player to die. If they chose the bomber, the bomb does not go off."
        }
    },
    leader: {
        description: "The player who chooses the hostages to leave the room at the end of the round. There is one leader in each room. The first player that is nominated by another player to the leader becomes leader. A leader can be changed one of two ways. First, the leader can give their leadership to another player. Second, the players in the room can usurp the leader. This happens when a player nominates a player (possibly themselves) to be the new leader. A majority vote (by raising hands in the air) means a leadership change."
    },
    hostage: {
        description: "The player(s) who are chosen to leave the room at the end of a round."
    }
};