interface PlatformHook {
    isTablet: RegExpMatchArray | null;
    isMobile: RegExpMatchArray | null;
    isWeb: boolean;
}

export const usePlatform = (): PlatformHook => {
    /**@deprecated**/
    const isTablet = navigator.userAgent.match(/iPad/);
    const isMobile = navigator.userAgent.match(
        /Android|Blackberry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i,
    );
    const isWeb = !isMobile;

    return {
        isMobile,
        isTablet,
        isWeb,
    };
};
