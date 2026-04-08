import styles from './catCard.module.css';
import {FavoriteButton} from "../../features/favoriteButton";
import React from "react";

type CatCardProps = {
    id: string
    url: string
}

export const CatCard = React.memo(({ id, url}: CatCardProps) => {

    return (
        <div className={styles.card}>
            <img
                className={styles.image}
                src={url}
                alt={'cats'}
                width={225}
                height={225}
                loading="lazy"
                decoding="async"
            />
            <FavoriteButton catId={id} url={url} />
        </div>
    )
})

