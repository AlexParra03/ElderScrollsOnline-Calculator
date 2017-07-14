import React from "react";
import {Menu} from "./Menu";
import {Character} from "./Character";

//Stateful Component
export class Engine extends React.Component {
    constructor(props){
        super(props)
        this.selectMenu = this.selectMenu.bind(this);
        this.state = {
            characters = [],
            activeMenu = "none",
        }
    }

    render(){

    }


    //Handlers
    selectMenu(menuType){
        this.setState({
            activeMenu: menuType
        })
    }

    // Object creators
    createCharacter(characterClass, level){
        return {
            class: typeof characterClass === 'string' ? characterClass : "",
            weapon: {},
            armor: new Array(7),
            jewlery: new Array(3),
            attributes: {}
        }
    }

    createWeapon(name, type, damage, penetration){
        return {
            name : typeof name === 'string' ? name : '_weapon'
            type : typeof type === 'string' ? type : '',
            damage:  typeof damage === 'number' ? damage : 0,
            penetration:  typeof penetration === 'number' ? penetration : 0
        }
    }

    createArmor(name, type, physicalResistance, magicResistance){
        return {
            name : typeof name === 'string' ? name : '_armor',
            type : typeof type === 'string' ? type : 'medium',
            physicalResistance: typeof physicalResistance === 'number' ? physicalResistance : 0,
            magicResistance:  typeof magicResistance === 'number' ? magicResistance : 0
        }
    }

    createJewlery(name, critChance, health){
        return {
            name : typeof name === 'string' ? name : '_jewlery',
            critChance: typeof critChance === 'number' ? critChance : 0,
            health: typeof health === 'number' ? health : 0
        }
    }

    const armorInventory = [
        createArmor("Almalexia's Mercy", "light", 100, 300),
        createArmor("Arch-Mage", "light", 110, 310),
        createArmor("Bloodthorn's Touch", "light", 90, 360),
        createArmor("Buffer of the Swift", "light", 100, 350),
        createArmor("Archer's Mind", "medium", 200, 200),
        createArmor("Bone Pirate's Tatters", "medium", 210, 200),
        createArmor("Draugr Hulk", "medium", 190, 210),
        createArmor("Fiord's Legacy", "medium", 220, 190),
        createArmor("Affliction", "heavy", 300, 100),
        createArmor("Akaviri Dragonguardn", "heavy", 310, 100),
        createArmor("Alessian Order", "heavy", 320, 90),
        createArmor("Affliction", "heavy", 315, 95)
    ];

    const weaponInventory = [
        createWeapon("Magic Wand", "magic", 200, 500 ),
        createWeapon("Oracle", "magic", 230, 480 ),
        createWeapon("Mistic Energy", "magic", 190, 550 ),
        createWeapon("Bow", "physical", 210, 510 ),
        createWeapon("Ballista", "physical", 215, 495 ),
        createWeapon("Sword", "physical", 180, 600 ),
    ];

    const jewleryInventory = [
        createJewlery("Neckacle of Health", 40, 100),
        createJewlery("Eye of the hawk", 90, 30),
        createJewlery("Mistic Protection", 30, 120),
        createJewlery("Ambulet of luck", 60, 70),
        createJewlery("Trebol de tres hojas", 110, 40)
    ];



}
