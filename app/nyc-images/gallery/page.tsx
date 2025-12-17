import { IMGIX_URL } from '@/lib/image-loader/imgix';
import {
    getPortraitImages,
    getPortraitImagesInfo,
} from '@/services/image-service';
import React, { ReactNode } from 'react';
import { ImgixImage } from '@/components/image';

export default async function Gallery(): Promise<ReactNode> {
    const images = getPortraitImages();
    const info = await getPortraitImagesInfo();

    return (
        <div className="flex flex-row flex-wrap justify-center gap-5">
            {images.map((i) => {
                return (
                    <div
                        key={i.src}
                        className="group relative h-full transition ease-in-out hover:z-10 hover:scale-110 hover:drop-shadow-2xl hover:transition-transform hover:duration-200"
                    >
                        <h3 className="bg-main-background/60 absolute top-3 hidden w-full p-3 text-white select-none group-hover:block">
                            {info[`nyc-${i.alt}`].title}
                        </h3>
                        <a href={`${IMGIX_URL}${i.src}?h=800`} target="_blank">
                            <ImgixImage
                                className="rounded-md object-contain"
                                src={i.src}
                                alt={i.alt}
                                width={300}
                                height={500}
                                title={info[`nyc-${i.alt}`].title}
                                blurDataURL="..."
                                placeholder="blur"
                            />
                        </a>
                        {info[`nyc-${i.alt}`].description && (
                            <p className="bg-main-background/60 absolute bottom-3 hidden w-full p-3 text-sm select-none group-hover:block">
                                {info[`nyc-${i.alt}`].description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
