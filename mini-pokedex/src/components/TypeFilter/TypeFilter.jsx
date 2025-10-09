import cls from 'clsx';
import styles from './TypeFilter.module.scss';

export default function TypeFilter({ types, selected, onChange }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <button
                        className={cls(styles.tag, { [styles.active]: !selected })}
                        onClick={() => onChange('')}
                    >
                        Todos
                    </button>
                </li>

                {types.map(t => (
                    <li key={t}>
                        <button
                            className={cls(styles.tag, styles[t], { [styles.active]: selected === t })}
                            onClick={() => onChange(t)}
                        >
                            {t}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}