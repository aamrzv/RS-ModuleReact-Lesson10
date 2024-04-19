import React, { Component } from 'react';

class FieldLayout extends Component {
	render() {
		const { field, btnClick } = this.props;
		return (
			<div className="flex flex-wrap justify-between content-between h-80">
				{field.map(({ id, name, style_win }) => (
					<span
						className={`${style_win ? 'text-red-600 bg-red-200' : 'text-gray-800 bg-cyan-400'} flex items-center justify-center w-24 h-24 font-bold text-lg border-2 border-transparent rounded-md cursor-pointer`}
						key={id}
						onClick={() => btnClick(id)}
					>
						{name}
					</span>
				))}
			</div>
		);
	}
}

export default FieldLayout;
