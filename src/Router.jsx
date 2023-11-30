import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import SearchBar from './componentes/SearchBar';
import Pesquisa from './paginas/Pesquisa';
import Filmes from './componentes/Filmes';
import { useState } from 'react';

function Router() {

  const [personagens, setPersonagens] = useState([
    {page: []},
    {page: []},
    {page: []},
    {page: []},
    {page: []},
    {page: []},
    {page: []},
    {page: []},
    {page: []}
  ]);
  const [personagensPagina, setPersonagensPagina] = useState([]);
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

  return (
    <BrowserRouter>
      <Header><h1>star wars</h1></Header>

      <main>
        <Nav />
        <SearchBar />

        <Routes>
          <Route path="/" element={<Filmes filmes={filmes} />} />
          <Route path="pesquisa" element={<Pesquisa personagens={personagens} setPersonagens={setPersonagens} personagensPagina={personagensPagina} setPersonagensPagina={setPersonagensPagina}/>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default Router
