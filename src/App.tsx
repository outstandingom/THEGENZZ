import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <WhyUs />
        <Team />
        <Stats />
      </main>
      <Footer />
    </>
  );
}

export default App;
