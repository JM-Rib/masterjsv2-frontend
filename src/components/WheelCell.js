import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Models from './Models.tsx';

function WheelCell(props) {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate(props.redirectTo); 
    };

    return (
        <div
            className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center bg-radial cursor-pointer" // Added cursor-pointer class
            style={props.style}
            onClick={handleClick} // Handle the click event for navigation
        >
            <Models modelPath={props.model}></Models>
        </div>
    );
}

export default WheelCell;
