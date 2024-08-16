import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/larialbu/machine-learning-dados-covid19"
          h3="Machine Learning"
          p="Modelos de pre"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/larialbu/TCC-Unicap-Events"
          h3="TCC"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/larialbu/testes-sistemas-selenium"
          h3="Teste selinium java"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/larialbu/api-backend"
          h3="API BACKEND"
          p="Fitness App"
        />
          <ProjectCard
          src={hipsster}
          link="https://github.com/larialbu/App-Flutter"
          h3="app flutter"
          p="Glasses Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
