import styles from "../styles/Experience.module.css";

export default function Education() {
  return (
    <div className={styles.experience}>
      <h2>Education</h2>
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i class="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a href="https://www.uct.ac.za/" target="_blank" rel="noreferrer">
                University of Cape Town, Cape Town, South Africa
              </a>
            </div>
            <div className={styles.branch}>
              Master of Science by Dirssetation Specializing in Computer Science (Jan 2021- Present)
              
            </div>
          </div>
        </div>
      </div>
        
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <i class="bi bi-briefcase"></i>
          <div>
            <div className={styles.college}>
              <a href="https://www.uct.ac.za/" target="_blank" rel="noreferrer">
                University of Cape Town, Cape Town, South Africa
              </a>
            </div>
            <div className={styles.branch}>
              Bachelor of Science in Engineering in Electrical and Computer Engineering (Jan 2017- Dec 2020)
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}