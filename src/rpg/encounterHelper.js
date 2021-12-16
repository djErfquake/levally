import dnd from './dnd.js';
import dice from './dice.js';
import generator from '../utilities/generator.js';

const turnStatuses = { READY: "READY", ACTIVE: "ACTIVE", DONE: "DONE" };
const defaultEncounter = { characters: [] , turnId: 0 };
function createCharacter(socketId, name, initiative, hp) {
    return {
        id: socketId,
        name: name, 
        initiative: initiative,
        hp: hp,
        status: turnStatuses.READY,
        description: '',
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
        description: '',
        monsterId: monsterId
    }
}

export default {
    turnStatuses: turnStatuses,
    defaultEncounter: defaultEncounter,
    createCharacter: createCharacter,
    createMonster: createMonster
};