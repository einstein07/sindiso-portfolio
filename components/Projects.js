import { Card, Col, Row } from "react-bootstrap";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.works}>
      <h2>Projects</h2>
      <Row>
        <Col md={6}>
          <Card className={styles.card}>
            <a
              href="https://people.cs.uct.ac.za/~mkeet/files/TEdiDemoSmall.mp4"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img
                variant="top"
                src="/images/projects/ToCT.png"
              />
              <Card.Body>
                <Card.Title className={styles.title}>ToCTeditor</Card.Title>
                <p className={styles.category}>Template specification tool</p>
                <Card.Text>
                Part of a novel ontology-driven software architecture for natural 
                language generation for Nguni languages involves the capability 
                to specify templates and to verify correctness thereof. 
                </Card.Text>
                <Card.Text>
                ToCTeditor is a tool that makes it easy to specify the templates, 
                given the model for template specification.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://github.com/einstein07/Computer-of-Things" target="_blank" rel="noreferrer">
              <Card.Img variant="top" src="/images/projects/computerOfThings.png" />
              <Card.Body>
                <Card.Title className={styles.title}>Computer of Things</Card.Title>
                <p className={styles.category}>Distributed Computing Framework</p>
                <Card.Text>
                    Computer-Of-Things is a project aimed at creating a distributed 
                    processing framework, utilizing the portability of WebAssembly 
                    (WASM).
                </Card.Text>
                <Card.Text>
                    The framework consists of a websocket-server, client-wasm, 
                    client-webapp and a flatbuffer schema defining the 
                    work-package API used between clients and server.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card className={styles.card}>
            <a href="https://xd.adobe.com/view/e0799bab-414f-44a3-56f1-92c9c1110f53-9648/?fullscreen" target="_blank" rel="noreferrer">
            <Card.Img variant="top" src="/images/projects/servlink2.png" />
              <Card.Body>
                <Card.Title className={styles.title}>Servlink</Card.Title>
                <p className={styles.category}>UI/UX Design</p>
                <Card.Text>
                Servlink is a service hire mobile application. Use the password Servlink2020 to access the full project.
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
}