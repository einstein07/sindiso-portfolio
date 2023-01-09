import { Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <Row className={styles.boxes}>
        <Col lg={4} md={6} sm={12}>
          <a
            href="mailto:mkhsin035@myuct.ac.za"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-envelope"></i>
            mkhsin035@myuct.ac.za
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="https://wa.me/+27608963858"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-whatsapp"></i>
            Message
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="tel:+27-608963858"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-telephone"></i>
            +27-608963858
          </a>
        </Col>
      </Row>
    </div>
  );
}