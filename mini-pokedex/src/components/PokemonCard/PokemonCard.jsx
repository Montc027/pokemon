import styles from './PokemonCard.module.scss';
import FavoriteStar from '../FavoriteStar/FavoriteStar';

export default function PokemonCard({ pokemon, onClick }) {
    const { name, sprites, types, id } = pokemon;

    return (
        <article className={styles.card} onClick={onClick}>
            <header className={styles.header}>
                <img
                    src={sprites.front_default}
                    alt={name}
                    className={styles.sprite}
                    loading="lazy"
                />
                <span className={styles.number}>#{id.toString().padStart(3, '0')}</span>
            </header>

            <h3 className={styles.name}>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>

            <div className={styles.types}>
                {types.map(t => (
                    <span key={t} className={`${styles.tag} ${styles[t]}`}>
                        {t}
                    </span>
                ))}
            </div>

            <FavoriteStar name={name} className={styles.fav} />
        </article>
    );
}