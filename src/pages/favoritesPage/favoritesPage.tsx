import {NavBar} from "../../components/navBar";
import {CardGrid} from "../../components/cardGrid";
import {CatCard} from "../../components/catCard";
import type {CatImage} from "../../types.ts";
import {useFavorites} from "../../hooks/useFavorites.ts";

const FavoritesPage = () => {

    const storedFavorites = useFavorites() as CatImage[]

    return (
        <div>
            <NavBar />
            <CardGrid>
                {storedFavorites.map((cat:CatImage) => (
                    <CatCard key={cat.id}  id={cat.id} url={cat.url} />
                ))}
            </CardGrid>

        </div>
    );
};

export default FavoritesPage;