import "./Filmes.css"
import Cover from '../../componentes/Cover';

export default function Filmes(filmes) {
    filmes = filmes.filmes

    return (
        <section id="filmes">
            {filmes.map(filme =>
                <Cover key={filme.ep} cover={filme.src} desc={`Ep ${filme.ep} - ${filme.nome}`} />
            )}
        </section>
    )
}