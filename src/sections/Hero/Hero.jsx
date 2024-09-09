import styles from './HeroStyles.module.css';
import heroImg from '../../assets/lala.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import lattesLight from '../../assets/lattes-new.svg';
import lattesDark from '../../assets/lattes-new copy.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const lattesIcon = theme === 'light' ? lattesLight : lattesDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Larissa
          <br />
          Albuquerque
        </h1>
        <h2>Desenvolvedora Full Stack, M.Sc</h2>
        <span>
          <a href="http://lattes.cnpq.br/7448823611009423" target="_blank">
            <img src={lattesIcon} alt="Lattes icon" />
          </a>
          <a href="https://github.com/larialbu" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/larissa-albuquerque-39133a239/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Tenho 19 anos, sou pernambucana e <br />apaixonada por programação.
        </p>
        <a href="https://www.canva.com/design/DAF3imC90jE/1dvqkRqdI7Lvup0qO13Mmg/view?utm_content=DAF3imC90jE&utm_campaign=designshare&utm_medium=link&utm_source=editor">
          <button className="hover">Resumo</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
