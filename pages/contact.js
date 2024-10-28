import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact Me👋</h1>
      <p>
        Feel free to reach out to me via email at{' '}
        <a href="mailto:yasasipathirana123@gmail.com">yasasipathirana123@gmail.com</a>.
      </p>
      <p>
        You can also find me on LinkedIn: {' '}
        <a href="https://www.linkedin.com/in/yasasi-pathirana" target="_blank" rel="noopener noreferrer">
          Yasasi Pathirana LinkedIn
        </a>
      </p>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/about">About</Link> |{' '}
        <Link href="/projects">Projects</Link>
      </nav>
    </div>
  );
}


