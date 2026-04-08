import {useQuery} from "@tanstack/react-query";
import {getCats} from "../api/api.ts";


export const useFetchData = (limit:number, page:number) => {

    return useQuery({
        queryFn: () => getCats(limit, page),
        queryKey: ['data', 'limit', 'page'],
    })

}