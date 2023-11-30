import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="pesquisa?var=personagens">
                        <a>Personagens</a>
                    </Link>
                </li>
                <li>
                    <Link to="pesquisa?var=veiculos">
                        <a>Veículos</a>
                    </Link>
                </li>
                <li>
                    <Link to="pesquisa?var=planetas">
                        <a>Planetas</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}