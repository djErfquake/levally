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
            "At Higher Levels. When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours.When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
        ]
    }

];