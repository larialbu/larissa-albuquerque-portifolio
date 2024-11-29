import styles from './ExperiencesStyles.module.css';

function Experiences() {
    return (
      <section id="experiences" className={styles.experiencesContainer}>
        <h1 className="sectionTitle">Experiências</h1>
        <div className={styles.timeline}>
        {/* <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>FCx labs - Ferreira Costa</h3>
              <p>Associate Software Engineer</p>
              <p>Dez 2024 - Atual</p>
              <p>Centro de soluções tecnológicas que possui desafios relevantes para catalisar as soluções na oferta de serviços e produtos, integrando experiência aos consumidores. O FCx Labs é um elo entre o cenário presente do varejo e todas as transformações que estão acontecendo pelas influências da tecnologia.</p>
              <p><b>Skills: NextJS, ReactJS, TypeScript, Styled Components, React Query</b></p>
            </div>
          </div> */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>OPA Games</h3>
              <p>Desenvolvedora Full Stack Junior</p>
              <p>Ago 2023 - Dez 2024</p>
              <p>Empresa especializada no desenvolvimento de jogos e dashboards para plataformas. Utiliza tecnologias avançadas como Power BI para oferecer soluções otimizadas e visualizações intuitivas, aprimorando a experiência dos usuários dessas plataformas.</p>
              <p><b>Skills: NextJS, ReactJS, TypeScript, Styled Components, React Query, Python, Django, FastAPI</b></p>
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
