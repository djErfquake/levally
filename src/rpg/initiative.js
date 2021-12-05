/*
    color palette: https://colors.lol/whacking

*/
import generator from '../utilities/.js';
import dnd from '../../rpg/dnd.js';
import dice from '../../rpg/dice.js';

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

function sendUpdate() {
    socket.broadcast.emit('update', encounter);
}

let encounter = { ...defaultEncounter};

let initialized = false;
module.exports = {
    defaultEncounter: defaultEncounter,
    init: function() {
        if (initialized) return;
        console.log("Initializing RPG Initiative Tracker.");
        initialized = true;
    },
    registerSocket: function(socket) {
        socket.on('get', function() {
            socket.emit('get', encounter);
        });
        socket.on('add_character', function({name, initiative, hp}) {
            let newCharacter = createCharacter(name, initiative, hp);
            encounter.characters.push(newCharacter);
            sendUpdate();
        });
        socket.on('add_monster', function({monsterId}) {
            let newMonster = createMonster(monsterId);
            encounter.characters.push(newMonster);
            sendUpdate();
        });
    }
};


/*
TODO: 
- update urls
- make table header row look better
- done status


*/