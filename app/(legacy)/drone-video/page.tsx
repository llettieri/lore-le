import React, { ReactNode } from 'react';
import Player from 'next-video/player';
import MediaThemeYt from '@player.style/yt/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Drone | Lorenzo Lettieri',
    description: 'Look at this beautiful view recorded with my personal drone!',
    keywords: ['lore-le', 'personal', 'drone', 'landscape', 'view', 'video'],
};

export default function DroneVideo(): ReactNode {
    const manifestUrl =
        'https://lore-le.ch/media/streams/drone-video/manifest.mpd';

    return (
        <div className="flex items-center sm:h-full sm:justify-center">
            <div
                id="player-wrapper"
                className="aspect-video min-h-7 w-full max-w-7xl overflow-hidden sm:w-4/5 sm:rounded-3xl md:mx-20 md:my-16"
            >
                <Player
                    src={manifestUrl}
                    theme={MediaThemeYt}
                    style={{
                        '--media-primary-color': 'white',
                        '--media-secondary-color': 'var(--color-primary)',
                        '--media-accent-color': 'var(--color-secondary)',
                        height: '100%',
                    }}
                    controls
                />
            </div>
        </div>
    );
}
