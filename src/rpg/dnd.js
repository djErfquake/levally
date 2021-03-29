let dndSrd = require('dnd5-srd');
let customMonsters = require('./monsters.js');

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

const featuresToRemove = [25,71,100,101,103,105,106,107,108,109,110,111,112,198,227,303,340,342,400];
for (let i = 0; i < featuresToRemove.length; i++) { features.splice(features.findIndex(f => f.index == featuresToRemove[i]), 1); }

const subclassesToRemove = [2,4];
for (let i = 0; i < subclassesToRemove.length; i++) { subclasses.splice(subclasses.findIndex(f => f.index == subclassesToRemove[i]), 1); }

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


const druidCircles = [
    {
        name: "Circle of the Land",
        group: "Druid Circle",
        class: { name: "Druid" },
        level: 2
    },
    {
        name: "Circle of the Moon",
        group: "Druid Circle",
        class: { name: "Druid" },
        level: 2
    }
];
subclasses = subclasses.concat(druidCircles);
for (let i = 0; i < subclasses.length; i++) { subclasses[i].index = i + 1; }


const circleOfTheMoon = [
    { 
        name: "Combat Wild Shape",
        level: 2,
        class: { name: "Druid" },
        subclass: { name: "Circle of the Moon" },
        desc: [
            "You gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.",
            "Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended."
        ]
    },
    { 
        name: "Circle Forms",
        level: 2,
        class: { name: "Druid" },
        subclass: { name: "Circle of the Moon" },
        desc: [
            "The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there).",
            "Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down."
        ]
    },
    { 
        name: "Primal Strike",
        level: 6,
        class: { name: "Druid" },
        subclass: { name: "Circle of the Moon" },
        desc: [
            "Your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
        ]
    },
    { 
        name: "Elemental Wild Shape",
        level: 10,
        class: { name: "Druid" },
        subclass: { name: "Circle of the Moon" },
        desc: [
            "You can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental."
        ]
    },
    { 
        name: "Thousand Forms",
        level: 14,
        class: { name: "Druid" },
        subclass: { name: "Circle of the Moon" },
        desc: [
            "You have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will."
        ]
    }
]
features = features.concat(circleOfTheMoon);
for (let i = 0; i < features.length; i++) { features[i].index = i + 1; }


// MODIFY STUFF

// breath weapon
traits[traits.findIndex(t => t.index == 17)].desc[0] = "You can use your action to exhale destructive energy. |COLOR| Dragonborn deal a |DAMAGE| of |DAMAGE_TYPE| damage.";


// CUSTOM STUFF
customMonsters.sort((a, b) => a.name.localeCompare(b.name)).forEach(m => m.type = "custom");
monsters = monsters.concat(customMonsters);



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
X druid circles

To do:
X add custom stuff (wrapper for dnd5-srd)
X levels.spellcasting as a card
    X spellcasting ability
- dm screen only adds cards for current players

Working order:
X get character builder page fully working
X get character page fully working
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