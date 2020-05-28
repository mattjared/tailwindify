import React from 'react';

class Picker extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '2' }
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
  }
	render() {
		const props = this.props;
		return (
			<div className="Picker">
				<div className="w-full max-w-md bg-blue-800" >
					<label for={props.styleType}>Choose a {props.styleType} size:</label>
					<select value={this.state.value} id={props.styleType} onChange={this.handleChange}>
						{Object.keys(props.space).map(key =>
							<option key={props.styleType+key} value={key}>{key}: {props.space[key]}</option>
						)}
					</select>
				</div>
			</div>
		)
	}
}

export default Picker;
