import { Photo, PhotoDescription } from '@/models/Photo';

const BASE_IMAGE_URL = 'https://lore-le.ch/media/photos';

const getWideImages = (): Photo[] => {
    const images: Photo[] = [];

    for (let i = 1; i < 5; i++) {
        images.push({
            src: `wide/nyc-${i}.png`,
            alt: i.toString(),
        });
    }

    return images;
};

const getPortraitImages = (): Photo[] => {
    const images: Photo[] = [];

    for (let i = 1; i < 20; i++) {
        images.push({
            src: `portrait/nyc-${i}.png`,
            alt: i.toString(),
        });
    }

    return images;
};

const getPortraitImagesInfo = async (): Promise<
    Record<string, PhotoDescription>
> => await fetch(`${BASE_IMAGE_URL}/portrait/info.json`).then((r) => r.json());

export { getWideImages, getPortraitImages, getPortraitImagesInfo };
