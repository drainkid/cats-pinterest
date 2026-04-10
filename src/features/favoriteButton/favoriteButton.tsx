import {useState} from 'react';
import styles from './favoriteButton.module.css';
import favoriteBorder from '../../assets/favorite_border.svg';
import favorite from '../../assets/favorite.svg';
import {toggleFavorite, useFavorites} from '../../hooks/useFavorites.ts';

type FavoriteButtonProps = {
        catId: string
        url: string
    }

    export const FavoriteButton = ({ catId, url }: FavoriteButtonProps) => {
        const [isHovered, setIsHovered] = useState(false)


        const isFavorite =  useFavorites(catId) as boolean || false

        const handleToggle = () => {
            toggleFavorite({ id: catId, url })
        }

        const showFilled = isFavorite || isHovered

        return (
            <button
                className={`${styles.button} ${isFavorite ? styles.active : ''}`}
                onClick={handleToggle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={showFilled ? favorite : favoriteBorder}
                    alt="favorite"
                />
            </button>
        )
    };