import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import About from './pages/About/About';
import Editar from './pages/Editar/Editar';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navbar melhorado com classes CSS */}
        <header className="main-header">
          <h1 className="logo">📌 TaskManager</h1>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Meus Lembretes</Link>
            <Link to="/novo" className="nav-link btn-destaque">Novo Lembrete</Link>
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </nav>
        </header>

        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo" element={<Cadastro />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/editar/:id" element={<Editar />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;