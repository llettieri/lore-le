interface Photo {
    src: string;
    alt: string;
}

interface PhotoDescription {
    title: string;
    description?: string;
}

export type { Photo, PhotoDescription };
