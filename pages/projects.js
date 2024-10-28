// pages/projects.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const projects = [
  { id: 'project1', title: 'Project One', description: 'Description of project one.' },
  { id: 'project2', title: 'Project Two', description: 'Description of project two.' },
  { id: 'project3', title: 'Project Three', description: 'Description of project three.' },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a>{project.title}</a>
            </Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/about">About</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
