import React, { Component } from 'react';
import Information from './Information/Information';
import Field from './Field/Field';

class GameLayout extends Component {
	render() {
		const { state, handleRestartClick } = this.props;
		return (
			<div className="mx-auto mt-16 px-8 w-96">
				<button
					className={`w-full text-base bg-cyan-400 px-2 py-2 text-black border border-solid border-a6791f rounded cursor-pointer no-underline ${state.isGameEnded || state.isDraw ? 'animate-glowing-slow' : ''}`}
					onClick={() => handleRestartClick()}
				>
					Начать заново
				</button>
				<Information />
				<Field />
			</div>
		);
	}
}

export default GameLayout;
