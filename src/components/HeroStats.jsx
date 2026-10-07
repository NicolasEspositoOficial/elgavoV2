import { useTranslation } from 'react-i18next';
import './HeroStats.css';

function HeroStats() {
  const { t } = useTranslation();

  return (
    <div className="hero-statsv1">
      {/* Cajas vacías a los lados para simular las líneas hacia los bordes de la pantalla */}
      <div className="stat-empty"></div>
      
      <div className="statv1"><span className="text-greenv1">01</span><p className='text-statv1'>{t('heroStats.stat1')}</p></div>
      <div className="statv1"><span className="text-greenv1">02</span><p className='text-statv1'>{t('heroStats.stat2')}</p></div>
      <div className="statv1"><span className="text-greenv1">03</span><p className='text-statv1'>{t('heroStats.stat3')}</p></div>
      <div className="statv1"><span className="text-greenv1">04</span><p className='text-statv1'>{t('heroStats.stat4')}</p></div>
      <div className="statv1"><span className="text-greenv1">05</span><p className='text-statv1'>{t('heroStats.stat5')}</p></div>
      <div className="statv1"><span className="text-greenv1">06</span><p className='text-statv1'>{t('heroStats.stat6')}</p></div>
      <div className="statv1"><span className="text-greenv1">07</span><p className='text-statv1'>{t('heroStats.stat7')}</p></div>
      
      <div className="stat-empty"></div>
    </div>
  );
}

export default HeroStats;