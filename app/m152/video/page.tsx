import React from 'react';

export default function M152Page(): React.ReactElement {
    return (
        <div className="flex justify-center items-center h-full">
            <video
                src="https://lore-le.ch/media/Video-M152.mp4"
                className="mx-20 my-16 w-4/5 max-w-7xl rounded-3xl"
                controls
                autoPlay
            />
        </div>
    );
}
