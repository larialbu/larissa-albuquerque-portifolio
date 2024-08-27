import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
// import freshBurger from '../../assets/fresh-burger.png';
import selinium from '../../assets/selinium.jpg';
// import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import spring from '../../assets/spring.jpg';
import unicapevents from '../../assets/unicapevents.jpg';
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
          p="Modelos de previsão vacinas de covid19"
        />
        <ProjectCard
          src={selinium}
          link="https://github.com/larialbu/testes-sistemas-selenium"
          h3="Teste selinium java"
          p="TDD"
        />
        <ProjectCard
          src={spring}
          link="https://github.com/larialbu/api-backend"
          h3="API BACKEND"
          p="CRUD API REST"
        />
          <ProjectCard
          src={fitLift}
          link="https://github.com/larialbu/App-Flutter"
          h3="App Saúde Fit"
          p="Flutter-Dart"
        />
        <ProjectCard
          src={unicapevents}
          link="https://github.com/larialbu/TCC-Unicap-Events"
          h3="TCC"
          p="Trabalho Conclusão Curso SI"
        />
      </div>
    </section>
  );
}

export default Projects;
