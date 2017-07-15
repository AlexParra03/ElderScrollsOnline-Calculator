import React from "react";
import PropTypes from "prop-types";
//Stateless Component
export class Character extends React.Component {

    render(){
        return (
            <div className="character-sheet">
                <div className="equip-head " onClick={() => {this.props.selectMenu("head")}}> <p> Head </p> </div>
                <div className="equip-shoulder" onClick={() => {this.props.selectMenu("shoulders")}}> <p> Shoulders </p> </div>
                <div className="equip-chest" onClick={() => {this.props.selectMenu("chest")}}> <p> Chest </p> </div>
                <div className="equip-glove" onClick={() => {this.props.selectMenu("gloves")}}> <p> Gloves </p> </div>
                <div className="equip-belt" onClick={() => {this.props.selectMenu("belt")}}> <p> Belt </p> </div>
                <div className="equip-pants" onClick={() => {this.props.selectMenu("pants")}}> <p> Pants </p> </div>
                <div className="equip-boots" onClick={() => {this.props.selectMenu("boots")}}> <p> Boots </p> </div>
                <div className="equip-weapon" onClick={() => {this.props.selectMenu("weapon")}}> <p> Weapon </p> </div>
                <div className="equip-jewlery" onClick={() => {this.props.selectMenu("jewlery")}}> <p> Jewlery </p> </div>

            </div>
        );
    }
}

Character.propTypes = {
    me: PropTypes.object,
    selectMenu: PropTypes.function
}
