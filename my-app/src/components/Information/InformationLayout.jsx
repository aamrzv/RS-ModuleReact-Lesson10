import React, { Component } from 'react';

class InformationLayout extends Component {
	render() {
		const { playerTurn, info } = this.props;
		return (
			<div className="shadow-inner bg-zinc-200 px-4 py-2 rounded-md my-2  flex items-center">
				<h4 className="pr-2">{playerTurn()}</h4>
				<span>{info()}</span>
			</div>
		);
	}
}

export default InformationLayout;
