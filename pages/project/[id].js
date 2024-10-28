// pages/projects/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

// Sample project data
const projects = {
  project1: {
    title: 'Project One',
    description: 'Detailed description of Project One.',
    technologies: ['Next.js', 'React', 'CSS'],
  },
  project2: {
    title: 'Project Two',
    description: 'Detailed description of Project Two.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
  },
  project3: {
    title: 'Project Three',
    description: 'Detailed description of Project Three.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
};

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects[id];

  if (!project) {
    return (
      <div className={styles.container}>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <Link href="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <nav>
        <Link href="/projects">Back to Projects</Link> |{' '}
        <Link href="/">Home</Link>
      </nav>
    </div>
  );
}
