import { ImageLoaderProps } from 'next/image';

export const IMGIX_URL = 'https://lore-le.imgix.net/';

export default function imgixLoader({
    src,
    width,
    quality,
}: ImageLoaderProps): string {
    const url = new URL(`${IMGIX_URL}${src}`);
    const params = url.searchParams;

    params.set('auto', params.getAll('auto').join(',') || 'format');
    params.set('fit', params.get('fit') || 'max');
    params.set('w', params.get('w') || width.toString());
    params.set('q', (quality || 50).toString());

    return url.href;
}
