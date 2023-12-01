import { useEffect } from "react";
import Item from "./Item";
import styles from "./Pesquisa.module.css";
import axios from 'axios';

let counts, maxPage;

export default function Pesquisa({ lista, setLista, listaPagina, setListaPagina, tipo, personagens, veiculos, planetas, naves }) {
    async function getPosts(page, mudarPagina) {
        //caso o tamanho da lista da página for 0, não tem informações, a api é chamada
        if (lista[page - 1].page.length == 0) {
            try {
                const response = await axios.get(`https://swapi.dev/api/${tipo}/?page=${page}`);
                const data = response.data.results;
                counts = response.data.count;
                maxPage = counts % 10 == 0 ? counts / 10 : counts / 10 + 1;

                //altera a url de cada personagem para um id
                data.forEach(person => {
                    let id_people = person.url.charAt(person.url.length - 3) + person.url.charAt(person.url.length - 2);
                    if (id_people.charAt(0) == '/') {
                        id_people = id_people[1];
                    }
                    person.url = id_people;
                });


                //altera a lista para uma lista com todas as informações da lista antiga, mais as informações recém obtidas da api
                let arraytemp = [];
                arraytemp = lista;
                arraytemp[page - 1].page = data;
                setLista(arraytemp);

                if (mudarPagina) {
                    getPagina(data, page);
                }

                if (tipo == "people") {
                    localStorage.setItem("people", JSON.stringify(lista));
                } else {
                    if (tipo == "vehicles") {
                        localStorage.setItem("vehicles", JSON.stringify(lista));
                    } else {
                        if (tipo == "planets") {
                            localStorage.setItem("planets", JSON.stringify(lista));
                        } else {
                            localStorage.setItem("starships", JSON.stringify(lista));
                        }
                    }
                }

            } catch (error) {
                console.log(error);
            }
        } else {
            if (mudarPagina) {
                //caso as informações da página {page} já estejam carregadas, a página é carregada sem a chamada da api
                getPagina(lista[page - 1].page, page);
            }
        }
    };

    const getPagina = (allPosts, page) => {
        let arrayTemp = [];
        console.log(allPosts);
        if (tipo == "geral") {
            //coloca as informações obtidas da api na lista de objetos pagina
            for (let i = 0; i < allPosts.lenght; i++) {
                arrayTemp = [...arrayTemp, allPosts[i].page];
            }
        } else {
            //coloca as informações obtidas da api na lista de objetos pagina
            for (let i = 0; i < allPosts.length; i++) {
                arrayTemp = [...arrayTemp, allPosts[i]];
            }
        }
        setListaPagina(arrayTemp);
    }

    useEffect(() => {
        if (tipo == "geral") {
            //console.log(lista);
            //getPagina(lista, 1);
        } else {
            try {
                maxPage = JSON.parse(localStorage.getItem(tipo)).length;
            } catch (error) {
                console.log("Os dados ainda não estão guardados no localstorage");
            }
            //chama a api e mostra as informações na tela, caso a array já possua as informações, não mostra na tela
            if (lista[0].page.length == 0) {
                getPosts(1, 1);
                for (let i = 2; i < lista.length + 1; i++) {
                    getPosts(i, 0);
                }
            } else {
                getPagina(lista[0].page, 1);
            }
        }
        
    }, [tipo]);

    return (
        <>
            <section className={styles.section}>

                {listaPagina.map(personagem =>
                    <Item key={personagem.name} pers={personagem} personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves}/>
                    //chama o card de cada objeto dentro da lista de objetos pagina
                )}
            </section>
            <nav className={styles.nav2}>
                {(() => {
                    let navs = [];

                    //mostra cada numero da pagina, com a funcao que chama as informações da página
                    for (let i = 1; i < parseInt(maxPage) + 1; i++) {
                        navs.push(<a key={i} className={styles.a2} onClick={() => getPosts(i, 1)}>{i}</a>)
                    }

                    return navs;
                })()}
            </nav>
        </>
    );
}