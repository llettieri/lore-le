import Image from 'next/image';
import React from 'react';

interface Photo {
    src: string;
    alt: string;
}

const images: Photo[] = [];

export default function GalleryPage(): React.ReactElement {
    for (let i = 1; i < 26; i++) {
        images.push({
            src: `https://lore-le.ch/media/photos/${i}.JPG`,
            alt: i.toString(),
        });
    }

    return (
        <div className="flex flex-row gap-5 justify-center flex-wrap">
            {images.map((i) => (
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
