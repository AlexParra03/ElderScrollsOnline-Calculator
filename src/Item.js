import React from 'react';
import PropTypes from 'prop-types';

export class Item extends React.Component {
    render(){
        let content = []
        for(let key in this.props.data){
            content.push( <p> {key} : {this.props.data[key]} </p> )
        }

        return <div className="menuItem"> {content} </div>;
    }
}

Item.propTypes = {
    data: PropTypes.object
}
