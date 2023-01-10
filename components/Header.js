import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      
      <img src="/images/sindiso.jpeg" className={styles.dp} />

      <h1 className={styles.name}>Sindiso Mkhatshwa</h1>

      <p className={styles.about}>
        MSc Candidate in Computer Science at{" "}
        <a href="http://www.nitschke-lab.uct.ac.za/" target="_blank" rel="noreferrer">
          UCT
        </a>,
        <br />
        Electrical & Computer Engineer (Hons)
      </p>
    </main>
  );
}