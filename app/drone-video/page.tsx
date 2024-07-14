import React, { ReactNode } from 'react';

export const metadata = {
    title: 'Drone | Lorenzo Lettieri',
    description: 'Look at this beautiful view recorded with my personal drone!',
    keywords: ['lore-le', 'personal', 'drone', 'landscape', 'view', 'video'],
};

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
