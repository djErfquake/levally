/*
    color palette: https://colors.lol/whacking

*/
import generator from '../utilities/generator.js';
import dnd from './dnd.js';
import dice from './dice.js';

const turnStatuses = { READY: "READY", ACTIVE: "ACTIVE", DONE: "DONE" };
const defaultEncounter = { characters: [] , turnId: 0 };
function createCharacter(socketId, name, initiative, hp) {
    return {
        id: socketId,
        name: name, 
        initiative: initiative,
        hp: hp,
        status: turnStatuses.READY,
        conditions: []
    }
}
function createMonster(monsterId, name) {
    const monster = dnd.monsters.find(m => m.index == monsterId);
    return {
        id: generator.guid(),
        name: name, 
        initiative: dice.rollCheck(Math.floor((monster.dexterity - 10) / 2)),
        hp: monster.hp ? dice.parseAndRollDice(monster.hp) : monster.hit_points,
        status: turnStatuses.READY,
        conditions: [],
        monsterId: monsterId
    }
}

function sendUpdateToSocket(socket) {
    // socket.broadcast.emit('update', encounter);
    socket.emit('update', encounter);
}

function sendUpdateToAll() {
    sockets.forEach(s => { sendUpdateToSocket(s); });
}

let encounter = { ...defaultEncounter};
let sockets = [];

let initialized = false;
export default {
    defaultEncounter: defaultEncounter,
    init: function() {
        if (initialized) return;
        console.log("Initializing RPG Initiative Tracker.");
        initialized = true;
    },
    registerSocket: function(socket) {
        socket.on('add_character', function(c) {
            console.log('add_character', c);
            let newCharacter = createCharacter(socket.id, c.name, c.initiative, c.hp);
            encounter.characters.push(newCharacter);
            sendUpdateToAll();
            socket.emit('character_added', newCharacter.id);
        });
        socket.on('add_monster', function({id, name}) {
            let newMonster = createMonster(id, name);
            console.log(`adding monster ${JSON.stringify(newMonster)}`);
            encounter.characters.push(newMonster);
            sendUpdateToAll();
        });
        socket.on('modify_stat', function({characterId, stat, newValue}) {
            const characterIndex = encounter.characters.findIndex(c => c.id == characterId);
            if (characterIndex != -1) { 
                console.log(`modifying ${encounter.characters[characterIndex].name}'s ${stat} to ${newValue}`);
                if ({}.hasOwnProperty.call(encounter.characters[characterIndex], stat)) {
                    encounter.characters[characterIndex][stat] = newValue;
                    sendUpdateToAll();
                }
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
- update urls
- make table header row look better
- done status


*/