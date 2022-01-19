/*
    color palette: https://colors.lol/whacking

*/
import encounterHelper from './encounterHelper.js';

function sendUpdateToSocket(socket) {
    // socket.broadcast.emit('update', encounter);
    socket.emit('update', encounter);
}

function sendUpdateToAll() {
    sockets.forEach(s => { sendUpdateToSocket(s); });
}

let encounter = { ...encounterHelper.defaultEncounter};
let sockets = [];

let initialized = false;
export default {
    init: function() {
        if (initialized) return;
        console.log("Initializing RPG Initiative Tracker.");
        initialized = true;
    },
    registerSocket: function(socket) {
        socket.on('add_character', function(c) {
            console.log('add_character', c);
            let newCharacter = encounterHelper.createCharacter(socket.id, c.name, c.initiative, c.hp);
            encounter.characters.push(newCharacter);
            sendUpdateToAll();
            socket.emit('character_added', newCharacter.id);
        });
        socket.on('add_monster', function({id, name}) {
            let newMonster = encounterHelper.createMonster(id, name);
            console.log(`adding monster ${JSON.stringify(newMonster)}`);
            encounter.characters.push(newMonster);
            sendUpdateToAll();
        });
        socket.on('remove_character', function(characterId) {
            const characterIndex = encounter.characters.findIndex(c => c.id == characterId);
            if (characterIndex != -1) {
                encounter.characters.splice(characterIndex, 1);
                sendUpdateToAll();
            }
        });
        socket.on('modify_stat', function({characterId, stat, newValue}) {
            const characterIndex = encounter.characters.findIndex(c => c.id == characterId);
            if (characterIndex != -1) { 
                // console.log(`modifying ${encounter.characters[characterIndex].name}'s ${stat} to ${newValue}`);
                if ({}.hasOwnProperty.call(encounter.characters[characterIndex], stat)) {
                    encounter.characters[characterIndex][stat] = newValue;
                    sendUpdateToAll();
                }
            }
        });
        socket.on('reset_round', function() {
            encounter.characters.forEach(c => {
                c.status = encounterHelper.turnStatuses.READY;
            });
            const sorted = [...encounter.characters].sort((a, b) => b.initiative - a.initiative);
            if (sorted.length > 0) {
                sorted[0].status = encounterHelper.turnStatuses.ACTIVE;
            }
            sendUpdateToAll();
        });
        socket.on('add_spell', function(spellId) {
            if (!encounter.spells.includes(spellId)) {
                encounter.spells.push(spellId);
                sendUpdateToAll();
            }
        });

        sockets.push(socket);
        sendUpdateToSocket(socket);
    },
    removePlayer: function(socket) {
        const characterIndex = encounter.characters.findIndex(c => c.id == socket.id);
        if (characterIndex != -1) { encounter.characters.splice(characterIndex, 1); }
        const socketIndex = sockets.findIndex(s => s.id == socket.id);
        sockets.splice(socketIndex, 1);
    }
};


/*
TODO: 
 - set initiative (include decimals)
 - spells
 - dice


*/