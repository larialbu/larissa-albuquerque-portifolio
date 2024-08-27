import styles from './ContactStyles.module.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const mailtoLink = `mailto:larissaamca@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0D%0AEmail:%20${encodeURIComponent(email)}%0D%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink; 
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contato</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensagem"
            required></textarea>
        </div>
        <input className={styles.btn} type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;
