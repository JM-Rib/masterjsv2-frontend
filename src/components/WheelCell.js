import React from 'react';
import Models from './Models.tsx';

function WheelCell(props) {
	return (
        <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center " style={props.style}>
            <Models modelPath={props.model}></Models>
        </div>
    );
}

export default WheelCell;