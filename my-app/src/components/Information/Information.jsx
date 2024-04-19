import React, { Component } from 'react';
import { connect } from 'react-redux';
import InformationLayout from './InformationLayout';

class Information extends Component {
	render() {
		const { isGameEnded, isDraw, currentPlayer } = this.props;
		const info = () => {
			if (isGameEnded && !isDraw) {
				return `Победа: ${currentPlayer} 🏆`;
			} else if (isDraw) {
				return 'Ничья 😖';
			} else {
				return currentPlayer;
			}
		};

		const playerTurn = () => {
			if (isGameEnded || isDraw) {
				return '';
			} else {
				return 'Ход игрока:';
			}
		};
		return <InformationLayout playerTurn={playerTurn} info={info} />;
	}
}

const mapStateToProps = (state) => {
	return {
		isGameEnded: state.isGameEnded,
		isDraw: state.isDraw,
		currentPlayer: state.currentPlayer,
	};
};

export default connect(mapStateToProps)(Information);
