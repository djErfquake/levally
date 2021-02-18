module.exports = {
    effectColors: {
        Physical: [ '#FFE7FF', '#7A4E81'],
        Charm: [ '#DC9198', '#BB809A'],
        Sleep: [ '#FAF8FF', '#726CB0'],
        Hide: [ '#FBC905', '#4C2E00' ],
        Poison: [ '#A0CA65', '#50AF7A'],
        History: [ '#FFEBCC', '#2F4858'],
        Communication: [ '#C7FCEC', '#00C7A5'],
        Attack: [ '#FFD170', '#BF5847' ],
        Buff: [ '#FFE7FF', '#726CB0'],
        Shapechanging: [ '#D5AC89', '#9D7757'],
        Protection: [ '#CEF6FF', '#0089BE'],
        Movement: [ '#BCE776', '#008985'],

        Healing: [ '#ffbcaf', '#cf3759'],
        Thunder: [ '#FDDC5C', '#fe7231'],
        Acid: [ '#A0CA65', '#50AF7A'],
        Cold: [ '#C4FCF0', '#77BDDA'],
        Control: [ '#FFE7FF', '#7A4E81'],
        Bludgeoning: [ '#CEF6FF', '#0089BE'],
        Restrained: [ '#FFEFCA', '#7E7666' ],
        Creation: [ '#00ECD4', '#438FD6'],
        Debuff: [ '#ACA9BB', '#474554'],
        Prone: [ '#FEFEDF', '#005B4B'],
        
        Social: [ '#77BDDA', '#344A53'],
        Force: [ '#9FAEEB', '#9663A5'],
        Necrotic: ['#BCE776', '#847743'],
        Fire: [ '#FD996A', '#BF5847']
    },
    traits: [
        {
            name: "Darkvision",
            effect: "Physical",
            level: 1,
            raceclass: "Elf",
            description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
        },
        {
            name: "Darkvision",
            effect: "Physical",
            level: 1,
            raceclass: "Dwarf",
            description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
        },
        {
            name: "Darkvision",
            effect: "Physical",
            level: 1,
            raceclass: "Gnome",
            description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
        },
        {
            name: "Darkvision",
            effect: "Physical",
            level: 1,
            raceclass: "Half-Orc",
            description: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."
        },

        // elf
        {
            name: "Fey Ancestry",
            effect: "Charm",
            level: 1,
            raceclass: "Elf",
            description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
        },
        {
            name: "Trance",
            effect: "Sleep",
            level: 1,
            raceclass: "Elf",
            description: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is trance.) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.\n\nIf you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed."
        },
        {
            name: "Mask of the Wild",
            effect: "Hide",
            level: 1,
            raceclass: "Elf",
            description: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
        },

        // dwarf
        {
            name: "Dwarven Reslience",
            effect: "Poison",
            level: 1,
            raceclass: "Dwarf",
            description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
        },
        {
            name: "Stonecunning",
            effect: "History",
            level: 1,
            raceclass: "Dwarf",
            description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
        },

        // dragonborne
        {
            name: "Breath Weapon",
            effect: "Dragon",
            level: 1,
            raceclass: "Dragonborn-Gold",
            description: "You can use your action to exhale destructive energy. Gold Dragonborn deal a 15 ft cone (Dex save) of Fire damage.\n\nWhen you use your breath weapon, each creature in the area of the exhalation must make a saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.\n\nAfter you use your breath weapon, you can't use it again until you complete a short or long rest.\n\nIn addition, you have resistance to the damage type associated with your draconic ancestry."
        },

        // gnome
        {
            name: "Speak with Small Beasts",
            effect: "Communication",
            level: 1,
            raceclass: "Gnome",
            description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
        },

        // half orc
        {
            name: "Relentless Endurance",
            effect: "Physical",
            level: 1,
            raceclass: "Half-Orc",
            description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
        },
        {
            name: "Savage Attacks",
            effect: "Attack",
            level: 1,
            raceclass: "Half-Orc",
            description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
        },

        // halfling
        {
            name: "Lucky",
            effect: "Attack",
            level: 1,
            raceclass: "Halfling",
            description: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
        },
        {
            name: "Brave",
            effect: "Charm",
            level: 1,
            raceclass: "Halfling",
            description: "You have advantage on saving throws against being frightened."
        },
        {
            name: "Halfling Nimbleness",
            effect: "Hide",
            level: 1,
            raceclass: "Halfling",
            description: "You can move through the space of any creature that is of a size larger than yours."
        },

        // bard
        {
            name: "Bardic Inspiration",
            effect: "Buff",
            level: 1,
            raceclass: "Bard",
            description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
        },
        {
            name: "Jack of All Trades",
            level: 2,
            raceclass: "Bard",
            effect: "Phsyical",
            description: "You can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
        },
        {
            name: "Song of Rest",
            level: 2,
            raceclass: "Bard",
            effect: "Buff",
            description: "You can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points by spending Hit Dice at the end of the short rest, each of those creatures regains an extra 1d6 hit points.\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
        },

        // druid
        {
            name: "Wild Shape",
            level: 2,
            raceclass: "Druid",
            effect: "Shapechanging",
            description: "You can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.\n\nBeast Shapes\nLevel	Max. CR	Limitations	Example\n2nd	1/4	No flying or swimming speed	Wolf\n4th	1/2	No flying speed	Crocodile\n8th	1	—	Giant eagle\n\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.\n\nWhile you are transformed, the following rules apply:\nYour game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.\nWhen you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.\nYou can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.\nYou retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.\n You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
        },

        // fighter
        {
            name: "Great Weapon Fighting",
            level: 1,
            raceclass: "Fighter",
            effect: "Attack",
            description: "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
        },
        {
            name: "Protection",
            level: 1,
            raceclass: "Fighter",
            effect: "Protection",
            description: "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
        },
        {
            name: "Second Wind",
            level: 1,
            raceclass: "Fighter",
            effect: "Physical",
            description: "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. \n\nOnce you use this feature, you must finish a short or long rest before you can use it again."
        },
        {
            name: "Action Surge",
            level: 2,
            raceclass: "Fighter",
            effect: "Movement",
            description: "You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.\n\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
        },

        // rogue
        {
            name: "Sneak Attack",
            level: 1,
            raceclass: "Rogue",
            effect: "Hide",
            description: "You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\nYou don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
        },
        {
            name: "Thieves' Cant",
            level: 1,
            raceclass: "Rogue",
            effect: "Communication",
            description: "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.\nIn addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
        },
        {
            name: "Cunning Action",
            level: 2,
            raceclass: "Rogue",
            effect: "Movement",
            description: "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
        }

        // warlock

        // wizard

    ]
};