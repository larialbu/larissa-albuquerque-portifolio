import styles from './CommunityStyles.module.css';
import logoImg from '../../assets/rfec.jpg';

function Community() {
  return (
    <section id="community" className={styles.container}>
    <h1 className="sectionTitle">Recife Front End Community</h1>
    <div className={styles.communityContainer}>
      <div className={styles.communityText}>
        <p>
          Junte-se à <b>RFEC - Recife Front-End Community</b>, uma comunidade que criei para conectar desenvolvedores e entusiastas em Recife!
        </p>
        <p>Você é apaixonado ou apaixonada por front, back, full ou tech em geral? Venha fazer parte da RFEC!</p> <br />
        <p>O que te espera:</p> 
        <p> Aprendizado, Networking, Workshops e Oportunidades </p>
       
        <p>Vamos crescer juntos e transformar o cenário do mundo web!</p>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/recife-front-end-community-7670a5336/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href="https://chat.whatsapp.com/C1yzsE4daG63zwVOh5W5R6 " target="_blank" rel="noopener noreferrer" className={styles.link}>
            WhatsApp
          </a>
          <a href="https://www.instagram.com/rfecommunity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Instagram
          </a>
        </div>
      </div>
      <img src={logoImg} alt="Logo da Comunidade" className={styles.logo} />
    </div>
  </section>
  );
}

export default Community;
