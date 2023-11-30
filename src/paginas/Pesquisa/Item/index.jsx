import styles from './index.module.css'
import heart from '../../../assets/icones/white_heart.png';

export default function Item({ pers }) {

    return (
        <div className={styles.div}>
            <div className={styles.flex}>
                <img className={styles.image} />
                <div className={styles.desc}>
                    <h3>{pers.name}</h3>
                    <p>Filmes: {pers.films.map(film =>
                        film.charAt(film.length - 2) + ", "
                    )}</p>
                </div>
            </div>
            <img src={heart} className={styles.icone} />
        </div>
    );
}