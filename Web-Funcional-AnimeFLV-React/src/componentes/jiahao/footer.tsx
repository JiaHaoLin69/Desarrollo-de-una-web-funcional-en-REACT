import React from 'react';
import './footer.css'

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`flv-footer ${className}`}>
      
      {}
      <div className="flv-footer-left">
        <p className="flv-disclaimer">
          <strong>Anime Online</strong> - Ningún vídeo se encuentra alojado en nuestros servidores.
        </p>

        <nav className="flv-links-container">
          <a href="#">Descargar videos de Tiktok</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Sobre AnimeFLV</a>
          <a href="#">hentaila</a>
        </nav>
      </div>

      {}
      <a href="#" className="flv-social-btn" aria-label="Facebook">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          stroke="none"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>

    </footer>
  );
};

export default Footer;