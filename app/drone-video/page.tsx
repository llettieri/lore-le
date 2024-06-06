import React, { ReactNode } from 'react';

export default function DroneVideo(): ReactNode {
    return (
        <div className="flex items-center sm:h-full sm:justify-center">
            <video
                src="https://lore-le.ch/media/Video-M152.mp4"
                className="w-full max-w-7xl sm:w-4/5 sm:rounded-3xl md:mx-20 md:my-16"
                controls
                autoPlay
            />
        </div>
    );
}
