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
                    <p>{pers.crew == undefined ? "" : `Tripulação ${pers.crew}`}</p>
                    <p>{pers.cargo_capacity == undefined ? "" : `Capacidade ${pers.cargo_capacity}`}</p>
                    <p>{pers.height == undefined ? "" : `${pers.height}`}</p>
                    <p>{pers.mass == undefined ? "" : `${pers.mass}`}</p>
                    <p>{pers.hair_color == undefined ? "" : `${pers.hair_color}`}</p>
                    <p>{pers.skin_color == undefined ? "" : `${pers.skin_color}`}</p>
                    <p>{pers.birth_year == undefined ? "" : `${pers.birth_year}`}</p>
                    <p>{pers.gender == undefined ? "" : `${pers.gender}`}</p>
                    <p>{pers.model == undefined ? "" : `${pers.model}`}</p>
                    <p>{pers.manufacturer == undefined ? "" : `${pers.manufacturer}`}</p>
                    <p>{pers.cost_in_credits == undefined ? "" : `${pers.cost_in_credits}`}</p>
                    <p>{pers.length == undefined ? "" : `${pers.length}`}</p>
                    <p>{pers.max_atmosphering_speed == undefined ? "" : `${pers.max_atmosphering_speed}`}</p>
                    <p>{pers.passengers == undefined ? "" : `${pers.passengers}`}</p>
                    <p>{pers.consumables == undefined ? "" : `${pers.consumables}`}</p>
                    <p>{pers.starship_class == undefined ? "" : `${pers.starship_class}`}</p>
                </div>
            </div>
        </>
    );
}