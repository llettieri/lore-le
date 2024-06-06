'use client';

import LoadingPage from '@/app/loading';
import { useImage } from '@/hooks/useImage';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export default function Gallery(): ReactElement {
    const { portraitImages, portraitInfo } = useImage();

    if (!portraitInfo) {
        return <LoadingPage />;
    }

    return (
        <div className="flex flex-row flex-wrap justify-center gap-5">
            {portraitImages.map((i) => {
                return (
                    <div
                        key={Math.random()}
                        className="group relative h-full transition ease-in-out hover:z-10 hover:scale-110 hover:drop-shadow-2xl hover:transition-transform hover:duration-200"
                    >
                        <h1 className="absolute top-3 hidden w-full select-none bg-mainBackground/[.6] p-3 text-white group-hover:block">
                            {portraitInfo[`nyc-${i.alt}`].title}
                        </h1>
                        <a href={i.src} target="_blank">
                            <Image
                                className="aspect-auto h-auto w-auto rounded-md"
                                src={i.src}
                                alt={i.alt}
                                width={300}
                                height={500}
                                title={portraitInfo[`nyc-${i.alt}`].title}
                                blurDataURL="/placeholder.svg"
                                placeholder="blur"
                            />
                        </a>
                        {portraitInfo[`nyc-${i.alt}`].description && (
                            <p className="absolute bottom-3 hidden w-full select-none bg-mainBackground/[.6] p-3 text-sm text-white group-hover:block">
                                {portraitInfo[`nyc-${i.alt}`].description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
