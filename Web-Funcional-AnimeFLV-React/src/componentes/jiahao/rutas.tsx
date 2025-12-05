import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './rutas.css'

const PaginaDetalle: React.FC = () => {
  const { slug } = useParams(); 
  const location = useLocation();

  const titulo = slug ? slug.replace(/-/g, ' ').toUpperCase() : location.pathname.replace('/', '').toUpperCase();

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        Estás viendo: <span style={{ color: '#fa8b42' }}>{titulo || "PÁGINA"}</span>
      </h1>
      
      <div className="div-ruta">
        <p style={{ color: '#888' }}>Aquí iría el reproductor de video o el contenido de {titulo}</p>
      </div>
    </div>
  );
};

export default PaginaDetalle;