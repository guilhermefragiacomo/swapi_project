import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="pesquisa/personagens">
                        <a>Personagens</a>
                    </Link>
                </li>
                <li>
                    <Link to="pesquisa/veiculos">
                        <a>Veículos</a>
                    </Link>
                </li>
                <li>
                    <Link to="pesquisa/planetas">
                        <a>Planetas</a>
                    </Link>
                </li>
                <li>
                    <Link to="pesquisa/naves">
                        <a>Naves</a>
                    </Link>
                </li>
                <li>
                    <Link to="pesquisa/species">
                        <a>Espécies</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}