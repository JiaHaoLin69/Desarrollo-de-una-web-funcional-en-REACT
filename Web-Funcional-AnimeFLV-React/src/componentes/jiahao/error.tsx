import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaginaError: React.FC = () => {
  const location = useLocation();

  const rutaIntentada = location.pathname.replace('/', '').replace(/-/g, ' ').toUpperCase();

  return (
    <div>
      <h1>404</h1>
      <h2>PÁGINA NO ENCONTRADA</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Lo sentimos, la sección <strong>"{rutaIntentada || 'DESCONOCIDA'}"</strong> no existe.
      </p>
      
      <Link to="/" className='error-inicio'>
        VOLVER AL INICIO
      </Link>
    </div>
  );
};

export default PaginaError;