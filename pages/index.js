import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/image1.jpg" 
          alt="Portfolio image"
          width={500} 
          height={300} 
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}><b><u>Welcome to My Portfolio 😊</u></b></h1>
        <p>
          Greetings from my virtual portfolio. I am Yasasi Randula Pathirana. I'm hoping to share 
          information about myself through this digital portfolio. I'm an IT undergraduate of the 
          Department of ICT, Faculty of Humanities and Social Sciences of University of Sri 
          Jayewardenepura.
        </p>
        <nav>
          <Link href="/about">About</Link> |{' '}
          <Link href="/projects">Projects</Link> |{' '}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
