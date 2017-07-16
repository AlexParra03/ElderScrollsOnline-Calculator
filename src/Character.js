import React from "react";
import PropTypes from "prop-types";
//Stateless Component
export class Character extends React.Component {

    render(){
        return (
            <div className="character-sheet">
                <div className="equip-head " onClick={() => {this.props.selectMenu("armor",this.props.id, 0)}}> <p> Head </p> <p> {  typeof this.props.me.items[0] !== 'undefined' ? this.props.me.items[0].name : 'none' } </p> </div>
                <div className="equip-shoulder" onClick={() => {this.props.selectMenu("armor",this.props.id,1)}}> <p> Shoulders </p> <p> { typeof this.props.me.items[1] !== 'undefined' ? this.props.me.items[1].name : 'none'} </p> </div>
                <div className="equip-chest" onClick={() => {this.props.selectMenu("armor",this.props.id,2)}}> <p> Chest </p> <p> { typeof this.props.me.items[2] !== 'undefined' ? this.props.me.items[2].name : 'none'} </p> </div>
                <div className="equip-glove" onClick={() => {this.props.selectMenu("armor",this.props.id,3)}}> <p> Gloves </p> <p> {typeof this.props.me.items[3] !== 'undefined' ? this.props.me.items[3].name : 'none'} </p> </div>
                <div className="equip-belt" onClick={() => {this.props.selectMenu("armor",this.props.id,4)}}> <p> Belt </p> <p> {typeof this.props.me.items[4] !== 'undefined' ? this.props.me.items[4].name : 'none'} </p> </div>
                <div className="equip-pants" onClick={() => {this.props.selectMenu("armor",this.props.id,5)}}> <p> Pants </p> <p> {typeof this.props.me.items[5] !== 'undefined' ? this.props.me.items[5].name : 'none'} </p> </div>
                <div className="equip-boots" onClick={() => {this.props.selectMenu("armor",this.props.id,6)}}> <p> Boots </p> <p> { typeof this.props.me.items[6] !== 'undefined' ? this.props.me.items[6].name : 'none'} </p> </div>
                <div className="equip-weapon" onClick={() => {this.props.selectMenu("weapon",this.props.id, 7)}}> <p> Weapon </p> <p> { typeof this.props.me.items[7] !== 'undefined' ? this.props.me.items[7].name : 'none'} </p> </div>
                <div className="equip-jewlery" onClick={() => {this.props.selectMenu("jewlery",this.props.id,8)}}> <p> Jewlery </p> <p> { typeof this.props.me.items[8] !== 'undefined' ? this.props.me.items[8].name : 'none'} </p> </div>

            </div>
        );
    }
}

Character.propTypes = {
    me: PropTypes.object,
    id: PropTypes.number,
    selectMenu: PropTypes.function
}
