import React from 'react';

// Importing Other Classses
import Square from './Square.js'

export default class Board extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null)
        }
    }
    
	renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={()=> this.handleClick(i)} 
            />
        );
    }
    
    handleClick(index) {
        let squares = [...this.state.squares]
        squares[index] = 'X'
        this.setState({squares})
    }

	render() {
		const status = "Player is: X"

		const board = (
			<div>
				<div className = "status">{status}</div>
				<div className = "board-row">
					{this.renderSquare(1)}
					{this.renderSquare(2)}
					{this.renderSquare(3)}
				</div>
				<div className = "board-row">
					{this.renderSquare(4)}
					{this.renderSquare(5)}
					{this.renderSquare(6)}
				</div>
				<div className = "board-row">
					{this.renderSquare(7)}
					{this.renderSquare(8)}
					{this.renderSquare(9)}
				</div>
			</div>
		)
		return board;
	}
}