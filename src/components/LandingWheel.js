import React from 'react';
import WheelCell from './WheelCell.js';
import { OBJECTS } from '../utils/constants.js';

function LandingWheel(props) {
    const radius = 200; // Radius of the octagon
    const centerX = 270; // Center X position
    const centerY = 270; // Center Y position
    const models = [OBJECTS.HEART, OBJECTS.HEART, OBJECTS.HEART, OBJECTS.HEART, OBJECTS.HEART, OBJECTS.HEART, OBJECTS.BLOOD, OBJECTS.HEART];

    return (
        <div className="relative z-80 w-[570px] h-[570px] bg-gray-100 mx-auto rounded-full">
            {models.map((model, index) => {
                const angle = (Math.PI / 4) * index; // Angle in radians
                const x = centerX + radius * Math.cos(angle) - 50; // Adjust for width
                const y = centerY + radius * Math.sin(angle) - 50; // Adjust for height

                return (
                    <WheelCell
                        key={index}
                        model={model}
                        style={{
                            position: 'absolute',
                            left: `${x}px`,
                            top: `${y}px`,
                            zIndex: 1 
                        }}
                    />
                );
            })}
        </div>
    );
}

export default LandingWheel;
