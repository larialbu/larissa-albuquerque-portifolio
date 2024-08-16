import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Next" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Styled Compoenets" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="SpringBoot" />
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill=".NET" />
        <SkillList src={checkMarkIcon} skill="Postgresql" />
        <SkillList src={checkMarkIcon} skill="Docker" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="GIT" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="Postman" />
        <SkillList src={checkMarkIcon} skill="Figma" />
      </div>
    </section>
  );
}

export default Skills;
