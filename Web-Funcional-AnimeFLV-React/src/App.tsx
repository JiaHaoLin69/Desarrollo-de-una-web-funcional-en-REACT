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
            {}
            <Route path="/" element={<Body />} />

            {}
            <Route path="/ver/:slug" element={<PaginaDetalle />} />
            <Route path="/anime/:slug" element={<PaginaDetalle />} /> 
            {}
            {}
            {}
            <Route path="*" element={<PaginaError />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;