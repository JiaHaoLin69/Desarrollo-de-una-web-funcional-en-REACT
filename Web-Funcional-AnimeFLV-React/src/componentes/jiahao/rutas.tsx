import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const PaginaDetalle: React.FC = () => {
  const { slug } = useParams(); 
  const location = useLocation();

  const titulo = slug ? slug.replace(/-/g, ' ').toUpperCase() : location.pathname.replace('/', '').toUpperCase();

  return (
    <div style={{ padding: '40px', color: '#333' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        Estás viendo: <span style={{ color: '#fa8b42' }}>{titulo || "PÁGINA"}</span>
      </h1>
      
      <div style={{ 
        backgroundColor: '#eee', 
        height: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: '8px'
      }}>
        <p style={{ color: '#888' }}>Aquí iría el reproductor de video o el contenido de {titulo}</p>
      </div>
    </div>
  );
};

export default PaginaDetalle;