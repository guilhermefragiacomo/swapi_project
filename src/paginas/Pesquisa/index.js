import NavItems from "componentes/NavItems";
import Item from "./Item";
import styles from "./Pesquisa.module.css";

export default function Pesquisa() {
    return (
        <section className={styles.section}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <NavItems />
        </section>
    );
}