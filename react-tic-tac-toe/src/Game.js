import React from 'react';

// Importing Other Classses
import Board from './Board.js'

export default class Game extends React.Component {
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