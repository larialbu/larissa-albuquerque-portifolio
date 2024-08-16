import styles from './ExperiencesStyles.module.css';

function Experiences() {
    return (
      <section id="experiences" className={styles.experiencesContainer}>
        <h1 className="sectionTitle">Experiências</h1>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>OPA Games</h3>
              <p>Desenvolvedora Frontend Junior</p>
              <p>Ago 2023 - Atual</p>
              <p>Empresa especializada no desenvolvimento de jogos e dashboards para plataformas de cassino e apostas esportivas. Utiliza tecnologias avançadas como Power BI para oferecer soluções otimizadas e visualizações intuitivas, aprimorando a experiência dos usuários dessas plataformas.</p>
              <p><b>Skills: NextJS, ReactJS, TypeScript, Styled Components, React Query</b></p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>CMTech</h3>
              <p>Desenvolvedora Full Stack (estágio)</p>
              <p>Fev 2023 - Ago 2023</p>
              <p>Sistema de atendimento via chat em tempo real, usando ReactJS + MUI no frontend e persistindo as informações em uma base de dados POSTGRESQL via api REST em .NET CORE, utilizando ainda o SIGNALR como framework de mensageria real time.</p>
              <p><b>Skills: ReactJS, MUI, .NET Core, C#, Postgresql, Azure</b></p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Experiences;
