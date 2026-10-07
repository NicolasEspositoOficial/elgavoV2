import { useTranslation } from 'react-i18next';
import './TopicsGrid.css';

function TopicsGrid() {
  const { t } = useTranslation();

  const topics = [
    { num: '01', title: t('topicsGrid.t1_title'), desc: t('topicsGrid.t1_desc') },
    { num: '02', title: t('topicsGrid.t2_title'), desc: t('topicsGrid.t2_desc') },
    { num: '03', title: t('topicsGrid.t3_title'), desc: t('topicsGrid.t3_desc') },
    { num: '04', title: t('topicsGrid.t4_title'), desc: t('topicsGrid.t4_desc') },
    { num: '05', title: t('topicsGrid.t5_title'), desc: t('topicsGrid.t5_desc') },
    { num: '06', title: t('topicsGrid.t6_title'), desc: t('topicsGrid.t6_desc') },
    { num: '07', title: t('topicsGrid.t7_title'), desc: t('topicsGrid.t7_desc') },
    { num: '08', title: t('topicsGrid.t8_title'), desc: t('topicsGrid.t8_desc'), highlight: true },
    { num: '09', title: t('topicsGrid.t9_title'), desc: t('topicsGrid.t9_desc') }
  ];

  return (
    <section className="topics-grid-section section-padding">
      <div className="topics-header">
        <div>
          <h4 className="text-green subtitle-small">{t('topicsGrid.subtitle')}</h4>
          <h2 className="section-title">{t('topicsGrid.title1')}<br/>{t('topicsGrid.title2')}</h2>
        </div>
        <p className="text-muted max-w-400">
          {t('topicsGrid.desc')}
        </p>
      </div>

      <div className="grid-container">
        {topics.map((topic, index) => (
          <div className="grid-card" key={index}>
            <div className={`icon-box ${topic.highlight ? 'bg-green' : 'bg-purple'}`}>
              {topic.num}
            </div>
            <h4>{topic.title}</h4>
            <p className="text-muted">{topic.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopicsGrid;