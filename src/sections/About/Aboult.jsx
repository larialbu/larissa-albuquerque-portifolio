import styles from './AboutStyles.module.css';
import profileImg from '../../assets/lari.jpg';

function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">Sobre Mim</h1>
      <div className={styles.aboutContainer}>
        <img src={profileImg} alt="Larissa Albuquerque" className={styles.profileImg} />
        <div className={styles.aboutText}>
        <p>
        Olá, sou Larissa, desenvolvedora Full Stack e mestranda em Ciência da Computação no CIN-UFPE. Com foco em Engenharia de Software, minha pesquisa busca aprimorar a avaliação da maturidade de projetos usando técnicas de IA. Tenho experiência em TypeScript, JavaScript, NextJS, ReactJS, Java, SpringBoot, C# e .NET, criando soluções inovadoras que unem tecnologia e design.
        </p>

        </div>
      </div>
    </section>
  );
}

export default About;
