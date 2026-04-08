import {useEffect, useRef} from "react";

type UseInfiniteScrollOptions = {
    hasNextPage: boolean | undefined;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
};

export const useInfiniteScroll = ({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
}: UseInfiniteScrollOptions) => {

    const observerTarget = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Если элемент появился на экране, есть следующая страница и мы сейчас ничего не грузим
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 0.1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }

        return () => observer.disconnect()

    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    return observerTarget
};