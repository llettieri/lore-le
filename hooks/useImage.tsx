import { useQuery } from '@tanstack/react-query';

interface Photo {
    src: string;
    alt: string;
}

interface ImageHook {
    wideImages: Photo[];
    portraitImages: Photo[];
    portraitInfo?: Record<string, PhotoDescription>;
}

interface PhotoDescription {
    title: string;
    description?: string;
}

const BASE_IMAGE_URL = 'https://lore-le.ch/media/photos/';

const useImage = (): ImageHook => {
    const { data: wideImages } = useQuery<Photo[]>({
        initialData: [],
        queryKey: ['wide-images'],
        queryFn: () => {
            const images: Photo[] = [];

            for (let i = 1; i < 5; i++) {
                images.push({
                    src: `${BASE_IMAGE_URL}wide/nyc-${i}.png`,
                    alt: i.toString(),
                });
            }

            return images;
        },
    });

    const { data: portraitImages } = useQuery<Photo[]>({
        initialData: [],
        queryKey: ['portrait-images'],
        queryFn: () => {
            const images: Photo[] = [];

            for (let i = 1; i < 20; i++) {
                images.push({
                    src: `${BASE_IMAGE_URL}portrait/nyc-${i}.png`,
                    alt: i.toString(),
                });
            }

            return images;
        },
    });

    const { data: portraitInfo } = useQuery<Record<string, PhotoDescription>>({
        queryKey: ['portrait-info'],
        queryFn: () =>
            fetch(`${BASE_IMAGE_URL}portrait/info.json`).then((r) => r.json()),
    });

    return {
        wideImages,
        portraitImages,
        portraitInfo,
    };
};

export { useImage };
