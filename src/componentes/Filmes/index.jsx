import "./Filmes.css"
import Cover from '../../componentes/Cover';

export default function Filmes(filmes) {
    filmes = filmes.filmes

    return (
        <>
            <img id="imageDarth" src="/imagens/star-wars-1680799242.jpg"/>
            <section id="filmes">
                {filmes.map(filme =>
                    <Cover key={filme.episode_id} id={filme.episode_id}cover={filme.url} details={filme}/>
                )}
            </section>
        </>
    )
}