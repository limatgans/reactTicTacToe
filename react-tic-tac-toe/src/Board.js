import React from 'react';

// Importing Other Classses
import Square from './Square.js'

// Importing Utils
import calculateWinner from './utils/calculateWinner'

export default class Board extends React.Component {
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         isXNext: true
    //     }
    // }
    
	renderSquare(i) {
        return (
            <Square 
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
            />
        );
    }

    
    handleClick(index) {
        let squares = [...this.props.squares]
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = this.props.isXNext? 'X' : 'O'
        const isXNext = !this.props.isXNext
        this.setState({squares, isXNext})
    }

	render() {

		const board = (
			<div>
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