import {useState} from 'react';
import styles from './favoriteButton.module.css';
import favoriteBorder from '../../assets/favorite_border.svg';
import favorite from '../../assets/favorite.svg';

type FavoriteButtonProps = {
    catId: string
    url: string
}

export const FavoriteButton = ({ catId, url }: FavoriteButtonProps) => {

    const [isHovered, setIsHovered] = useState(false)

    const [isFavorite, setIsFavorite] = useState(() => {
        try {
            const storedFavorites = JSON.parse(localStorage.getItem('cats_favorites') || '[]')
            return storedFavorites.some((cat: { id: string, url: string }) => cat.id === catId)
        } catch {
            return false
        }
    })

    const toggleFavorite = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('cats_favorites') || '[]')

        let newFavorites

        if (isFavorite) {
            newFavorites = storedFavorites.filter((cat: { id: string, url: string }) => cat.id !== catId)
        } else {
            newFavorites = [...storedFavorites, { id: catId, url }]
        }

        localStorage.setItem('cats_favorites', JSON.stringify(newFavorites))
        setIsFavorite(!isFavorite)
    }

    const showFilled = isFavorite || isHovered
    
    return (
        <button
            className={`${styles.button} ${isFavorite ? styles.active : ''}`}
            onClick={toggleFavorite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={showFilled ? favorite : favoriteBorder}
                alt="favorite"
            />
        </button>
    );
};