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
      {}
      <button className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {}
      <span className="hamburger-menu-text">MENU</span>

      {}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>

        {}
        <InputGroup className="sidebar-search">
          <Form.Control placeholder="Buscar..." />
          <Button className="search-btn">🔍</Button>
        </InputGroup>

        {}
        <a className="sidebar-login" href="/login">LOGIN</a>

        {}
        <a href="/">INICIO</a>

        {}
        <a href="/directorio">DIRECTORIO ANIME</a>

      </div>
    </div>
  );
};

export default HamburgerMenu;
