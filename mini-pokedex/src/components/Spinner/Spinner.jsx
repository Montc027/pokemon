import styles from './Spinner.module.scss';

export default function Spinner({ size = 48 }) {
    return (
        <div className={styles.overlay}>
            <div
                className={styles.spinner}
                style={{ width: size, height: size }}
                aria-label="Cargando"
            />
        </div>
    );
}