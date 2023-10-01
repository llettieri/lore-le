import React, { ReactNode } from 'react';

export default function M152Page(): ReactNode {
    return (
        <div className="flex h-full items-center justify-center">
            <video
                src="https://lore-le.ch/media/Video-M152.mp4"
                className="mx-20 my-16 w-4/5 max-w-7xl rounded-3xl"
                controls
                autoPlay
            />
        </div>
    );
}
