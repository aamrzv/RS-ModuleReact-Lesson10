import React, { Component } from 'react';
import { connect } from 'react-redux';
import FieldLayout from './FieldLayout';
import { checkDraw, checkWin } from '../../utils';

class Field extends Component {
	handleBtnClick = (id) => {
		const { dispatch, field, isGameEnded, currentPlayer } = this.props;
		const newField = [...field];
		let moveIsMade = false;

		if (!field[id].name && !isGameEnded) {
			newField[id].name = currentPlayer;
			moveIsMade = true;
		}

		const gameEnded = checkWin(newField) || checkDraw(newField);
		const isDraw = checkDraw(newField);
		const nextPlayer = moveIsMade && !checkWin(newField) ? (currentPlayer === 'X' ? 'O' : 'X') : currentPlayer;

		dispatch({
			type: 'setCurrentPlayer',
			payload: { newField, isGameEnded: gameEnded, isDraw, currentPlayer: nextPlayer },
		});
	};

	render() {
		const { field } = this.props;
		return <FieldLayout field={field} btnClick={this.handleBtnClick} />;
	}
}

const mapStateToProps = (state) => {
	return {
		field: state.field,
		isGameEnded: state.isGameEnded,
		currentPlayer: state.currentPlayer,
	};
};

export default connect(mapStateToProps)(Field);
