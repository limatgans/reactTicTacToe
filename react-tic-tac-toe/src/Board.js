import React from 'react';

// Importing Other Classses
import Square from './Square.js'

export default class Board extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
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
        squares[index] = this.state.isXNext? 'X' : 'O'
        const isXNext = !this.state.isXNext
        this.setState({squares, isXNext})
    }

	render() {
		const status = `Player is: ${this.state.isXNext? 'X' : 'O'}`

		const board = (
			<div>
				<div className = "status">{status}</div>
				<div className = "board-row">
                    {this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className = "board-row">
                    {this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className = "board-row">
                    {this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
		return board;
	}
}