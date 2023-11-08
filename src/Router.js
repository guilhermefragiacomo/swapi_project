import logo from 'assets/imagens/Star_Wars_Logo.png';
import Header from './componentes/header';
import Footer from './componentes/Footer';
import Nav from 'componentes/Nav';
import SearchBar from 'componentes/SearchBar';
import Filmes from 'componentes/Filmes';

export default function Router() {
    return (
        <>
            <Header><h1>Star Wars</h1></Header>
            <main>
                <Nav />
                <SearchBar />
                <Filmes />
            </main>
            <Footer />
        </>
    )
}