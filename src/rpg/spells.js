module.exports = [
    {
        name: "Hex",
        level: 1,
        casting_time: "1 Bonus Action",
        range: "90 ft",
        components: ["V", "S", "M"],
        material: "The petrified eye of a newt",
        duration: "1 Hour",
        school: {name: "Enchantment" },
        classes: [ { name: "Warlock" } ],
        subclasses: [],
        page: "phb 251",
        url: "https://5e.tools/spells.html#hex_phb",
        desc: [
            "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.",
            "If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",
            "A remove curse cast on the target ends this spell early."
        ],
        higher_level: [
            "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours.When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
        ]
    },
    {
        name: "Dissonant Whispers",
        level: 1,
        casting_time: "1 Action",
        range: "60 ft",
        components: ["V"],
        duration: "Instantaneous",
        school: {name: "Enchantment" },
        classes: [ { name: "Bard" } ],
        subclasses: [ { name: "Great Old One" } ],
        page: "phb 234",
        desc: [
            "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save."
        ],
        higher_level: [
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
        ]
    }

];