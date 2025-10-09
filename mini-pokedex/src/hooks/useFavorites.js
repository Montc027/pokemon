import { useState, useEffect } from 'react';

const KEY = 'mini-pokedex-favorites';

export default function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(KEY)) ?? [];
        } catch {
            return [];
        }
    });

    const [showOnlyFavs, setShowOnlyFavs] = useState(false);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (name) => {
        setFavorites(prev =>
            prev.includes(name)
                ? prev.filter(n => n !== name)
                : [...prev, name]
        );
    };

    return { favorites, toggleFavorite, showOnlyFavs, setShowOnlyFavs };
}