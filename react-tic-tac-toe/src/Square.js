import React from 'react';

export default class Square extends React.Component {
    
    render() {
        const square = (
            <button className="square" onClick={() => this.props.onClick()}>
				{this.props.value}
            </button>
        );
        return square;
    }
}