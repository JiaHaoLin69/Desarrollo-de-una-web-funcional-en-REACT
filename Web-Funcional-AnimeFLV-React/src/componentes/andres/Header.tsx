import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TypesExample() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      padding: "15px",
    }}>

      <h1 style={{ margin: 0, fontSize: "1.8rem", color: "white" }}>
        AnimeFLV React
      </h1>


      <Button variant="primary">Inicio</Button>
      <Button variant="secondary">Directorio Anime</Button>

      {/* Buscador */}
      <InputGroup style={{ maxWidth: "280px", marginLeft: "auto" }}>
        <Form.Control placeholder="Buscar..." />
        <Button variant="primary">🔍</Button>
      </InputGroup>

      {/* Login */}
      <Button variant="outline-primary">Login</Button>
    </div>
  );
}

export default TypesExample;
