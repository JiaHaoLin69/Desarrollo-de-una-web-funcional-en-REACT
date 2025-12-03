import { Container, Row, Col } from 'react-bootstrap';
import './body.css'; 
import { FaPlay } from "react-icons/fa";

interface AnimeEpisode {
  id: number;
  title: string;
  episode: number;
  image: string;
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
  { id: 12, title: "", episode: 45, image: "" },
  { id: 13, title: "", episode: 89, image: "" },
  { id: 14, title: "", episode: 50, image: "" },
  { id: 15, title: "", episode: 14, image: "" },
];

function GridAnime() {
  return (
    <Container fluid className="mt-4">
      <h2 className="mb-4 text-secondary">Últimos episodios</h2>
      <Row className="mb-5">
        {episodios.map((anime) => (
          <Col xs={12} md={4} lg={2} className="mb-4" key={anime.id}>
            <div className="anime-card">
              <img src={anime.image} alt={anime.title} className="anime-image" />
              <div className="play-icon">{<FaPlay />}</div>
              <div className="anime-info">
                <span className="episode-badge">Episodio {anime.episode}</span>
                <h3 className="anime-title">{anime.title}</h3>
              </div>
            </div>
          </Col>
        ))}
      </Row>
</Container>
  );
}

export default GridAnime;