import styles from './index.module.css'
import heart from 'assets/icones/white_heart.png';

export default function Item() {
    return (
        <div className={styles.div}>
            <div className={styles.flex}>
                <img className={styles.image} />
                <div className={styles.desc}>
                    <h3>Nome</h3>
                    <p>Detalhes</p>
                </div>
            </div>
            <img src={heart} className={styles.icone} />
        </div>
    );
}