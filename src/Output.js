import React from 'react';

function Output(props) {
	let classNames = "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline ";
	classNames += `p-${props.paddingValue}`;
  return (
    <div className="Output" >
    	<div className="w-full max-w-md bg-blue-800" >
        <div>visual output here: </div>
				<button className={classNames} type="button">Sign In</button>
    	</div>
    </div>
  );
}

export default Output;
