/*
    color palette: https://colors.lol/whacking

*/
import generator from '../utilities/generator.js';
import dnd from './dnd.js';
import dice from './dice.js';

const turnStatuses = { READY: "READY", ACTIVE: "ACTIVE", DONE: "DONE" };
const defaultEncounter = { characters: [] , turnId: 0 };
function createCharacter(name, initiative, hp) {
    return {
        id: generator.guid(),
        name: name, 
        initiative: initiative,
        hp: hp,
        status: turnStatuses.READY,
        conditions: []
    }
}
function createMonster(monsterId) {
    const monster = dnd.monsters.find(m => m.id == monsterId);
    return {
        id: generator.guid(),
        name: monster.name, 
        initiative: dice.rollCheck(Math.floor((monster.dexterity - 10) / 2)),
        hp: monster.hp ? dice.parseAndRollDice(monster.hp) : monster.hit_points,
        status: turnStatuses.READY,
        conditions: [],
        monsterId: monsterId
    }
}

function sendUpdateToSocket(socket) {
    socket.broadcast.emit('update', encounter);
}

function sendUpdateToAll() {
    sockets.forEach(s => {
        s.broadcast.emit('update', encounter);
    });
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
        socket.on('get', function() {
            sendUpdateToSocket(socket);
        });
        socket.on('add_character', function({name, initiative, hp}) {
            let newCharacter = createCharacter(name, initiative, hp);
            encounter.characters.push(newCharacter);
            socket.id = newCharacter.id;
            sockets.push(socket);
            sendUpdateToAll();
        });
        socket.on('add_monster', function({monsterId}) {
            let newMonster = createMonster(monsterId);
            encounter.characters.push(newMonster);
            sendUpdateToAll();
        });
        sendUpdateToSocket(socket);
    },
    removePlayer: function(socket) {
        const characterIndex = encounter.characters.findIndex(c => c.id == socket.id);
        encounter.characters.splice(characterIndex, 1);
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