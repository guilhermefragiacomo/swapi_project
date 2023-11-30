import { Link } from "react-router-dom";
import "./header.css";
import user from "../../assets/icones/icons8-user-48.png";
export default function Header({ children }) {
    return (
        <Link to="/">
            <header>
                <a id="logo" >{children}</a>
                <a id="user" ><img id="user" src={user} alt="User logo" /></a>
            </header>
        </Link>
    )
};