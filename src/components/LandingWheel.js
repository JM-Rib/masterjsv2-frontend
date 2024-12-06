import React from 'react';
import WheelCell from './WheelCell.js';
import { BODY_PARTS } from '../utils/constants.js';

function LandingWheel(props) {
    const radius = 200; // Radius of the hexagon
    const centerX = 270; // Center X position
    const centerY = 270; // Center Y position
    const models = [BODY_PARTS.DNA, BODY_PARTS.BONE, BODY_PARTS.BRAIN, BODY_PARTS.BLOOD, BODY_PARTS.HEART, BODY_PARTS.LUNGS]; // 6 models for hexagon

    return (
        <div className="relative z-80 w-[570px] h-[570px] bg-gray-100 mx-auto rounded-full">
            {models.map((model, index) => {
                const angle = (Math.PI / 3) * index; // Angle in radians for hexagon (60 degrees)
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
                            zIndex: 1,
                        }}
                    />
                );
            })}
        </div>
    );
}

export default LandingWheel;
