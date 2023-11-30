import { useState, useEffect } from "react";
import Item from "./Item";
import styles from "./Pesquisa.module.css";
import axios from 'axios';

export default function Pesquisa({ personagens, setPersonagens, personagensPagina, setPersonagensPagina}) {
    async function getPosts(page) {
        if (personagens[page-1].page.length == 0) {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
                const data = response.data.results;
                const maxPage = response.data.count;

                let arraytemp = [];
                arraytemp = personagens;
                arraytemp[page-1].page = data;
                setPersonagens(arraytemp);

                data.forEach(person => {
                    let id_people = person.url.charAt(person.url.length - 3) + person.url.charAt(person.url.length - 2);
                    if (id_people.charAt(0) == '/') {
                        id_people = id_people[1];
                    }
                    person.url = id_people;
                });

                getPagina(data, page);

            } catch (error) {
                console.log(error);
            }
        } else {
            getPagina(personagens[page-1].page, page);
        }
    };

    const getPagina = (allPosts, page) => {
        let arrayTemp = [];
        for (let i = 0; i < (page != 9 ? 10 : 2); i++) {
            arrayTemp = [...arrayTemp, allPosts[i]];
        }
        setPersonagensPagina(arrayTemp);
    }

    useEffect(() => {
        if (personagens[0].page.length == 0) {
            getPosts(1);
        }
    }, []);

    return (
        <section className={styles.section}>

            {personagensPagina.map(personagem =>
                <Item key={personagem.name} pers={personagem} />
            )}

            <nav className={styles.nav2}>
                <a className={styles.a2} onClick={() => getPosts(1)}>1</a>
                <a className={styles.a2} onClick={() => getPosts(2)}>2</a>
                <a className={styles.a2} onClick={() => getPosts(3)}>3</a>
                <a className={styles.a2} onClick={() => getPosts(4)}>4</a>
                <a className={styles.a2} onClick={() => getPosts(5)}>5</a>
                <a className={styles.a2} onClick={() => getPosts(6)}>6</a>
                <a className={styles.a2} onClick={() => getPosts(7)}>7</a>
                <a className={styles.a2} onClick={() => getPosts(8)}>8</a>
                <a className={styles.a2} onClick={() => getPosts(9)}>9</a>
            </nav>
        </section>
    );
}