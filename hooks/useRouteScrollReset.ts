// hooks/useRouteScrollReset.ts
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ✅ correct for app dir
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useRouteScrollReset = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Since next/navigation router has no .events,
        // you need to attach this logic inside a layout or
        // manually re-trigger ScrollTrigger.refresh() in useEffect of each page

        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
};

export default useRouteScrollReset;
