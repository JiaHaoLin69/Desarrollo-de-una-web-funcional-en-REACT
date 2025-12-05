import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/andres/Header'; 
import Body from './componentes/fran/body'; 
import Footer from './componentes/jiahao/footer';
import AsideAnimes from './componentes/jiahao/aside'
import PaginaDetalle from './componentes/jiahao/rutas';
import PaginaError from './componentes/jiahao/error';

function App() {
  return (
    <BrowserRouter>
      <div className="layout-grid">
        
        <Header />
        
        <AsideAnimes />
        
        <div className="content-area">
          <Routes>
            {/* 1. Ruta Inicio */}
            <Route path="/" element={<Body />} />

            {/* 2. Rutas para ver Animes */}
            <Route path="/ver/:slug" element={<PaginaDetalle />} />
            <Route path="/anime/:slug" element={<PaginaDetalle />} /> 

            {/* --- ELIMINADO: La línea que causaba el conflicto --- */}
            {/* <Route path="*" element={<PaginaDetalle />} />  <-- ESTA LÍNEA SOBRABA */}

            {/* 3. COMODÍN PARA ERROR 404 (Ahora sí atrapará lo que no sea inicio ni anime) */}
            <Route path="*" element={<PaginaError />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;