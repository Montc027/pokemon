import { useState, useMemo } from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import useFavorites from '../../hooks/useFavorites';
import PokemonCard from '../PokemonCard/PokemonCard';
import SearchBar from '../SearchBar/SearchBar';
import TypeFilter from '../TypeFilter/TypeFilter';
import Spinner from '../Spinner/Spinner';
import styles from './PokemonList.module.scss';

export default function PokemonList({ onSelect }) {
    const { list, loading, error } = usePokemon();
    const { favorites, toggleFavorite, showOnlyFavs, setShowOnlyFavs } = useFavorites();
    const [search, setSearch] = useState('');
    const [selectedType, setSelectedType] = useState('');


    const filtered = useMemo(() => {
        let aux = list;

        if (showOnlyFavs) aux = aux.filter(p => favorites.includes(p.name));

        if (search)
            aux = aux.filter(p =>
                p.name.toLowerCase().includes(search.toLowerCase())
            );

        if (selectedType)
            aux = aux.filter(p => p.types.includes(selectedType));

        return aux;
    }, [list, search, selectedType, showOnlyFavs, favorites]);

    if (loading) return <Spinner />;
    if (error) return <p className={styles.error}>❌ {error}</p>;

    return (
        <section className={styles.container}>
            <div className={styles.toolbar}>
                <SearchBar value={search} onChange={setSearch} />
                <TypeFilter
                    types={[...new Set(list.flatMap(p => p.types))]}
                    selected={selectedType}
                    onChange={setSelectedType}
                />
                <label className={styles.favToggle}>
                    <input
                        type="checkbox"
                        checked={showOnlyFavs}
                        onChange={e => setShowOnlyFavs(e.target.checked)}
                    />{' '}
                    ⭐ Solo favoritos
                </label>
            </div>

            {filtered.length === 0 && (
                <p className={styles.empty}>No se encontraron Pokémons 😔</p>
            )}

            <div className={styles.grid}>
                {filtered.map(p => (
                    <PokemonCard
                        key={p.name}
                        pokemon={p}
                        onClick={() => onSelect(p.name)}
                    />
                ))}
            </div>
        </section>
    );
}