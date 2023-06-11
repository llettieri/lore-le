import { useImage } from '@/hooks/useImage';
import Image from 'next/image';
import React from 'react';

export default async function Gallery(): Promise<React.ReactElement> {
    const { getPortraitImages, getPortraitInfo } = useImage();
    const info = await getPortraitInfo();
    return (
        <div className="flex flex-row gap-5 justify-center flex-wrap">
            {getPortraitImages().map((i) => {
                return (
                    <div
                        key={Math.random()}
                        className="group relative transition ease-in-out hover:scale-110 hover:transition-transform hover:duration-200 hover:drop-shadow-2xl"
                    >
                        <h1 className="absolute top-3 p-3 bg-gray-700/[.6] text-white w-full hidden group-hover:block">
                            {info[`nyc-${i.alt}`].title}
                        </h1>
                        <Image
                            className="aspect-auto rounded-md"
                            src={i.src}
                            alt={i.alt}
                            width={400}
                            height={200}
                            title={info[`nyc-${i.alt}`].title}
                        />
                        {info[`nyc-${i.alt}`].description && (
                            <p className="absolute bottom-3 p-3 bg-gray-600/[.6] text-white w-full hidden group-hover:block">
                                {info[`nyc-${i.alt}`].description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
