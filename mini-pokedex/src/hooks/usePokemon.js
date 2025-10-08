import { useEffect, useState } from 'react';
import { getFirst50Pokemon, getPokemonDetail } from '../api/pokeapi';


export function usePokemon(enabled = true) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(enabled);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!enabled) return;             

        async function fetchAll() {
            try {
                setLoading(true);
                const basic = await getFirst50Pokemon();
                const detailed = await Promise.all(
                    basic.map(p => getPokemonDetail(p.name))
                );
                setList(detailed);
            } catch (err) {
                setError(err?.message || 'Error al cargar Pokémons');
            } finally {
                setLoading(false);
            }
        }

        fetchAll();
    }, [enabled]);

    return { list, loading, error };
}


export function usePokemonDetail(idOrName) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOne() {
            try {
                setLoading(true);
                const detail = await getPokemonDetail(idOrName);
                setData(detail);
            } catch (err) {
                setError(err?.message || 'Pokémon no encontrado');
            } finally {
                setLoading(false);
            }
        }

        if (idOrName) fetchOne();
    }, [idOrName]);

    return { data, loading, error };
}