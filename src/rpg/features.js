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
];

module.exports = {
    circleOfTheMoon: circleOfTheMoon
};