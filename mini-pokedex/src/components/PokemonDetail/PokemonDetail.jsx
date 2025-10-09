import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePokemonDetail } from '../../hooks/usePokemon';
import Spinner from '../Spinner/Spinner';
import FavoriteStar from '../FavoriteStar/FavoriteStar';
import styles from './PokemonDetail.module.scss';

export default function PokemonDetail() {
    const { name } = useParams();
    const navigate = useNavigate();
    const { data, loading, error } = usePokemonDetail(name);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);

    if (loading) return <Spinner />;
    if (error) return <p className={styles.error}>{error}</p>;
    if (!data) return null;

    const { sprites, types, weight, height, id } = data;

    return (
        <section className={styles.container}>
            <button className={styles.back} onClick={() => navigate(-1)}>
                ← Volver
            </button>

            <div className={styles.card}>
                <header className={styles.header}>
                    <img
                        src={sprites.front_default}
                        alt={name}
                        className={styles.sprite}
                    />
                    <FavoriteStar name={name} className={styles.fav} />
                </header>

                <h1 className={styles.name}>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                    <span className={styles.number}>#{id.toString().padStart(3, '0')}</span>
                </h1>

                <div className={styles.types}>
                    {types.map(t => (
                        <span key={t} className={`${styles.tag} ${styles[t]}`}>
                            {t}
                        </span>
                    ))}
                </div>

                <dl className={styles.stats}>
                    <div>
                        <dt>Peso</dt>
                        <dd>{(weight / 10).toFixed(1)} kg</dd>
                    </div>
                    <div>
                        <dt>Altura</dt>
                        <dd>{(height / 10).toFixed(1)} m</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}