import React from 'react';

// Importing Other Classses
import Square from './Square.js'

export default class Board extends React.Component {
	
	renderSquare(i) {
		return <Square />
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