import { usePathname } from 'next/navigation';

interface PathHook {
    currentPath: string[];
    isActive: (path: string) => boolean;
}

export const usePath = (): PathHook => {
    const pathname = usePathname();

    const splitPathName = pathname.slice(1);
    const currentPath = splitPathName.split('/');

    const isActive = (path: string): boolean => {
        const parent = currentPath[0];
        const slicedPath = path.slice(1);

        return (
            (parent.includes(slicedPath) && slicedPath.length !== 0) ||
            slicedPath === parent
        );
    };

    return {
        currentPath,
        isActive,
    };
};
