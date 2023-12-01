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
                <div className={desc}>
                    <h1>{pers.name}</h1>
                    <h2>Filmes: {pers.films.map(film =>
                        film.charAt(film.length - 2) + ", "
                    )}</h2>
                    <p>ID: {pers.url}</p>
                    <p>{pers.crew == undefined ? "" : `Tripulação: ${pers.crew}`}</p>
                    <p>{pers.cargo_capacity == undefined ? "" : `Capacidade: ${pers.cargo_capacity}`}</p>
                    <p>{pers.height == undefined ? "" : `Peso: ${pers.height}`}</p>
                    <p>{pers.mass == undefined ? "" : `Massa: ${pers.mass}`}</p>
                    <p>{pers.hair_color == undefined ? "" : `Cor de Cabelo: ${pers.hair_color}`}</p>
                    <p>{pers.skin_color == undefined ? "" : `Cor de Pele: ${pers.skin_color}`}</p>
                    <p>{pers.birth_year == undefined ? "" : `Ano de Nascimento: ${pers.birth_year}`}</p>
                    <p>{pers.gender == undefined ? "" : `Gênero: ${pers.gender}`}</p>
                    <p>{pers.model == undefined ? "" : `Modelo: ${pers.model}`}</p>
                    <p>{pers.manufacturer == undefined ? "" : `Fabricador: ${pers.manufacturer}`}</p>
                    <p>{pers.cost_in_credits == undefined ? "" : `Custo: ${pers.cost_in_credits}`}</p>
                    <p>{pers.length == undefined ? "" : `Comprimento: ${pers.length}`}</p>
                    <p>{pers.max_atmosphering_speed == undefined ? "" : `Velocidade Máxima da Atmosfera: ${pers.max_atmosphering_speed}`}</p>
                    <p>{pers.passengers == undefined ? "" : `Passageiros: ${pers.passengers}`}</p>
                    <p>{pers.consumables == undefined ? "" : `Consumíveis: ${pers.consumables}`}</p>
                    <p>{pers.starship_class == undefined ? "" : `Classe de Nave: ${pers.starship_class}`}</p>
                    <p>{pers.rotation_period == undefined ? "" : `Periodo de Rotação: ${pers.rotation_period}`}</p>
                    <p>{pers.orbital_period == undefined ? "" : `Periodo de Orbita: ${pers.orbital_period}`}</p>
                    <p>{pers.diameter == undefined ? "" : `Diâmetro: ${pers.diameter}`}</p>
                    <p>{pers.climate == undefined ? "" : `Clima: ${pers.climate}`}</p>
                    <p>{pers.gravity == undefined ? "" : `Gravidade: ${pers.gravity}`}</p>
                    <p>{pers.terrain == undefined ? "" : `Terreno: ${pers.terrain}`}</p>
                    <p>{pers.surface_water == undefined ? "" : `Água Superficial: ${pers.surface_water}`}</p>
                    <p>{pers.population == undefined ? "" : `População: ${pers.population}`}</p>
                </div>
            </div>
        </>
    );
}