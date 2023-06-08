interface Photo {
    src: string;
    alt: string;
}

interface ImageHook {
    getWideImages: () => Photo[];
    getPortraitImages: () => Photo[];
}

const BASE_IMAGE_URL = 'https://lore-le.ch/media/photos/';

export const useImage = (): ImageHook => {
    const getWideImages = (): Photo[] => {
        const wideImages: Photo[] = [];

        for (let i = 1; i < 5; i++) {
            wideImages.push({
                src: `${BASE_IMAGE_URL}wide/nyc-${i}.png`,
                alt: i.toString(),
            });
        }

        return wideImages;
    };

    const getPortraitImages = (): Photo[] => {
        const wideImages: Photo[] = [];

        for (let i = 1; i < 20; i++) {
            wideImages.push({
                src: `${BASE_IMAGE_URL}portrait/nyc-${i}.png`,
                alt: i.toString(),
            });
        }

        return wideImages;
    };

    return { getWideImages, getPortraitImages };
};
