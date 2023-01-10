import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from 'react-bootstrap/Card';
import Header from "../components/Header";
import About from "../components/About";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <div className='styles.container'>

      <Head>
        <title>
          Sindiso Mkhatshwa - Electrical & Computer Engineer (Hons),
          MSc Candidate in Computer Science, • Next.js • React.js • Express.js • MongoDB
        </title>
        <meta
          name="description"
          content="
          Sindiso Mkhatshwa is an Electrical and Computer Engineer & MSc Candidate in Computer
          Science at UCT."
        />
        <meta name="theme-color" content="#ffffff" />

        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="
          Sindiso Mkhatshwa - Electrical & Computer Engineer (Hons),
          MSc Candidate in Computer Science, • Next.js • React.js • Express.js • MongoDB"
        />
        <meta
          name="keywords"
          content="sindiso,mkhatshwa,sm,sindiso,sindiso m,software engineer, msc candidate"
        />

        <meta name="og:image" content="/assets/images/sindiso-og.jpg" />

        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Card className={styles.card}>
      <Card.Body>
      <ScrollToTop />
          <Header />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </Card.Body>
      </Card>
    </div>
  );
}
