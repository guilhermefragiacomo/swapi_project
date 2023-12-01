import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import SearchBar from './componentes/SearchBar';
import Pesquisa from './paginas/Pesquisa';
import Filmes from './componentes/Filmes';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Router() {
  const [personagens, setPersonagens] = useState([
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] }
  ]);
  const [veiculos, setVeiculos] = useState([
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
  ])
  const [naves, setNaves] = useState([
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
  ])
  const [species, setSpecies] = useState([
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
  ])
  const [planetas, setPlanetas] = useState([
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] },
    { page: [] }
  ])
  const [geral, setGeral] = useState([
    ...personagens, 
    ...veiculos, 
    ...naves, 
    ...planetas,
    ...species
  ])

  const [objetosPagina, setObjetosPagina] = useState([]);
  const [filmes, setFilmes] = useState([

    {
      src: "/imagens/f1.jpeg",
      nome: "The Phantom Menace",
      ep: 1
    },
    {
      src: "/imagens/f2.jpeg",
      nome: "Attack of the Clones",
      ep: 2
    },
    {
      src: "/imagens/f3.jpeg",
      nome: "Revenge of the Sith",
      ep: 3
    },
    {
      src: "/imagens/f4.jpeg",
      nome: "A New Hope",
      ep: 4
    },
    {
      src: "/imagens/f5.jpeg",
      nome: "The Empire Strikes Back",
      ep: 5
    },
    {
      src: "/imagens/f6.jpeg",
      nome: "Return of the Jedi",
      ep: 6
    }
  ])

  async function getFilmes() {
    let counts;
    try {
      const response = await axios.get(`https://swapi.dev/api/films`);
      const data = response.data.results;
      counts = response.data.count;

      //altera a url de cada filme para um id
      let i = 0;
      data.forEach(filme => {
        filme.url = filmes[i].src;
        i++;
      });

      setFilmes(data);

      localStorage.setItem("films", JSON.stringify(data));

      console.log(filmes);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    try {
      if (JSON.parse(localStorage.getItem("films"))[0].characters.length > 1) {
        setFilmes(JSON.parse(localStorage.getItem("films")));
      }
      if (JSON.parse(localStorage.getItem("people"))[0].page.length != 0) {
        setPersonagens(JSON.parse(localStorage.getItem("people")));
      }
      if (JSON.parse(localStorage.getItem("vehicles"))[0].page.length != 0) {
        setVeiculos(JSON.parse(localStorage.getItem("vehicles")));
      }
      if (JSON.parse(localStorage.getItem("planets"))[0].page.length != 0) {
        setPlanetas(JSON.parse(localStorage.getItem("planets")));
      }
      if (JSON.parse(localStorage.getItem("starships"))[0].page.length != 0) {
        setNaves(JSON.parse(localStorage.getItem("starships")));
      }
      if (JSON.parse(localStorage.getItem("species"))[0].page.length != 0) {
        setSpecies(JSON.parse(localStorage.getItem("species")));
      }
    } catch (error) {
      console.log("Os dados ainda não estão guardados no localstorage");
      getFilmes();
    }

  }, []);

  return (
      <BrowserRouter>

          <div id="opac" ></div>
          <Header><h1>star wars</h1></Header>

          <Nav />
          <SearchBar personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves} objetosPagina={objetosPagina} setObjetosPagina={setObjetosPagina} setGeral={setGeral} geral={geral} species={species}/>
          
          <main>

            <Routes>
              <Route path="/" element={<Filmes filmes={filmes} />} />
              <Route path="/pesquisa/personagens" element={<Pesquisa tipo="people" lista={personagens} setLista={setPersonagens} listaPagina={objetosPagina} setListaPagina={setObjetosPagina} personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves} species={species}/>} />
              <Route path="/pesquisa/veiculos" element={<Pesquisa tipo="vehicles" lista={veiculos} setLista={setVeiculos} listaPagina={objetosPagina} setListaPagina={setObjetosPagina} personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves} species={species}/>} />
              <Route path="/pesquisa/planetas" element={<Pesquisa tipo="planets" lista={planetas} setLista={setPlanetas} listaPagina={objetosPagina} setListaPagina={setObjetosPagina} personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves} species={species}/>} />
              <Route path="/pesquisa/naves" element={<Pesquisa tipo="starships" lista={naves} setLista={setNaves} listaPagina={objetosPagina} setListaPagina={setObjetosPagina} personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves} species={species}/>} />
              <Route path="/pesquisa/species" element={<Pesquisa tipo="species" lista={species} setLista={setSpecies} listaPagina={objetosPagina} setListaPagina={setObjetosPagina} personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves} species={species}/>} />
              <Route path="/pesquisa/geral" element={<Pesquisa tipo="geral" lista={geral} setLista={setGeral} listaPagina={objetosPagina} setListaPagina={setObjetosPagina} personagens={personagens} veiculos={veiculos} planetas={planetas} naves={naves} species={species}/>} />
            </Routes>
          </main>

          <Footer />
        
      </BrowserRouter>
  )
}

export default Router
