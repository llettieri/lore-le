import { useImage } from '@/app/hooks/useImage';
import Image from 'next/image';
import React from 'react';

export default function Gallery(): React.ReactElement {
    const { images } = useImage();

    return (
        <div className="flex flex-row gap-5 justify-center flex-wrap">
            {images().map((i) => (
                <Image
                    className="rounded-md transition ease-in-out hover:scale-110 hover:transition-transform hover:duration-200 hover:drop-shadow-2xl "
                    key={Math.random()}
                    src={i.src}
                    alt={i.alt}
                    width={400}
                    height={200}
                />
            ))}
        </div>
    );
}
