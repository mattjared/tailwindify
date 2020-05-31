import React from 'react';
import Output from './Output';
import Code from './Code';
import Picker from './Picker';
import tailwindConfig from './tailwind.js'
const spacingOptions = tailwindConfig.theme.spacing;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			paddingValue: "2"
		}
		this.onDropdownChange = this.onDropdownChange.bind(this);
	}
	onDropdownChange(shownValue) {
		this.setState({'paddingValue': shownValue})
	}
	render() {
		return (
			<div className="App">
				<Output paddingValue={this.state.paddingValue}/>
				<Code />
				<Picker space={spacingOptions} styleType="padding" onDropdownChange={this.onDropdownChange} selectedSize={this.state.paddingValue}/>
				<h3>{this.state.paddingValue}</h3>
			</div>
		);
	}
}

export default App;
