import './HeroStats.css';

function HeroStats() {
  return (
    <div className="hero-statsv1">
      {/* Cajas vacías a los lados para simular las líneas hacia los bordes de la pantalla */}
      <div className="stat-empty"></div>
      
      <div className="statv1"><span className="text-greenv1">01</span><p className='text-statv1'>SONIDO</p></div>
      <div className="statv1"><span className="text-greenv1">02</span><p className='text-statv1'>PALABRA</p></div>
      <div className="statv1"><span className="text-greenv1">03</span><p className='text-statv1'>IDEA</p></div>
      <div className="statv1"><span className="text-greenv1">04</span><p className='text-statv1'>ESTRUCTURA</p></div>
      <div className="statv1"><span className="text-greenv1">05</span><p className='text-statv1'>INTENCIÓN</p></div>
      <div className="statv1"><span className="text-greenv1">06</span><p className='text-statv1'>DISCURSO</p></div>
      <div className="statv1"><span className="text-greenv1">07</span><p className='text-statv1'>FLUIDEZ</p></div>
      
      <div className="stat-empty"></div>
    </div>
  );
}

export default HeroStats;