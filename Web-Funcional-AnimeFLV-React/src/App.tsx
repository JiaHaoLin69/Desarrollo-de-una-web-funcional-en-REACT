import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/andres/Header'; 
import Body from './componentes/fran/body'; 
import Footer from './componentes/jiahao/footer';
import AsideAnimes from './componentes/jiahao/aside'
import PaginaDetalle from './componentes/jiahao/rutas';


function App() {
  return (
    <BrowserRouter>
      <div className="layout-grid">
        {}
        <Header />
        {}
        <AsideAnimes />
        {/* AQUÍ ESTÁ EL CAMBIO: Área de contenido dinámico */}
        {}
        <div className="content-area">
          <Routes>
            {}
            <Route path="/" element={<Body />} />

            {/* Rutas Dinámicas: Cualquier cosa que empiece por /ver/ */}
            <Route path="/ver/:slug" element={<PaginaDetalle />} />
            
            {}
            <Route path="/login" element={<PaginaDetalle />} />
            <Route path="/directorio" element={<PaginaDetalle />} />
            <Route path="*" element={<PaginaDetalle />} /> {/* Comodín para todo lo demás */}
          </Routes>
        </div>

        {/* El Footer siempre visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;