import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import HamburgerMenu from "./HamburgerMenu"; 
import { Link } from 'react-router-dom';
import "./styles.css";
import logo from "./logo.png";

function TypesExample() {
  return (
    <div className="header-container">
      {}
      <a href="/" className="header-logo">
        <img src={logo} alt="animeflv-logo" />
      </a>

      {}
      <HamburgerMenu />

      {}
      <div className="header-menu-group">
        <Link to="/"><Button className="header-btn">INICIO</Button></Link>
        <Link to="/directorio-anime"><Button className="header-btn">DIRECTORIO ANIME</Button></Link>

        {}
        <InputGroup className="header-search">
          <Form.Control placeholder="Buscar..." />
         <Link to="/search"><Button className="search-btn">🔍</Button></Link>
        </InputGroup>

        {}
        <Link to="/login"><Button className="header-login">LOGIN</Button></Link>
      </div>
    </div>
  );
}

export default TypesExample;
