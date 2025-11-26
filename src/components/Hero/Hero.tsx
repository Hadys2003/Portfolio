import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.left}>
        <h2 className={styles.kicker}>Hi, I’m</h2>
        <h1 className={styles.title}>Hady Saleh</h1>

        <div className={styles.blurb}>
          <p>Motivated computer science graduate with hands-on experience in software development, 
            programming, and web-based applications. Proficient in multiple programming languages 
            and passionate about problem solving and teamwork.
            Seeking a job opportunity to apply technical skills, grow professionally,
            and contribute to impactful projects.
          </p>
        </div>

        {/* Quick facts */}
        <ul className={styles.facts}>
          <li>⚙️ Embedded & Full-stack</li>
          <li>📍 Roles: Embedded, Full-Stack, SWE</li>
          <li>🎯 Ship-focused</li>
        </ul>

        {/* Tech badges */}
        <div className={styles.badges}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>Node</span>
          <span>C/C++</span>
          <span>Python</span>
        </div>

        <div className={styles.cta}>
          <a href="#projects" className={styles.primary}>View Projects</a>
          <a href="#contact" className={styles.secondary}>Contact</a>
        </div>
      </div>

      <div className={styles.right}>
        <img
          src={heroImg}
          alt="Hady Saleh — futuristic illustration representing hardware and software"
          className={styles.heroImg}
        />
      </div>
    </section>

  );
}
