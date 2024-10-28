// pages/404.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go back Home</Link>
    </div>
  );
}
