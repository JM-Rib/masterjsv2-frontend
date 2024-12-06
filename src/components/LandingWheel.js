import React from 'react';
import WheelCell from './WheelCell.js';
import { BODY_PARTS, NATURE } from '../utils/constants.js';
import { APP_ROUTES } from '../utils/constants.js';
import Models from './Models.tsx';

function LandingWheel(props) {
    const radius = 200; // Radius of the hexagon
    const centerX = 270; // Center X position
    const centerY = 270; // Center Y position
    const cells = [
        {
            page: APP_ROUTES.BIODIVERSITE,
            model: BODY_PARTS.DNA,
        },
        {
            page: APP_ROUTES.CORAIL,
            model: BODY_PARTS.BONE,
        },
        {
            page: APP_ROUTES.BIOSPHERE,
            model: BODY_PARTS.BRAIN,
        },
        {
            page: APP_ROUTES.COURANTS,
            model: BODY_PARTS.BLOOD,
        },
        {
            page: APP_ROUTES.POMPE_THERMOHALINE,
            model: BODY_PARTS.HEART,
        },
        {
            page: APP_ROUTES.PHYTOPLANCTON,
            model: BODY_PARTS.LUNGS,
        }
    ]; // hexagon

    return (
        <div className="relative z-80 w-[570px] h-[570px] bg-gray-100 mx-auto rounded-full">
            {cells.map((cell, index) => {
                const angle = (Math.PI / 3) * index; 
                const x = centerX + radius * Math.cos(angle) - 50; 
                const y = centerY + radius * Math.sin(angle) - 50; 

                return (
                    <WheelCell
                        key={index+1}
                        model={cell.model}
                        redirectTo={cell.page}
                        style={{
                            position: 'absolute',
                            left: `${x}px`,
                            top: `${y}px`,
                            zIndex: 1,
                        }}
                    />
                );
            })}
{/*                 <Models 
                    modelPath={NATURE.SUNRISE}
                    style={{
                        position: 'relative',
                        zIndex: 1,
                    }}
                /> */}
        </div>
    );
}

export default LandingWheel;
