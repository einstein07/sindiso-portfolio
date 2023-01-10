import styles from "../styles/Experience.module.css";
import { Card, Col, Row } from "react-bootstrap";
export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <Row>
        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <div>
                <div className={styles.college}>
                  <div classname={styles.briefcase}>
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <a href="http://www.masha.uct.ac.za/" target="_blank" rel="noreferrer">
                    MASHA
                  </a>
                </div>
                <div className={styles.branch}>
                  App Dev Consultant (Feb 2022- Dec 2022)
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <div>
                <div className={styles.college}>
                  <div classname={styles.briefcase}>
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <a href="https://sit.uct.ac.za/about-us-introducing-school-it/department-computer-science" target="_blank" rel="noreferrer">
                    UCT
                  </a>
                </div>
                <div className={styles.branch}>
                  Research Assistant (Sep 2022- Oct 2022)
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <div>
                <div className={styles.college}>
                  <div classname={styles.briefcase}>
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <a href="https://www.vastech.co.za/" target="_blank" rel="noreferrer">
                    VASTech
                  </a>
                </div>
                <div className={styles.branch}>
                  Winter internship (June 2022- July 2022)
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <div>
                <div className={styles.college}>
                  <div classname={styles.briefcase}>
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <a href="https://sit.uct.ac.za/about-us-introducing-school-it/department-computer-science" target="_blank" rel="noreferrer">
                    UCT
                  </a>
                </div>
                <div className={styles.branch}>
                  Teaching Assistant (Feb 2022- Apr 2022)
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <div>
                <div className={styles.college}>
                  <div classname={styles.briefcase}>
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <a href="https://www.vastech.co.za/" target="_blank" rel="noreferrer">
                    VASTech
                  </a>
                </div>
                <div className={styles.branch}>
                  Summer internship (Jan 2022- Feb 2022)
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <div>
                <div className={styles.college}>
                  <div classname={styles.briefcase}>
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <a href="https://www.einsteinandrobin.com/" target="_blank" rel="noreferrer">
                    Einstein & Robin
                  </a>
                </div>
                <div className={styles.branch}>
                  Co-Founder (August 2020- Present)
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className={styles.card}>
            <Card.Body>
              <div>
                <div className={styles.college}>
                  <div classname={styles.briefcase}>
                    <i class="bi bi-briefcase"></i>
                  </div>
                  <a href="https://www.lukecommission.org/" target="_blank" rel="noreferrer">
                    The Luke Commision
                  </a>
                </div>
                <div className={styles.branch}>
                  IT Technician (March 2016- December 2016)
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </div>
  );
}