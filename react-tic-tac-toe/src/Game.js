import React from 'react';

// Importing Other Classses
import Board from './Board.js'

// Importing Utils
import calculateWinner from './utils/calculateWinner'

export default class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  history: [{
			squares: Array(9).fill(null),
		  }],
		  stepNumber: 0,
		  xIsNext: true,
		};
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);		
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
		  return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
		  history: history.concat([{
			squares: squares,
		  }]),
		  stepNumber: history.length,
		  xIsNext: !this.state.xIsNext,
		});
	}

	jumpTo(step) {
		this.setState({
		  stepNumber: step,
		  xIsNext: (step % 2) === 0,
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		let status;

		// Function for caluculating whether Match is drawn
		const isTied = (squares=[]) => squares.every((square) => square !== null)
		const isSquaresNull =current.squares.findIndex((value) => value === null) === -1
		
		// Changing Status
		if (winner) {
            status = `Winner is: ${winner}`
        } else if( isTied(current.squares) && isSquaresNull) {
            status = `Matched is Tied`;
        } else {
            status = `Player is: ${this.state.xIsNext? 'X' : 'O'}`;
		}

		// Loading Moves based on history
		const moves = history.map((step, move) => {
			const desc = move ?
			  'Go to move #' + move :
			  'Go to game start';
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
			  	</li>
			);
		});
	
		// Rendering Game
		const game = (
			<div className = "game">
				<div className = "gameboard">
					<Board 
            			squares={current.squares}
            			onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className = "game-history">
					<div className = "status">
						{status}
					</div>
					<ol>{moves}</ol>
				</div>
			</div>
		)
		return game;
	}
}