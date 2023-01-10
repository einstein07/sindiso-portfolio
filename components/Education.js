import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Experience.module.css";

export default function Education() {
  return (
    <div className={styles.experience}>
      <h2>Education</h2>
      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <div>
            <h4>
              <a href="https://www.uct.ac.za/" target="_blank" rel="noreferrer">
                University of Cape Town, Cape Town, South Africa
              </a>
            </h4>
            <div className={styles.branch}>
              Master of Science by Dirssetation Specializing in Computer Science (Jan 2021- Present)
            </div>
            <Row>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>
                    Thesis Topic: Perpetual Self-Assembly, Replication and Adaptation in{" "} 
                    <a href="https://en.wikipedia.org/wiki/Swarm_robotics" target="_blank" rel="noreferrer">
                    Swarm Robotics
                    </a>
                  </Card.Title>
                  <Card.Text>
                    This thesis investigates novel artificial life methodologies for
                    demonstrating various swarm robotic systems as autonomous and
                    adaptive collective behavior systems.
                  </Card.Text>
                  <Card.Text>
                    The research goal is to produce
                    in-situ robot factories that automate the automated design and
                    production of self-replicating robot populations capable of exhibiting
                    a broad range of collective behaviors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </div>
        </div>
      </div>

      <div className={styles.lineContainer}>
        <div className={styles.line}>
          <div>
            <h4>
              <a href="https://www.uct.ac.za/" target="_blank" rel="noreferrer">
                University of Cape Town, Cape Town, South Africa
              </a>
            </h4>
            <div className={styles.branch}>
              Bachelor of Science in Engineering in Electrical and Computer Engineering (Hons) (Jan 2017- Dec 2020)
            </div>
            <Row>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>
                    Culminating Project: Simulating Swarm Behavior for Surrounding a Target
                  </Card.Title>
                  <Card.Text>
                    The project simulates a swarm of robots that exhibit surrounding behavior,
                    and also investigates how this behavior can be used to provide a robust and scalable
                    response action to contain oil spills in marine ecosystems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </div>
        </div>
      </div>

    </div>
  );
}