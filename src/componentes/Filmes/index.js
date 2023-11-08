import "./Filmes.css"
import Cover from 'componentes/Cover';
import f1 from "assets/imagens/f1.jpeg";
import f2 from "assets/imagens/f2.jpeg";
import f3 from "assets/imagens/f3.jpeg";
import f4 from "assets/imagens/f4.jpeg";
import f5 from "assets/imagens/f5.jpeg";
import f6 from "assets/imagens/f6.jpeg";

export default function Filmes() {
    return (
        <div id="filmes">
            <Cover cover={f1} desc="Ep 1 - The Phantom Menace" />
            <Cover cover={f2} desc="Ep 2 - Attack of the Clones" />
            <Cover cover={f3} desc="Ep 3 - Revenge of the Sith" />
            <Cover cover={f4} desc="Ep 4 - A New Hope" />
            <Cover cover={f5} desc="Ep 5 - The Empire Strikes Back" />
            <Cover cover={f6} desc="Ep 6 - Return of the Jedi" />
        </div>
    )
}