import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      <img src="/images/sindiso.jpeg" className={styles.dp} />

      <h1 className={styles.name}>Sindiso Mkhatshwa</h1>

      <p className={styles.about}>
        Electrical & Computer Engineer (Hons),
        <br />
        MSc Candidate in Computer Science at{" "}
        <a href="http://www.nitschke-lab.uct.ac.za/" target="_blank" rel="noreferrer">
          UCT
        </a>
      </p>
    </main>
  );
}