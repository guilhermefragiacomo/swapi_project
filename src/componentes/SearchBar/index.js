import "./SearchBar.css"
import search from "assets/icones/search-icon.png";

export default function SearchBar() {
    return (
        <div id="search">
            <div>
                <img id="searchicon" src={search} alt="" />
                <input type="text" />
            </div>
        </div>
    )
}