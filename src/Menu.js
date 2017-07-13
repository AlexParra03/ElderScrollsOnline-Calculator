import React from "react";
import PropTypes from 'prop-types';

//Stateless Component
export class Menu extends React.Component {
    render(){
        const items = this.props.content.map((item) => {
            for(let att in item){
                return <li className="menuItem"> {att} : {item[att]} </li>
            }
        });

        return (
            <div>
                <h3 className="menuTitle"> {this.props.type} </h3>
                <ul className="menuList"> items </ul> 
            </div>
        );
    }
}

Menu.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array
}
