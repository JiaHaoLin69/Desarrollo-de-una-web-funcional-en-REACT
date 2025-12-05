import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import HamburgerMenu from "./HamburgerMenu";  // Importamos el nuevo menú
import { Link } from 'react-router-dom';
import "./styles.css";
import logo from "./logo.png";

function TypesExample() {
  return (
    <div className="header-container">
      {/* LOGO */}
      <a href="/" className="header-logo">
        <img src={logo} alt="animeflv-logo" />
      </a>

      {/* Menú hamburguesa - solo se muestra en pantallas pequeñas */}
      <HamburgerMenu />

      {/* Menú principal */}
      <div className="header-menu-group">
        <Button className="header-btn">INICIO</Button>
        <Button className="header-btn">DIRECTORIO ANIME</Button>

        {/* BUSCADOR */}
        <InputGroup className="header-search">
          <Form.Control placeholder="Buscar..." />
          <Button className="search-btn">🔍</Button>
        </InputGroup>

        {/* LOGIN */}
        <Button className="header-login">LOGIN</Button>
      </div>
    </div>
  );
}

export default TypesExample;
