import React from 'react';
import Output from './Output';
import Code from './Code';
// import Picker from './Picker';
import TestComponent from './TestComponent';
import tailwindConfig from './tailwind.js'
const spacingOptions = tailwindConfig.theme.spacing;

function App() {
  return (
		<div className="App">
			<Output />
			<Code />
			{/* {Object.keys(spacingOptions).map(key =>
				<Picker styleType="padding" classUsed={key} value={spacingOptions[key]} />
			)} */}
			<TestComponent space={spacingOptions} styleType="padding" />

		</div>
  );
}

export default App;
