import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="social-accounts">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/sindiso-mkhatshwa-001/"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://twitter.com/realSindiso"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://github.com/einstein07"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="top">
          Find the deepest pleasure in absorbing knowledge and information. Feel like you never have enough.
          </p>
          <p className="bottom">
            Copyright © Sindiso Mkhatshwa 2023
          </p>
        </div>
      </div>
    </footer>
  );
}