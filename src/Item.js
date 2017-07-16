import React from 'react';
import PropTypes from 'prop-types';
import {armorInventory, weaponInventory, jewleryInventory} from "./Inventory";

export class Item extends React.Component {
    render(){
        let content = []
        for(let index in this.props.data){
            content.push( <p> {index} : {this.props.data[index]} </p> )
        }

        return <div className="menu-item" onClick={() => {
            switch (this.props.type) {
                case "armor":
                    this.props.pickItem(armorInventory[this.props.index], this.props.type)
                    break;
                case "weapon":
                    this.props.pickItem(weaponInventory[this.props.index], this.props.type)
                    break;
                case "jewlery":
                    this.props.pickItem(jewleryInventory[this.props.index], this.props.type)
                    break;
                default:
                    break;
            }

        }}> {content} </div>;
    }
}

Item.propTypes = {
    type: PropTypes.string,
    data: PropTypes.object,
    pickItem : PropTypes.function,
    index: PropTypes.number
}
