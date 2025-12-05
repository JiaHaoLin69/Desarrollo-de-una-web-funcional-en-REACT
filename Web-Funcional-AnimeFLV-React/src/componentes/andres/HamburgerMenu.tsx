import { useState, useEffect } from 'react';
import './styles.css';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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
      {/* Botón hamburguesa */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* Texto MENU */}
      <span className="hamburger-menu-text">MENU</span>

      {/* Menú lateral */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>

        {/* 1️⃣ BUSCADOR */}
        <InputGroup className="sidebar-search">
          <Form.Control placeholder="Buscar..." />
          <Button className="search-btn">🔍</Button>
        </InputGroup>

        {/* 2️⃣ LOGIN */}
        <a className="sidebar-login" href="/login">LOGIN</a>

        {/* 3️⃣ INICIO */}
        <a href="/">INICIO</a>

        {/* 4️⃣ DIRECTORIO ANIME */}
        <a href="/directorio">DIRECTORIO ANIME</a>

      </div>
    </div>
  );
};

export default HamburgerMenu;
