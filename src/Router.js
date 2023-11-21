import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from 'paginas/inicio';
import Header from './componentes/header';
import Footer from './componentes/Footer';
import Nav from 'componentes/Nav';
import SearchBar from 'componentes/SearchBar';
import Pesquisa from 'paginas/Pesquisa';

export default function Router() {
    return (
        <BrowserRouter>
            <Header><h1>star wars</h1></Header>

            <main>
                <Nav />
                <SearchBar />

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="pesquisa" element={<Pesquisa />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    )
}