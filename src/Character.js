import React from "react";
import PropTypes from "prop-types";
//Stateless Component
export class Character extends React.Component {

    render(){
        return (
            <div className="character-sheet">
                <div>
                    <div className="equip-head" onclick={this.props.selectMenu("head")}> <p> Head </p> </div>
                    <div className="equip-shoulders" onclick={this.props.selectMenu("shoulders")}> <p> Shoulders </p> </div>
                    <div className="equip-chest" onclick={this.props.selectMenu("chest")}> <p> Chest </p> </div>
                    <div className="equip-gloves" onclick={this.props.selectMenu("gloves")}> <p> Gloves </p> </div>
                    <div className="equip-belt" onclick={this.props.selectMenu("belt")}> </p> Belt </p> </div>
                    <div className="equip-pants" onclick={this.props.selectMenu("pants")}> <p> Pants </p> </div>
                    <div className="equip-boots" onclick={this.props.selectMenu("boots")}> <p> Boots </p> </div>
                </div>
                <div className="equip-weapon" onclick={this.props.selectMenu("weapon")}> <p> Weapon </p> </div>
                <div className="equip-jewlery" onclick={this.props.selectMenu("jewlery")}> <p> Jewlery </p> </div>

            </div>
        );
    }
}

Character.propTypes = {
    me: PropTypes.object,
    selectMenu: PropTypes.function
}
