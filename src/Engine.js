import React from "react";
import {Character} from "./Character";
import {ItemFactory, armorInventory, weaponInventory, jewleryInventory} from './Inventory';

//Stateful Component
export class Engine extends React.Component {
    constructor(props){
        super(props)
        this.selectMenu = this.selectMenu.bind(this);
        this.state = {
            characters: [ItemFactory.createCharacter('warrior', 60), ItemFactory.createCharacter('mage', 60)],
            activeMenu: "none"
        }
    }

    render(){
        return (
            <div>
                <Character me={this.state.characters[0]} selectMenu={this.selectMenu} />
                <Character me={this.state.characters[1]} selectMenu={this.selectMenu} />
            </div>
        );
    }


    //Handlers
    selectMenu(menuType){
        this.setState({
            activeMenu: menuType
        });
    }





}
