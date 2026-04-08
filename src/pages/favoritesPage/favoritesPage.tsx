import {NavBar} from "../../components/navBar";
import {CardGrid} from "../../components/cardGrid";
import {CatCard} from "../../components/catCard";
import type {CatImage} from "../../types.ts";

const FavoritesPage = () => {

    const storedFavorites = JSON.parse(localStorage.getItem('cats_favorites') || '[]')


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