import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from 'react-router-dom';
import "./styles.css";
import logo from "./logo.png";

function TypesExample() {
  return (
    <div className="header-container">

      <a href="/" className="header-logo">
        <img src={logo} alt="animeflv-logo" />
      </a>

      <div className="header-menu-group">

        <Button className="header-btn">INICIO</Button>
        <Button className="header-btn">DIRECTORIO ANIME</Button>

        <InputGroup className="header-search">
          <Form.Control placeholder="Buscar..." />
          <Button className="search-btn">🔍</Button>
        </InputGroup>

        <Button className="header-login">LOGIN</Button>

      </div>
    </div>
  );
}

export default TypesExample;
