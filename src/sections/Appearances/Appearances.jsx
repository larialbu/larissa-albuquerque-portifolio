import styles from './AppearancesStyles.module.css';
import porto from '../../assets/porto.jpeg';
import grass from '../../assets/grass.jpeg';
import unicap from '../../assets/unicap.jpeg';
import ifpe from '../../assets/ifpe.jpeg';
import cin from '../../assets/cin.jpg';

function Appearances() {
    return (
      <section id="appearances" className={styles.appearancesContainer}>
        <h1 className={styles.sectionTitle}>Aparições e Palestras</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img src={porto} alt="Imagem da aparição ou palestra 1" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>Jornal Digital</h3>
              <p>Fui destaque em uma matéria do Jornal Digital Recife, onde compartilhei a alegria de ingressar no mestrado em Engenharia de Software e Linguagem de Programação no Centro de Informática UFPE.</p>
            </div>
            <a href="https://jornaldigital.recife.br/2024/08/19/conquista-define-estudante-do-embarque-digital-ingressa-em-mestrado-na-ufpe/" target="_blank">
              <button className={styles.moreButton}>Ver mais</button>
            </a>
          </div>
          <div className={styles.card}>
            <img src={cin} alt="Imagem da aparição ou palestra 5" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>Cin-UFPE</h3>
              <p>Conheça Larissa Albuquerque, nossa mais nova aluna do mestrado em Computação! Clique no link e veja a sua declaração sobre esse momento que abre caminhos em seu futuro...</p>
            </div>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7233850696817639424/" target="_blank">
              <button className={styles.moreButton}>Ver mais</button>
            </a>
          </div>
          <div className={styles.card}>
            <img src={grass} alt="Imagem da aparição ou palestra 2" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>Blog do Google</h3>
              <p>Conheça histórias de quem estudou com o app Grasshopper e veja opções para aprender programação online. Com o app, Larissa concluiu, entre outros, o certificado de Fundamentos de Codificação.</p>
            </div>
            <a href="https://blog.google/intl/pt-br/produtos/conheca-historias-de-quem-estudou-com-o-app-grasshopper-e-veja-opcoes-para-aprender-programacao-online/" target="_blank">
              <button className={styles.moreButton}>Ver mais</button>
            </a>
          </div>
          <div className={styles.card}>
            <img src={unicap} alt="Imagem da aparição ou palestra 3" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>Palestra de Design UI/UX na UNICAP</h3>
              <p>Foi um prazer compartilhar minha experiência com todos vocês e discutir como o design é fundamental para o sucesso de um produto.</p>
            </div>
            <a href="https://www.linkedin.com/posts/larissa-albuquerque-39133a239_design-css-html-activity-7045457309703057408-F_0_/?utm_source=share&utm_medium=member_desktop" target="_blank">
              <button className={styles.moreButton}>Ver mais</button>
            </a>
          </div>
          <div className={styles.card}>
            <img src={ifpe} alt="Imagem da aparição ou palestra 4" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>Palestra de Design UI/UX no IFPE</h3>
              <p>Tive a honra de ser convidada para ministrar no IFPE Campus Recife uma oficina sobre Design UI/UX. Foi uma experiência incrível e enriquecedora!</p>
            </div>
            <a href="https://www.linkedin.com/posts/larissa-albuquerque-39133a239_designui-designux-ifperecife-activity-7082702884743655424-HWUd/?utm_source=share&utm_medium=member_desktop" target="_blank">
              <button className={styles.moreButton}>Ver mais</button>
            </a>
          </div>
          
        </div>
      </section>
    );
}

export default Appearances;
