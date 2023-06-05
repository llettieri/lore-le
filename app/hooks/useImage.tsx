interface Photo {
    src: string;
    alt: string;
}

export const useImage = () => {
    const images = (): Photo[] => {
        const images: Photo[] = [];

        for (let i = 1; i < 26; i++) {
            images.push({
                src: `https://lore-le.ch/media/photos/${i}.JPG`,
                alt: i.toString(),
            });
        }

        return images;
    };

    return { images };
};
