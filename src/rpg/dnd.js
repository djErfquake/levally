let dndSrd = require('dnd5-srd');

let abilityScores = dndSrd.data.abilityScores;
let classes = dndSrd.data.classes;
let conditions = dndSrd.data.conditions;
let damageTypes = dndSrd.data.damageTypes;
let equipment = dndSrd.data.equipment;
let equipmentCategories = dndSrd.data.equipmentCategories;
let features = dndSrd.data.features;
let languages = dndSrd.data.languages;
let levels = dndSrd.data.levels;
let magicSchools = dndSrd.data.magicSchools;
let monsters = dndSrd.data.monsters;
let proficiencies = dndSrd.data.proficiencies;
let races = dndSrd.data.races;
let skills = dndSrd.data.skills;
let spellcasting = dndSrd.data.spellcasting;
let spells = dndSrd.data.spells;
let startingEquipment = dndSrd.data.startingEquipment;
let subclasses = dndSrd.data.subclasses;
let subraces = dndSrd.data.subraces;
let traits = dndSrd.data.traits;
let weaponProperties = dndSrd.data.weaponProperties;


// REMOVE STUFF
const traitsToRemove = [3,6,9,10,11,16,22,23,27];
for (let i = 0; i < traitsToRemove.length; i++) { traits.splice(traits.findIndex(t => t.index == traitsToRemove[i]), 1); }

const featuresToRemove = [25,71,100,198,227,303,340,342,400];
for (let i = 0; i < featuresToRemove.length; i++) { features.splice(features.findIndex(f => f.index == featuresToRemove[i]), 1); }

// ADD STUFF
const dragonAncestryTypes = [
    { name: "Black", race: { name: "Dragonborn"}, damageType: "Acid", breathWeapon: "5 by 30ft. line (Dex. save)" },
    { name: "Blue", race: { name: "Dragonborn"}, damageType: "Lightning", breathWeapon: "5 by 30ft. line (Dex. save)" },
    { name: "Brass", race: { name: "Dragonborn"}, damageType: "Fire", breathWeapon: "5 by 30ft. line (Dex. save)" },
    { name: "Bronze", race: { name: "Dragonborn"}, damageType: "Lightning", breathWeapon: "5 by 30ft. line (Dex. save)" },
    { name: "Copper", race: { name: "Dragonborn"}, damageType: "Acid", breathWeapon: "5 by 30ft. line (Dex. save)" },
    { name: "Gold", race: { name: "Dragonborn"}, damageType: "Fire", breathWeapon: "15ft. cone (Dex. save)" },
    { name: "Green", race: { name: "Dragonborn"}, damageType: "Poison", breathWeapon: "15ft. cone (Con. save)" },
    { name: "Red", race: { name: "Dragonborn"}, damageType:"Fire", breathWeapon: "15ft. cone (Dex. save)"  },
    { name: "Silver", race: { name: "Dragonborn"}, damageType: "Cold", breathWeapon: "15ft. cone (Con. save)" },
    { name: "White", race: { name: "Dragonborn"}, damageType: "Cold", breathWeapon: "15ft. cone (Con. save)" }
];
subraces = subraces.concat(dragonAncestryTypes);
for (let i = 0; i < subraces.length; i++) { subraces[i].index = i + 1; }


// MODIFY STUFF

// breath weapon
traits[traits.findIndex(t => t.index == 17)].desc[0] = "You can use your action to exhale destructive energy. |COLOR| Dragonborn deal a |DAMAGE| of |DAMAGE_TYPE| damage.";


// CUSTOM STUFF




module.exports = {
    abilityScores: abilityScores,
    classes: classes,
    conditions: conditions,
    damageTypes: damageTypes,
    equipment: equipment,
    equipmentCategories: equipmentCategories,
    features: features,
    languages: languages,
    levels: levels,
    magicSchools: magicSchools,
    monsters: monsters,
    proficiencies: proficiencies,
    races: races,
    skills: skills,
    spellcasting: spellcasting,
    spells: spells,
    startingEquipment: startingEquipment,
    subclasses: subclasses,
    subraces: subraces,
    traits: traits,
    weaponProperties: weaponProperties
};

/*
https://www.npmjs.com/package/dnd5-srd
https://npm.runkit.com/dnd5-srd


Still not working:
X elritch invocations
X dragon heritage (in races.trait_options)
- druid circles

To do:
X add custom stuff (wrapper for dnd5-srd)
X levels.spellcasting as a card
- dm screen only adds cards for current players

Working order:
- get character builder page fully working
- get character page fully working
- get dm page working


*/






/*
EXAMPLE CHARACTER JSON
======================
{
    "l": 1,
    "r": "Elf",
    "c": "Druid",
    "s": [2,3,1,4,5,6],
    "sub": [
        "Fighting Style: Defense",
    ]
}



"sub": {
        "fightingStyle":"Protection",
        "draconicAncestry":"Gold",
        "druicCircle":"Moon",
        "eldritchInvocations": [
            "Agonizing Blast",
            "Repelling Blast"
        ]
    }


*/