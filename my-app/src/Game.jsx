import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeField } from './utils';
import GameLayout from './components/GameLayout';

class Game extends Component {
	handleRestartClick = () => {
		const field = initializeField();
		console.log(field);
		this.props.setRestartGame(field);
	};

	render() {
		return (
			<div>
				<GameLayout state={this.props.state} handleRestartClick={this.handleRestartClick} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setRestartGame: (field) => dispatch({ type: 'setRestartGame', payload: { field } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
