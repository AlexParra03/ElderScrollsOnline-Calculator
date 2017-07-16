import React from "react";
import PropTypes from 'prop-types';
import {Item} from './Item';

//Stateless Component
export class Menu extends React.Component {
    render(){
        const items = this.props.content.map((item, index) => {
            return (<Item type={this.props.type} data={item} index={index} pickItem={this.props.pickItem} />);
        });

        return (
            <div>
                <h3 className="menu-title"> {this.props.type} </h3>
                <div className="menu-list"> {items} </div>
            </div>
        );
    }
}

Menu.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array,
    pickItem: PropTypes.function
}
