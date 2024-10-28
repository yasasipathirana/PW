import Link from 'next/link';
import Image from 'next/image'; 
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
     
      <div className={styles.imageWrapper}>
        <Image 
          src="/DSC_7296.JPG" 
          alt="My picture"
          width={150} 
          height={150} 
        />
      </div>

      <h1>About Me</h1>
      <p>
        <b>Hello!💁‍♀️</b> I'm Yasasi Pathirana, an undergraduate studying information technology. 
        I can't wait to explore the digital world. I'm eager to study computer systems in-depth, 
        pick up coding, and comprehend how networks work. Whether I want to build innovative software 
        or make sure that everything is secure online, my IT degree will provide me the tools I need to 
        really make an impact. I'm excited to put into practice my creative thinking, solve difficult 
        challenges, and keep up with the most recent developments in technology.
      </p>
      <p>
        There are endless possibilities and I'm prepared to explore them all!
      </p>
      
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/projects">Projects</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}

