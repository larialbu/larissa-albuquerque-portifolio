import './App.css';
import About from './sections/About/Aboult';
import Academico from './sections/Academico/Academico';
import Appearances from './sections/Appearances/Appearances';
import Contact from './sections/Contact/Contact';
import Experiences from './sections/Experiences/Experiences';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import ResearchProjects from './sections/ResearchProjects/ResearchProjects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <About/>
      <Academico/>
      <Skills />
      <Experiences/>
      <Appearances/>
      <Projects />
      <ResearchProjects/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
