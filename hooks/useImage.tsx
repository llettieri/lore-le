import { useQuery } from '@tanstack/react-query';

interface Photo {
    src: string;
    alt: string;
}

interface ImageHook {
    getWideImages: () => Photo[];
    getPortraitImages: () => Photo[];
    portraitInfo?: Record<string, PhotoDescription>;
}

interface PhotoDescription {
    title: string;
    description?: string;
}

const BASE_IMAGE_URL = 'https://lore-le.ch/media/photos/';

const useImage = (): ImageHook => {
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

    const { data: portraitInfo } = useQuery<Record<string, PhotoDescription>>({
        queryKey: ['portrait-info'],
        queryFn: () =>
            fetch(`${BASE_IMAGE_URL}portrait/info.json`).then((r) => r.json()),
    });

    return {
        getWideImages,
        getPortraitImages,
        portraitInfo,
    };
};

export { useImage };
