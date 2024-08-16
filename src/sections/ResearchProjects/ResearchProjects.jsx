import styles from './ResearchProjectsStyles.module.css';

function ResearchProjects() {
    return (
      <section id="research-projects" className={styles.container}>
        <h1 className={styles.researchTitle}>Projetos de Desenvolvimento e Pesquisa</h1>
        <div className={styles.academicsContainer}>
          <div className={styles.card}>
            <h3>Desenvolviemento de um chatbot</h3>
            <p>SiDI - FACEPE</p>
            <p>2Nov 2022 - Fev 2023</p>
            <p>Criação de chatbot para facilitar as tarefas do departamento de RH na seleção dos candidatos às vagas da própria empresa. Usamos o Rasa para ser a base da solução, Docker para guardar os serviços, AWS para hospedagem, Python para as Lambdas e APIs e Power BI para análise dos candidatos às vagas.</p>
            <p><b>ReactJS • Material UI • Python • Lambda • AWS • Docker</b></p>
          </div>
          <div className={styles.card}>
            <h3>Residência OnBoard</h3>
            <p>Porto Digital</p>
            <p>2022.1 - 2024.1</p>
            <p>A Residência Onboard faz parte do programa embarque Digital e é promovida pelo Porto Digital em parceira com a Universidade Católica de Pernambuco, onde durante os períodos do curso são propostos desafios por empresas parceiras (Accenture, NTT Data, CMTech) do Porto Digital, que orientam a construção e desenvolvimento de projetos.</p>
            <p><b>ReactJS
• JavaScript
• TypeScript
• Node Js
• Figma
• Design ui/ux
• Trello
• lean canvas</b></p>
          </div>
        </div>
      </section>
    );
}

export default ResearchProjects;
