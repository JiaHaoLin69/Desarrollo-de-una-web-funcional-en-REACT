import { Container, Row, Col } from 'react-bootstrap';
import './body.css'; 
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface AnimeEpisode {
  id: number;
  title: string;
  episode: number;
  image: string;
}

// Actualizamos la interfaz para incluir tipo y estado
interface AnimeGalery {
  id: number;
  title: string;
  image: string;
  type: 'ANIME' | 'OVA' | 'PELÍCULA'; // Para el color de la etiqueta
  status?: 'ESTRENO'; // Para el listón verde
}

const episodios: AnimeEpisode[] = [
  { id: 1, title: "Akame Ga Kill", episode: 1, image: "https://imagenes.hobbyconsolas.com/files/image_640_360/uploads/imagenes/2023/04/25/6900bba05c3c5.jpeg" },
  { id: 2, title: "Solo Leveling", episode: 2, image: "https://wallpapers.com/images/hd/solo-leveling-background-c93l8rn7l59fhvg9.jpg" },
  { id: 3, title: "One Piece", episode: 1100, image: "https://sm.ign.com/t/ign_es/screenshot/default/1134207_hnfc.1280.jpg" },
  { id: 4, title: "One Punch", episode: 4, image: "https://alfabetajuega.com/hero/2021/03/one-punch-man-1575372411.jpg?width=768&aspect_ratio=16:9&format=nowebp" },
  { id: 5, title: "Gachiakuta", episode: 20, image: "https://media.vandalsports.com/i/640x360/7-2025/20257412410_1.jpg" },
  { id: 6, title: "Dan Da Dan", episode: 32, image: "https://pbs.twimg.com/media/GZB3_KoWQAA6Y22?format=jpg&name=large" },
  { id: 7, title: "Given", episode: 4, image: "https://m.media-amazon.com/images/S/pv-target-images/86a4675a46b819757ecb3adcfc4a2f08bf72fd89b4cfebb8622a7702af928f1e.jpg" },
  { id: 8, title: "Banana Fish", episode: 1, image: "https://m.media-amazon.com/images/S/pv-target-images/8a7c5c017dbf7ab996debafb4dbb328ce005eaf84cec6cc44a56e196bc56527b.jpg" },
  { id: 9, title: "Watanare", episode: 90, image: "https://www.animationmagazine.net/wordpress/wp-content/uploads/watanare_chara_yoko.jpg" },
  { id: 10, title: "Watatabe", episode: 60, image: "https://www.anime-atelier.com/content/images/2025/06/watatabe.png" },
  { id: 11, title: "jojo's bizarre adventure", episode: 76, image: "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2021/12/01/16383670129379.png" },
  { id: 12, title: "Berserk", episode: 2, image: "https://media.vandalsports.com/i/640x360/3-2025/202532595317_1.jpg" },
];

// Datos actualizados para simular la imagen de referencia
const galeria: AnimeGalery[] = [
  { id: 1, title: "watanare", image: "https://www.animationmagazine.net/wordpress/wp-content/uploads/watanare_chara_yoko.jpg", type: "PELÍCULA", status: "ESTRENO" },
  { id: 2, title: "Solo Leveling", image: "https://m.media-amazon.com/images/M/MV5BOWM2NzcxZjEtYjFjNC00NzQwLTg4MzQtMDZjYzcwMTdmYmY4XkEyXkFqcGc@._V1_.jpg", type: "ANIME", status: "ESTRENO" },
  { id: 3, title: "Atack of Titan", image: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", type: "ANIME"},
  { id: 4, title: "Dragon Ball Super", image: "https://images.justwatch.com/poster/18473933/s718/dragon-ball-super.jpg", type: "ANIME"},
  { id: 5, title: "Gachiakuta", image: "https://m.media-amazon.com/images/M/MV5BZDU5ZmEzODYtMDU2OS00NTZiLTk4MWYtYWUyZWUzNGU2ODdjXkEyXkFqcGc@._V1_.jpg", type: "ANIME", status: "ESTRENO" },
  { id: 6, title: "Dan Da Dan", image: "https://pbs.twimg.com/media/GZB3_KoWQAA6Y22?format=jpg&name=large", type: "ANIME" },
  { id: 7, title: "Given", image: "https://i.ebayimg.com/images/g/4wUAAOSwWCRnrea5/s-l400.jpg", type: "PELÍCULA" },
  { id: 8, title: "Banana Fish", image: "https://m.media-amazon.com/images/M/MV5BY2Q0NDUyZmEtMjBmMC00YWMxLWJkN2UtNDc4OGY5ZjEzMzA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", type: "ANIME" },
];

function GridAnime() {
  
  const crearSlug = (titulo: string) => titulo.toLowerCase().replace(/ /g, '-');
  // Función auxiliar para asignar clase según el tipo
  const getTypeClass = (type: string) => {
    switch(type) {
        case 'PELÍCULA': return 'badge-pelicula';
        case 'OVA': return 'badge-ova';
        case 'ANIME': return 'badge-anime';
        default: return 'badge-anime';
    }
  };

  return (
    <Container fluid className="mt-4">
      <div className="welcome-banner">
        <strong>AnimeFLV</strong> tu fuente de anime online gratis en HD
      </div>
      <h2 className="mb-4 text-secondary">Últimos episodios</h2>
      <Row className="mb-5">
        {episodios.map((anime) => (
          <Col xs={12} md={4} lg={3} className="mb-4" key={anime.id}>
            <Link to={`/ver/${crearSlug(anime.title)}`} style={{ textDecoration: 'none' }}>
            <div className="anime-card">
              <img src={anime.image} alt={anime.title} className="anime-image" />
              <div className="play-icon">{<FaPlay />}</div>
              <div className="anime-info">
                <span className="episode-badge">Episodio {anime.episode}</span>
                <h3 className="anime-title">{anime.title}</h3>
              </div>
            </div>
            </Link>
          </Col>
        ))}
      </Row>

      <h2 className="mb-4 text-secondary">Últimos animes agregados</h2>
      <Row className="mb-5">
          {galeria.map((anime) => (
          // Cambiado lg={2} a lg={3} para tener filas de 4 elementos como en la foto
          <Col xs={6} md={4} lg={3} className="mb-4" key={anime.id}> 
            <Link to={`/anime/${crearSlug(anime.title)}`} style={{ textDecoration: 'none' }}>
            <div className="anime-card2-container">
                <div className="anime-poster-wrapper">
                    {/* Listón de ESTRENO (Condicional) */}
                    {anime.status === 'ESTRENO' && (
                        <div className="ribbon-wrapper">
                            <div className="ribbon">ESTRENO</div>
                        </div>
                    )}
                    
                    <img src={anime.image} alt={anime.title} className="anime-image2" />
                    
                    {/* Badge de TIPO (Anime/Pelicula/OVA) */}
                    <span className={`type-badge ${getTypeClass(anime.type)}`}>
                        {anime.type}
                    </span>
                </div>
                
                <div className="anime-info2">
                    <h3 className="anime-title2">{anime.title}</h3>
                </div>
            </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GridAnime;