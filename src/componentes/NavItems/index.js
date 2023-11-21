import styles from "./NavItems.module.css";
import arrow from "assets/icones/white_chevron.png";

export default function NavItems() {
    return (
        <div className={styles.div}>
            <img src={arrow} className={styles.inverted} />
            <img src={arrow} className={styles.invertedDouble} />
            <img src={arrow} className={styles.inverted} />
            <p className={styles.number}>1</p>
            <img src={arrow} className={styles.arrow} />
            <img src={arrow} className={styles.arrow} />
            <img src={arrow} className={styles.double} />
        </div>
    );
}