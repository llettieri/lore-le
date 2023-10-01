import { useImage } from '@/hooks/useImage';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export default async function Gallery(): Promise<ReactElement> {
    const { getPortraitImages, getPortraitInfo } = useImage();
    const info = await getPortraitInfo();
    return (
        <div className="flex flex-row flex-wrap justify-center gap-5">
            {getPortraitImages().map((i) => {
                return (
                    <div
                        key={Math.random()}
                        className="group relative h-full transition ease-in-out hover:z-10 hover:scale-110 hover:drop-shadow-2xl hover:transition-transform hover:duration-200"
                    >
                        <h1 className="absolute top-3 hidden w-full select-none bg-mainBackground/[.6] p-3 text-white group-hover:block">
                            {info[`nyc-${i.alt}`].title}
                        </h1>
                        <a href={i.src} target="_blank">
                            <Image
                                className="aspect-auto rounded-md"
                                src={i.src}
                                alt={i.alt}
                                width={400}
                                height={200}
                                title={info[`nyc-${i.alt}`].title}
                                loading="lazy"
                                blurDataURL="/placeholder.svg"
                                placeholder="blur"
                            />
                        </a>
                        {info[`nyc-${i.alt}`].description && (
                            <p className="absolute bottom-3 hidden w-full select-none bg-gray-600/[.6] p-3 text-sm text-white group-hover:block">
                                {info[`nyc-${i.alt}`].description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
