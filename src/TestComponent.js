import React, { Component } from 'react';

class TestComponent extends Component {
	render() {
		const props = this.props;
		return (
			<div className="TestComponent">
				<div className="w-full max-w-md bg-blue-800" >
					<label for={props.styleType}>Choose a {props.styleType} size:</label>
					<select id={props.styleType}>
						{Object.keys(props.space).map(key =>
							<option>{key}: {props.space[key]}</option>
						)}
					</select>
				</div>
			</div>
		)
	}
}

export default TestComponent;
