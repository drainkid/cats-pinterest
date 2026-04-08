import styles from './catCard.module.css';

type CatCardProps = {
  url: string
}

export const CatCard = ({ url}: CatCardProps) => {

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
        </div>
    )
}

