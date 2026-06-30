import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="grain"></div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <WhyUs />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
