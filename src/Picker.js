import React from 'react';

class Picker extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.props.onDropdownChange(event.target.value);
  }
	render() {
		const props = this.props;
		const tailwindObjectAsArray = Object.keys(props.space);
		return (
			<div className="Picker">
				<div className="w-full max-w-md bg-blue-800" >
					<label for={props.styleType}>Choose a {props.styleType} size:</label>
					<select id={props.styleType} onChange={this.handleChange}>
					{tailwindObjectAsArray.map((key) => {
						if (key === props.selectedSize) {
							return <option selected key={props.styleType+key} value={key}>{key}: {props.space[key]}</option>
						} else {
							return <option key={props.styleType+key} value={key}>{key}: {props.space[key]}</option>
						}
					})}
					</select>
				</div>
			</div>
		)
	}
}

export default Picker;
