let dndSrd = require('dnd5-srd');
let customMonsters = require('./monsters.js');
let customSpells = require('./spells.js');
let customFeatures = require('./features.js');
let customSubclasses = require('./subclasses.js');
let customSubraces = require('./subraces.js');

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
removeFromList(traits, [3,6,9,10,11,16,22,23,27]);
removeFromList(features, [25,29,30,32,71,100,101,103,105,106,107,108,109,110,111,112,198,227,303,340,342,400]);
removeFromList(subclasses, [2,4]);
removeFromList(subraces, [1,2,3,4]);

// MODIFY STUFF
// breath weapon
traits[traits.findIndex(t => t.index == 17)].desc[0] = "You can use your action to exhale destructive energy. |COLOR| Dragonborn deal a |DAMAGE| of |DAMAGE_TYPE| damage.";
// add type to monsters
customMonsters.sort((a, b) => a.name.localeCompare(b.name)).forEach(m => m.type = "custom");

// ADD STUFF
features = addToList(features, customFeatures.circleOfTheMoon);
features = addToList(features, customFeatures.collegeOfValor);
subclasses = addToList(subclasses, customSubclasses.druidCircles);
subclasses = addToList(subclasses, customSubclasses.bardColleges);
subclasses = addToList(subclasses, customSubclasses.martialArchetypes);
subraces = addToList(subraces, customSubraces.dragonAncestryTypes);
monsters = addToList(monsters, customMonsters);
spells = addToList(spells, customSpells);

// MAGIC SCHOOLS AND COLORS
magicSchools = {
    "Evocation": [ "#e15f41", "#e77f67" ],
    "Illusion": [ "#f19066", "#f3a683" ],
    "Necromancy": [ "#574b90", "#786fa6" ],
    "Enchantment": [ "#546de5", "#778beb" ],
    "Transmutation": [ "#3dc1d3", "#63cdda" ],
    "Abjuration": [ "#c44569", "#cf6a87" ],
    "Conjuration": [ "#f5cd79", "#f7d794" ],
    "Divination": [ "#303952", "#596275" ]
};



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
    weaponProperties: weaponProperties,
    magicSchools: magicSchools
};



function removeFromList(list, indices) {
    for (let i = 0; i < indices.length; i++) { list.splice(list.findIndex(a => a.index == indices[i]), 1); }
}

function addToList(list, items) {
    let newList = list.concat(items);
    for (let i = 0; i < newList.length; i++) { newList[i].index = i + 1; }
    return newList;
}

/*
https://npm.runkit.com/dnd5-srd


players:
jobin - eyJsZXZlbCI6IjIiLCJyYWNlIjoiRHdhcmYiLCJjbGFzcyI6IkZpZ2h0ZXIiLCJzcGVsbHMiOltdLCJzdWJUeXBlcyI6eyJzdWJGZWF0dXJlcyI6WzEyMl19fQ==
kevin - eyJsZXZlbCI6MiwicmFjZSI6IkVsZiIsImNsYXNzIjoiV2FybG9jayIsInNwZWxscyI6WzcxLDk2LDE4NywzMjEsMTU2LDMyMF0sInN1YlR5cGVzIjp7InN1YkZlYXR1cmVzIjpbMzI2LDMzOV19fQ==
shane - eyJsZXZlbCI6IjMiLCJyYWNlIjoiSHVtYW4iLCJjbGFzcyI6IkJhcmQiLCJzcGVsbHMiOlsyMDUsMzA0LDIyLDM5LDcwLDE1NCwxNTldLCJzdWJUeXBlcyI6eyJzdWJDbGFzcyI6WzEzXX19
jonny - eyJsZXZlbCI6IjIiLCJyYWNlIjoiRWxmIiwiY2xhc3MiOiJSb2d1ZSIsInNwZWxscyI6WzIwNV0sInN1YlR5cGVzIjp7fX0=
andy  - eyJsZXZlbCI6MiwicmFjZSI6IkhhbGYtT3JjIiwiY2xhc3MiOiJEcnVpZCIsInNwZWxscyI6WzcxLDk0LDIyMiw3MF0sInN1YlR5cGVzIjp7InN1YkNsYXNzIjpbMTJdfX0=



TODO:
[ ] only show spells/traits for selected player with player is selected
[ ] only show spells/traits for selected monster with monster is selected

*/
