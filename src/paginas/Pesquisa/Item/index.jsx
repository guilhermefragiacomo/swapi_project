import styles from './index.module.css'
import heart from '../../../assets/icones/white_heart.png';

export default function Item({ pers, veiculos, naves, planetas }) {
    return (
        <>
            <div className={styles.div} onClick={() => {
                document.getElementById(`personagem_${pers.url}`).style.display='block';
            }}>
                <div className={styles.desc}>
                    <h3 className={styles.nome}>{pers.name}</h3>
                    <p>Filmes: {pers.films.map(film =>
                        film.charAt(film.length - 2) + ", "
                    )}</p>
                    <img className={styles.imagem}/>
                </div>
            </div>
            <div id={`personagem_${pers.url}`} className={styles.modal}>
                <span className={styles.span} onClick={() => {
                    document.getElementById(`personagem_${pers.url}`).style.display='none';
                }}>&times;</span>
                <div>
                    <h1>{pers.name}</h1>
                    <h2>Filmes: {pers.films.map(film =>
                        film.charAt(film.length - 2) + ", "
                    )}</h2>
                    <p>ID: {pers.url}</p>
                    <p></p>
                </div>
            </div>
        </>
    );
}