import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        const square = (
            <button className="square">
				
            </button>
        )
        return square
    }
}

class Board extends React.Component {
	
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

class Game extends React.Component {
	render() {
		const history = 'Start';
		const game = (
			<div className = "game">
				<div className = "gameboard">
					<Board />
				</div>
				<div className = "game-history">
					{history}
				</div>
			</div>
		)
		return game;
	}
}

// Rendering Board
ReactDOM.render(
	<Game />,
	document.getElementById('root')
)