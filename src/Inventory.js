
// Object creator
export class ItemFactory{
    static createCharacter(characterClass, level){
        return {
            class: typeof characterClass === 'string' ? characterClass : "",
            items: new Array(9),
            attributes: {}
        }
    }

    static createWeapon(name, type, damage, penetration){
        return {
            name : typeof name === 'string' ? name : '_weapon',
            type : typeof type === 'string' ? type : '',
            damage:  typeof damage === 'number' ? damage : 0,
            penetration:  typeof penetration === 'number' ? penetration : 0
        }
    }

    static createArmor(name, type, physicalResistance, magicResistance){
        return {
            name : typeof name === 'string' ? name : '_armor',
            type : typeof type === 'string' ? type : 'medium',
            physicalResistance: typeof physicalResistance === 'number' ? physicalResistance : 0,
            magicResistance:  typeof magicResistance === 'number' ? magicResistance : 0
        }
    }

    static createJewlery(name, critChance, health){
        return {
            name : typeof name === 'string' ? name : '_jewlery',
            critChance: typeof critChance === 'number' ? critChance : 0,
            health: typeof health === 'number' ? health : 0
        };
    }
}

export const armorInventory = [
    ItemFactory.createArmor("Almalexia's Mercy", "light", 100, 300),
    ItemFactory.createArmor("Arch-Mage", "light", 110, 310),
    ItemFactory.createArmor("Bloodthorn's Touch", "light", 90, 360),
    ItemFactory.createArmor("Buffer of the Swift", "light", 100, 350),
    ItemFactory.createArmor("Archer's Mind", "medium", 200, 200),
    ItemFactory.createArmor("Bone Pirate's Tatters", "medium", 210, 200),
    ItemFactory.createArmor("Draugr Hulk", "medium", 190, 210),
    ItemFactory.createArmor("Fiord's Legacy", "medium", 220, 190),
    ItemFactory.createArmor("Affliction", "heavy", 300, 100),
    ItemFactory.createArmor("Akaviri Dragonguardn", "heavy", 310, 100),
    ItemFactory.createArmor("Alessian Order", "heavy", 320, 90),
    ItemFactory.createArmor("Affliction", "heavy", 315, 95)
];

export const weaponInventory = [
    ItemFactory.createWeapon("Magic Wand", "magic", 200, 500 ),
    ItemFactory.createWeapon("Oracle", "magic", 230, 480 ),
    ItemFactory.createWeapon("Mistic Energy", "magic", 190, 550 ),
    ItemFactory.createWeapon("Bow", "physical", 210, 510 ),
    ItemFactory.createWeapon("Ballista", "physical", 215, 495 ),
    ItemFactory.createWeapon("Sword", "physical", 180, 600 ),
];

export const jewleryInventory = [
    ItemFactory.createJewlery("Neckacle of Health", 40, 100),
    ItemFactory.createJewlery("Eye of the hawk", 90, 30),
    ItemFactory.createJewlery("Mistic Protection", 30, 120),
    ItemFactory.createJewlery("Ambulet of luck", 60, 70),
    ItemFactory.createJewlery("Trebol de tres hojas", 110, 40)
];
