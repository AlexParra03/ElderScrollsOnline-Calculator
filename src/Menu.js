import React from "react";
import PropTypes from 'prop-types';
import {Item} from './Item';

//Stateless Component
export class Menu extends React.Component {
    render(){
        const items = this.props.content.map((item, index) => {
            return (<Item data={item} key={index} />);
        });

        return (
            <div>
                <h3 className="menuTitle"> {this.props.type} </h3>
                <div className="menuList"> {items} </div>
            </div>
        );
    }
}

Menu.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array
}
