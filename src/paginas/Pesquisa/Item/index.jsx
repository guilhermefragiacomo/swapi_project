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
                    <p>{`Tripulação ${pers.crew}`}</p>
                    <p>{`Capacidade ${pers.cargo_capacity}`}</p>
                    <p>{`${pers.height}`}</p>
                    <p>{`${pers.mass}`}</p>
                    <p>{`${pers.hair_color}`}</p>
                    <p>{`${pers.skin_color}`}</p>
                    <p>{`${pers.birth_year}`}</p>
                    <p>{`${pers.gender}`}</p>
                    <p>{`${pers.model}`}</p>
                    <p>{`${pers.manufacturer}`}</p>
                    <p>{`${pers.cost_in_credits}`}</p>
                    <p>{`${pers.length}`}</p>
                    <p>{`${pers.max_atmosphering_speed}`}</p>
                    <p>{`${pers.passengers}`}</p>
                    <p>{`${pers.consumables}`}</p>
                    <p>{`${pers.starship_class}`}</p>
                    "model": "CR90 corvette",
                    "manufacturer": "Corellian Engineering Corporation",
                    "cost_in_credits": "3500000",
                    "length": "150",
                    "max_atmosphering_speed": "950",
                    "crew": "30-165",
                    "passengers": "600",
                    "cargo_capacity": "3000000",
                    "consumables": "1 year",
                    "hyperdrive_rating": "2.0",
                    "MGLT": "60",
                    "starship_class": "corvette",
                </div>
            </div>
        </>
    );
}