module.exports = {
    effectColors: {
        Healing: [ '#ffbcaf', '#cf3759'],
        Thunder: [ '#FDDC5C', '#fe7231'],
        Acid: [ '#A0CA65', '#50AF7A'],
        Cold: [ '#C4FCF0', '#77BDDA'],
        Control: [ '#FFE7FF', '#7A4E81'],
        Bludgeoning: [ '#CEF6FF', '#0089BE'],
        Communication: [ '#FFA196', '#FF8766'],
        Utility: [ '#FBC905', '#4C2E00' ],
        Restrained: [ '#FFEFCA', '#7E7666' ],

        Necrotic: [ '#FDDC5C', '#fe7231'],
        Fire: [ '#FDDC5C', '#fe7231'],
        Buff: [ '#FDDC5C', '#fe7231'],
        Detection: [ '#FDDC5C', '#fe7231'],
        Shapechanging: [ '#FDDC5C', '#fe7231'],
        Charm: [ '#FDDC5C', '#fe7231'],
        Creation: [ '#FDDC5C', '#fe7231'],
        Teleportation: [ '#FDDC5C', '#fe7231'],
        Force: [ '#FDDC5C', '#fe7231'],
        Deception: [ '#FDDC5C', '#fe7231']
    },
    spells: {
        cureWounds: {
            name: "Cure Wounds",
            level: 1,
            castingTime: "1 action",
            range: "Touch",
            components: ["V", "S"],
            duration: "Instantaneous",
            school: "Evocation",
            effect: "Healing",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st."
        },
        druidcraft: {
            name: "Druidcraft",
            level: 0,
            castingTime: "1 action",
            range: "30ft",
            components: ["V", "S"],
            duration: "Instantaneous",
            school: "Transmutation",
            effect: "Control",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "Whispering to the spirits of nature, you create one of the following effects within range:\n|ul|You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.|li|You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.|li|You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.|li|You instantly light or snuff out a candle, a torch, or a small campfire.|/ul|"
        },
        shillelagh: {
            name: "Shillelagh",
            level: 0,
            castingTime: "1 bonus action",
            range: "Touch",
            components: ["V", "S", "M"],
            duration: "1 Minute",
            school: "Transmutation",
            effect: "Bludgeoning",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."
        },
        speakWithAnimals: {
            name: "Speak with Animals",
            level: 1,
            castingTime: "1 action",
            range: "Self",
            components: ["V", "S"],
            duration: "10 Minutes",
            school: "Divination",
            effect: "Communication",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the GM's discretion."
        },
        thunderwave: {
            name: "Thunderwave",
            level: 1,
            castingTime: "1 action",
            range: "Self 15ft Cube",
            components: ["V", "S"],
            duration: "Instantaneous",
            school: "Evocation",
            effect: "Thunder",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.\nIn addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
        },
        entangle: {
            name: "Entangle",
            level: 1,
            castingTime: "1 action",
            range: "90 ft, 20 ft cube",
            components: ["V", "S"],
            duration: "1 Minute",
            school: "Conjuration",
            effect: "Restrained",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain.\nA creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.\nWhen the spell ends, the conjured plants wilt away."
        }
    }
};