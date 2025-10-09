import { useState, useEffect } from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar({ value, onChange, placeholder = 'Buscar Pokémon...' }) {
    const [text, setText] = useState(value);

    // Debounce 300 ms
    useEffect(() => {
        const t = setTimeout(() => onChange(text), 300);
        return () => clearTimeout(t);
    }, [text, onChange]);

    // Sincronizar si el padre cambia `value` externamente
    useEffect(() => setText(value), [value]);

    return (
        <div className={styles.wrapper}>
            <span className={styles.icon}>🔍</span>
            <input
                className={styles.input}
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder={placeholder}
                aria-label="Buscar Pokémon"
            />
        </div>
    );
}