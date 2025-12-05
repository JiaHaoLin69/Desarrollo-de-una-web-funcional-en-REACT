import React from 'react';
import { Link } from 'react-router-dom';
import './aside.css'; 

interface AnimeItem {
  id: number;
  title: string;
  type: 'ANIME' | 'OVA' | 'PELICULA';
  slug: string;
}

const animesEmision: AnimeItem[] = [
  { id: 1, title: 'Violet Evergarden OVA', type: 'OVA', slug: 'algo' },
  { id: 1, title: 'Akame Ga Kill', type: 'ANIME', slug: 'akame-ga-kill' },
  { id: 2, title: 'Solo Leveling', type: 'ANIME', slug: 'solo-leveling' },
  { id: 3, title: 'One Piece', type: 'ANIME', slug: 'one-piece' },
  { id: 4, title: 'One Punch Man', type: 'ANIME', slug: 'one-punch-man' },
  { id: 5, title: 'Dan Da Dan', type: 'ANIME', slug: 'dan-da-dan' },
  { id: 6, title: 'Gachiakuta', type: 'ANIME', slug: 'gachiakuta' },
  { id: 7, title: 'Given', type: 'PELICULA', slug: 'Given' },
  { id: 8, title: 'Banana Fish', type: 'ANIME', slug: 'banana-fish' }, 
  { id: 9, title: 'Watashi Ga Koibito ni Nareru', type: 'ANIME', slug: 'watanare' },
  { id: 10, title: 'Watashi wo Tabetai Hitodenashi', type: 'ANIME', slug: 'watatabe' },
  { id: 11, title: 'JoJos Bizarre Adventure', type: 'ANIME', slug: 'jojo' },
  { id: 12, title: 'Detective Conan', type: 'ANIME', slug: 'detective-conan' },
  { id: 13, title: 'Nageki no Bourei wa Intai', type: 'ANIME', slug: 'nageki-no-bourei' },
  { id: 14, title: 'Uma Musume: Cinderella Gray', type: 'ANIME', slug: 'uma-musume' },
  { id: 15, title: 'Watari-kun no xx ga Houkai', type: 'ANIME', slug: 'watari-kun' },
  { id: 16, title: 'Futari Solo Camp', type: 'ANIME', slug: 'futari-solo-camp' },
  { id: 17, title: 'Watashi Ga koibito ni nanreru: NEXT SHINE', type: 'PELICULA', slug: 'watanare-next-shine' },
];

const AsideAnimes: React.FC = () => {
  return (
    <aside className="flv-aside">
      <div className="flv-aside-header">
        <h2 className="flv-aside-title">
          <span className="flv-icon-play">▶</span>
          ANIMES EN EMISIÓN
        </h2>
        <span className="flv-icon-arrow">▶</span>
      </div>

      <ul className="flv-anime-list">
        {animesEmision.map((anime) => (
          <li key={anime.id}>
            {}
            <Link to={`/ver/${anime.slug}`} className="flv-anime-item">
                <a href={`/anime/${anime.slug}`} className="flv-anime-item">
              
                <div className="flv-item-left">
                    <span className="flv-dot">●</span>
                    <span className="flv-text" title={anime.title}>
                  {anime.title}
                    </span>
                </div>
              {}
              <span className={`flv-badge ${anime.type.toLowerCase()}`}>
                {anime.type}
              </span>
                </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideAnimes;