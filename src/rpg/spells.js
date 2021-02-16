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
        Radiant: [ '#FFD170', '#BF5847' ],
        Creation: [ '#00ECD4', '#438FD6'],
        Buff: [ '#FFE7FF', '#726CB0'],

        Necrotic: [ '#FDDC5C', '#fe7231'],
        Fire: [ '#FDDC5C', '#fe7231'],
        Detection: [ '#FDDC5C', '#fe7231'],
        Shapechanging: [ '#FDDC5C', '#fe7231'],
        Charm: [ '#FDDC5C', '#fe7231'],
        Teleportation: [ '#FDDC5C', '#fe7231'],
        Force: [ '#FDDC5C', '#fe7231'],
        Deception: [ '#FDDC5C', '#fe7231']
    },
    spells: {
        1: {
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
        2: {
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
        3: {
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
        4: {
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
        5: {
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
        6: {
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
        },
        7: {
            name: "Thaumaturgy",
            level: 0,
            castingTime: "1 action",
            range: "30 ft",
            components: ["V"],
            duration: "1 Minute",
            school: "Transmutation",
            effect: "Control",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:|ul|Your voice booms up to three times as loud as normal for 1 minute.|li|You cause flames to flicker, brighten, dim, or change color for 1 minute.|li|You cause harmless tremors in the ground for 1 minute.|li|You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.You instantaneously cause an unlocked door or window to fly open or slam shut.|li|You alter the appearance of your eyes for 1 minute.|li| If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.|/ul|"
        },
        8: {
            name: "Sacred Flame",
            level: 0,
            castingTime: "1 action",
            range: "60 ft",
            components: ["V", "S"],
            duration: "Instantaneous",
            school: "Evocation",
            effect: "Radiant",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.\n\nThe spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
        },
        9: {
            name: "Create or Destroy Water",
            level: 1,
            castingTime: "1 action",
            range: "30 ft, 30 ft cube",
            components: ["V", "S", "M"],
            duration: "Instantaneous",
            school: "Transmutation",
            effect: "Creation",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "You either create or destroy water.\n\n<b>Create Water:</b> You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area.\n\n<b>Destroy Water:</b> You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
        },
        10: {
            name: "Bless",
            level: 1,
            castingTime: "1 action",
            range: "30 ft",
            components: ["V", "S", "M"],
            duration: "1 Minute",
            school: "Enchantment",
            effect: "Buff",
            icon: "https://www.dndbeyond.com/content/1-0-1436-0/skins/waterdeep/images/spell-schools/35/evocation.png",
            description: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
        }
    }
};