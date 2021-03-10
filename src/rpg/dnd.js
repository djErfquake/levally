module.exports = {
    races: [
        'Elf',
        'Dwarf',
        'Gnome',
        'Half-Orc',
        'Human',
        'Dragonborn',
        'Halfling'
    ],
    classes: [
        'Bard',
        'Cleric',
        'Druid',
        'Fighter',
        'Rogue',
        'Wizard',
        'Warlock'
    ],
    fightingStyles: [
        'Great Weapon Fighting',
        'Protection'
    ],
    draconicAncestries: [
        { dragon: "Black", damageType: "Acid", breathWeapon: "5 by 30ft. line (Dex. save)" },
        { dragon: "Blue", damageType: "Lightning", breathWeapon: "5 by 30ft. line (Dex. save)" },
        { dragon: "Brass", damageType: "Fire", breathWeapon: "5 by 30ft. line (Dex. save)" },
        { dragon: "Bronze", damageType: "Lightning", breathWeapon: "5 by 30ft. line (Dex. save)" },
        { dragon: "Copper", damageType: "Acid", breathWeapon: "5 by 30ft. line (Dex. save)" },
        { dragon: "Gold", damageType: "Fire", breathWeapon: "15ft. cone (Dex. save)" },
        { dragon: "Green", damageType: "Poison", breathWeapon: "15ft. cone (Con. save)" },
        { dragon: "Red", damageType: "Fire", breathWeapon: "15ft. cone (Dex. save)" },
        { dragon: "Silver", damageType: "Cold", breathWeapon: "15ft. cone (Con. save)" },
        { dragon: "White", damageType: "Cold", breathWeapon: "15ft. cone (Con. save)" }
    ],
    druidCircles: [
        'Land',
        'Moon'
    ],
    eldritchInvocations: [
        'Agonizing Blast',
        'Repelling Blast'
    ]

}

/*
EXAMPLE CHARACTER JSON
======================
{
    "l": 1,
    "r": "Elf",
    "c": "Druid",
    "s": [2,3,1,4,5,6],
    "sub": {
        "fightingStyle":"Protection",
        "draconicAncestry":"Gold",
        "druicCircle":"Moon",
        "eldritchInvocations": [
            "Agonizing Blast",
            "Repelling Blast"
        ]
    }
}






*/