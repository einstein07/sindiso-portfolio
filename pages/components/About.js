import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <p>
        Hello! I'm Sindiso Mkhatshwa, an engineering graduate of the 
        University of Cape Town with a strong concentration in Electrical 
        and Computer Engineering.
      </p>
      <p>
        During my undergraduate career at UCT, I focused on software 
        development with a focus on microcontroller applications and harnessing
        the computing resources that are available in GPUs and multi-core 
        processors, as well as microprocessor design for High Performance 
        Computing using Field Programmable Gate Arrays (FPGAs).
      </p>
    </div>
  );
}