import "./SearchBar.css"
import search from "../../assets/icones/search-icon.png";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ personagens, veiculos, planetas, naves, objetosPagina, setObjetosPagina, setGeral, geral }) {
    const navigate = useNavigate();
    let currentUrl;

    function pesquisar(evento) {
        let string;
        if (evento === String(evento)) {
            string = evento;
        } else {
            string = evento.target.value;
        }
        let arrayTemp = [];

        console.log(string);

        let arrayTemp2 = [...personagens, ...veiculos, ...naves, ...planetas];
        setGeral(arrayTemp2);

        currentUrl = String(window.location.href).slice(45);

        console.log(currentUrl);
        
        if (currentUrl == "" || currentUrl == "geral") {
            arrayTemp2.forEach(element => {
                element.page.forEach(el => {
                    if (String(el.name).toLowerCase().includes(string)) {
                        arrayTemp.push(el);
                    }
                })
            });
        } else {
            if (currentUrl == "personagens") {
                personagens.forEach(element => {
                    element.page.forEach(el => {
                        if (String(el.name).toLowerCase().includes(string)) {
                            arrayTemp.push(el);
                        }
                    })
                });
            } else {
                if (currentUrl == "veiculos") {
                    veiculos.forEach(element => {
                        element.page.forEach(el => {
                            if (String(el.name).toLowerCase().includes(string)) {
                                arrayTemp.push(el);
                            }
                        })
                    });
                } else {
                    if (currentUrl == "planetas") {
                        planetas.forEach(element => {
                            element.page.forEach(el => {
                                if (String(el.name).toLowerCase().includes(string)) {
                                    arrayTemp.push(el);
                                }
                            })
                        });
                    } else {
                        naves.forEach(element => {
                            element.page.forEach(el => {
                                if (String(el.name).toLowerCase().includes(string)) {
                                    arrayTemp.push(el);
                                }
                            })
                        });
                    }
                }
            } 
        }
        setObjetosPagina(arrayTemp);
        console.log(arrayTemp);
    }


    
    return (
        <div id="search">
            <div>
                <img id="searchicon" src={search} alt="" onClick={() => {
                    let arrayTemp2 = [...personagens, ...veiculos, ...naves, ...planetas];
                    setGeral(arrayTemp2);

                    currentUrl = String(window.location.href).slice(45);
                    
                    console.log(window.location.href);
                    console.log(currentUrl);
                    
                    let barra = document.getElementById('barra');
                    pesquisar(barra.value);

                    if (currentUrl == "" ) {
                        navigate("/pesquisa/geral");
                    }
                }}/>
                <input id="barra" type="text" onChange={evento => pesquisar(evento)} />
            </div>
        </div>
    )
}