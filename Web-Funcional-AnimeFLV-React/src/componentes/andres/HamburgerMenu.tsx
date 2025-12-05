import { useState, useEffect } from 'react';
import './styles.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement; // Aseguramos que e.target no sea null
      if (isOpen && target && !target.closest('.hamburger-menu') && !target.closest('.sidebar')) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <button className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <a href="/">INICIO</a>
        <a href="/directorio">DIRECTORIO ANIME</a>
        <a href="/login">LOGIN</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
