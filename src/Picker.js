import React from 'react';

const Picker = (props) => (
	<div className="Picker">
		<div className="w-full max-w-md bg-blue-800" >
			<label for={props.styleType+props.hey}>Choose a {props.styleType} size:</label>
			<select id={props.styleType+props.hey}>
				<option>{props.classUsed}: {props.value}</option>
			</select>
		</div>
	</div>
)

export default Picker;
