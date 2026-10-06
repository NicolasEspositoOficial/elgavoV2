import personajeImg from '../assets/foto-banner-esqueleto.jpg';
import './hero.css';

function Hero() {
  return (
    <section className="hero section-padding">
      <div className="hero-content">
        <h1 className="hero-title">THE NEW<br />E.R.A.</h1>
        <h3 className="hero-subtitle text-green">ESCUCHA, REPITE Y APRENDE</h3>
        
        <p className="hero-description text-muted">
          No se trata de memorizar frases. Se trata de entender cómo funciona el inglés, reconocerlo cuando suena rápido y usarlo para contar lo que pasó, lo que pasa y lo que quieres que pase.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">CONSULTA POR WHATSAPP</button>
          <button className="btn-secondary">CONOCE LA HISTORIA</button>
        </div>

        
      </div>

      <div className="hero-image-container">
        {/* 2. Reemplazas el cuadro temporal por la imagen real */}
        <img 
          src={personajeImg} 
          alt="Personaje The New ERA" 
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;