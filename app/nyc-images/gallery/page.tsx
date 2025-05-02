import { IMGIX_URL } from '@/lib/imgix';
import {
    getPortraitImages,
    getPortraitImagesInfo,
} from '@/services/image-service';
import Image from 'next/image';
import React, { ReactNode } from 'react';

export default async function Gallery(): Promise<ReactNode> {
    const images = getPortraitImages();
    const info = await getPortraitImagesInfo();

    return (
        <div className="flex flex-row flex-wrap justify-center gap-5">
            {images.map((i) => {
                return (
                    <div
                        key={Math.random()}
                        className="group relative h-full transition ease-in-out hover:z-10 hover:scale-110 hover:drop-shadow-2xl hover:transition-transform hover:duration-200"
                    >
                        <h3 className="absolute top-3 hidden w-full select-none bg-mainBackground/[.6] p-3 text-white group-hover:block">
                            {info[`nyc-${i.alt}`].title}
                        </h3>
                        <a href={`${IMGIX_URL}${i.src}?h=800`} target="_blank">
                            <Image
                                className="aspect-auto h-auto w-auto rounded-md"
                                src={i.src}
                                alt={i.alt}
                                width={300}
                                height={500}
                                title={info[`nyc-${i.alt}`].title}
                                blurDataURL="/placeholder.svg"
                                placeholder="blur"
                            />
                        </a>
                        {info[`nyc-${i.alt}`].description && (
                            <p className="absolute bottom-3 hidden w-full select-none bg-mainBackground/[.6] p-3 text-sm group-hover:block">
                                {info[`nyc-${i.alt}`].description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
