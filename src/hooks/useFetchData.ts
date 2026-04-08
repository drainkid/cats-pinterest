import {useInfiniteQuery} from "@tanstack/react-query";
import {getCats} from "../api/api.ts";

export const useFetchData = (limit: number) => {
    return useInfiniteQuery({
        queryKey: ['cats', 'infinite'],

        queryFn: ({ pageParam }) => getCats(limit, pageParam),

        initialPageParam: 1,

        getNextPageParam: (lastPage, allPages) => {
            if (lastPage && lastPage.length === limit) {
                return allPages.length + 1
            }
            return undefined
        },
    })
};