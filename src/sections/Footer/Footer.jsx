import styles from './FooterStyles.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {year} Larissa Albuquerque. <br />
        Todos os direitos reservados.
      </p>
    </section>
  );
}

export default Footer;
