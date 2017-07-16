import React from "react";
import {Character} from "./Character";
import {ItemFactory, armorInventory, weaponInventory, jewleryInventory} from './Inventory';
import {Menu} from "./Menu";

//Stateful Component
export class Engine extends React.Component {
    constructor(props){
        super(props)
        this.selectMenu = this.selectMenu.bind(this)
        this.pickItem = this.pickItem.bind(this)
        this.state = {
            characters: [ItemFactory.createCharacter('warrior', 60), ItemFactory.createCharacter('mage', 60)],
            activeMenu: "none",
            characterFocused: 0,
            itemFocused: 0
        }
    }

    render(){
        let menu;
        switch (this.state.activeMenu) {
            case 'armor':
                menu = <Menu className="menu" type="armor" content={armorInventory} pickItem={this.pickItem} />
                break;
            case 'weapon':
                menu = <Menu className="menu" type="weapon" content={weaponInventory} pickItem={this.pickItem} />
                break;
            case 'jewlery':
                menu = <Menu className="menu" type="jewlery" content={jewleryInventory} pickItem={this.pickItem} />
                break;
            default:
                menu = <div></div>
                break;
        }

        return (
            <div>
                <Character me={this.state.characters[0]} selectMenu={this.selectMenu} id={0} />
                <Character me={this.state.characters[1]} selectMenu={this.selectMenu} id={1} />
                {menu}
            </div>

        );
    }


    //Handlers
    selectMenu(menuType, characterId, itemIndex){
        console.log(itemIndex);
        this.setState({
            activeMenu: menuType,
            characterFocused: characterId,
            itemFocused: itemIndex
        });
    }

    pickItem(item, itemType){
        let characters = this.state.characters.map( char => char)
        characters[this.state.characterFocused].items[this.state.itemFocused] = item
        this.setState({
            characters
        });
    }





}
