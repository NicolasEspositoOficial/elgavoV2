import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroStats from '../components/HeroStats';
import TeacherInfo from '../components/TeacherInfo';
import TopicsGrid from '../components/TopicsGrid';
import Modalities from '../components/Modalities';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>
      <Navbar />
      <Hero />
      <HeroStats />
      <TeacherInfo />
      <TopicsGrid />
      <Modalities />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default Home;