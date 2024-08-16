import styles from './AcademicoStyles.module.css';

function Academics() {
  return (
    <section id="academics" className={styles.container}>
      <h1 className="sectionTitle">Acadêmico</h1>
      <div className={styles.academicsContainer}>
        <div className={styles.card}>
          <h3>Mestrado em Ciência da Computação</h3>
          <p><b>CIN-UFPE, 2024.2 - Em andamento</b></p>
          <p>
            Foco em Engenharia de Software e Linguagens de Programação. Pesquisa sobre a avaliação da maturidade de projetos de software utilizando dados de observatórios de projetos.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Curso Superior de Tecnologia (CST), Sistemas para Internet</h3>
          <p><b>Universidade Católica de Pernambuco, 2022.1 - 2024.1</b></p>
          <p>
            Desenvolvi habilidades em desenvolvimento full stack, arquitetura de sistemas e participei de projetos de extensão.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Academics;
