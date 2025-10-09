import { useCallback } from 'react';
import useFavorites from '../../hooks/useFavorites';
import styles from './FavoriteStar.module.scss';

export default function FavoriteStar({ name, className = '' }) {
    const { favorites, toggleFavorite } = useFavorites();

    const isFav = favorites.includes(name);

    const handle = useCallback(
        e => {
            e.stopPropagation(); // evita abrir detalle
            toggleFavorite(name);
        },
        [name, toggleFavorite]
    );

    return (
        <button
            onClick={handle}
            className={`${styles.star} ${className}`}
            aria-label={isFav ? 'Quitar favorito' : 'Añadir favorito'}
        >
            {isFav ? '⭐' : '☆'}
        </button>
    );
}
