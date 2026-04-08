import {useFetchData} from "../../hooks/useFetchData.ts";
import {CatCard} from "../../components/catCard";
import {CardGrid} from "../../components/cardGrid";
import {NavBar} from "../../components/navBar";
import type {CatImage} from "../../types.ts";
import {Loader} from "../../components/loader";
import {useInfiniteScroll} from "../../hooks/useInfiniteScroll.ts";

const MainPage = () => {

    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useFetchData(30)


    const observerTarget = useInfiniteScroll({
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    })

    const allCats = data ? data.pages.flat() : [];

    return (
        <>
            <NavBar/>

            {isLoading && (
                <Loader>
                    ... загружаем котиков ...
                </Loader>
            )}

            {!isLoading && allCats.length > 0 && (
                <CardGrid>
                    {allCats.map((cat: CatImage) => (
                        <CatCard key={cat.id} id={cat.id} url={cat.url} />
                    ))}
                </CardGrid>
            )}

            <div ref={observerTarget} style={{ height: "5px" }} />

            {isFetchingNextPage && (
                <Loader>
                    ... загружаем еще котиков ...
                </Loader>
            )}

            {error && <p>Error: {error.message}</p>}

        </>
    );

}
export default MainPage;