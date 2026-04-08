import {useFetchData} from "../../hooks/useFetchData.ts";
import {CatCard} from "../../components/catCard";
import {CardGrid} from "../../components/cardGrid";
import {NavBar} from "../../components/navBar";
import type {CatImage} from "../../types.ts";

const MainPage = () => {


    const {data, isLoading, error} = useFetchData(30, 1)

    console.log(data)


    return (
        <>
            <NavBar/>
            {isLoading ? (
                <p style={{fontSize: '14px',
                    fontWeight: 400,
                    textAlign: 'center',
                    marginTop: '80px',
                    font: 'Roboto',
                    letterSpacing: '0.25px',
                }}> ...загружаем еще котиков...</p>
            )
            :  (<CardGrid>
                    {data.map((cat:CatImage) => (
                        <CatCard key={cat.id} url={cat.url} />
                    ))}
                </CardGrid>
                )
            }

            {error && <p>Error: {error.message}</p>}

        </>
    );

}
export default MainPage;