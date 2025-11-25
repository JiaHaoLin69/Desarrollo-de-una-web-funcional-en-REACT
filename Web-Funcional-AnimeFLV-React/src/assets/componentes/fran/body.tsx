import { Container, Row, Col } from 'react-bootstrap';
import './body.css'; // Importamos los estilos que crearemos abajo

// Definimos cómo es la información de un episodio
interface AnimeEpisode {
  id: number;
  title: string;
  episode: number;
  image: string;
}

// Datos de prueba (simulando lo que vendría de una API)
const episodios: AnimeEpisode[] = [
  { id: 1, title: "Akame Ga Kill", episode: 1, image: "https://imagenes.hobbyconsolas.com/files/image_640_360/uploads/imagenes/2023/04/25/6900bba05c3c5.jpeg" },
  { id: 2, title: "3-nen Z-gumi Ginpac...", episode: 2, image: "https://via.placeholder.com/300x170/333333/FFFFFF?text=Anime+2" },
  { id: 3, title: "Sozai Saishuka no Is...", episode: 4, image: "https://via.placeholder.com/300x170/555555/FFFFFF?text=Anime+3" },
  { id: 4, title: "Debu to Love to Aya...", episode: 6, image: "https://via.placeholder.com/300x170/777777/FFFFFF?text=Anime+4" },
  // ... puedes agregar más
];

function GridAnime() {
  return (
    <Container fluid className="mt-4">
      <h2 className="mb-4 text-secondary">Últimos episodios</h2>
      
      <Row>
        {episodios.map((anime) => (
          // Responsive: 1 columna en móvil (xs), 2 en tablet (md), 4 en PC (lg)
          <Col xs={12} md={6} lg={3} className="mb-4" key={anime.id}>
            
            <div className="anime-card">
              {/* Imagen de fondo */}
              <img src={anime.image} alt={anime.title} className="anime-image" />
              
              {/* Icono de Play (esquina superior derecha) */}
              <div className="play-icon">▶</div>

              {/* Contenedor de información (abajo) */}
              <div className="anime-info">
                <span className="episode-badge">Episodio {anime.episode}</span>
                <h3 className="anime-title">{anime.title}</h3>
              </div>
              
              {/* Overlay oscuro al pasar el mouse (opcional) */}
              <div className="hover-overlay"></div>
            </div>

          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GridAnime;