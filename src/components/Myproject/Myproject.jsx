// src/components/Myproject/Myproject.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Myproject.module.css';

function Myproject() {
  const projects = [
    'Unicourse Landing Page',
    'MasterKids (In-House)',
    'My Old Portfolio Website',
    'Living House',
    '2 Hand',
    'Journal Mood',
    'Wonder',
    'Pocket',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.workarea}>
        <h1 className={styles.title}>My Project & Work</h1>
        <div className={styles.projectimgarea}>
          <div className={styles.rows1}>
            {projects.slice(0, 2).map((project, index) => (
              <Link
                key={project}
                to="/Project1"
                state={{ project }}
                className={`${styles.image} ${styles[`column1_${index + 1}`]}`}
              ></Link>
            ))}
          </div>
          <div className={styles.rows2}>
            {projects.slice(2, 5).map((project, index) => (
              <Link
                key={project}
                to="/Project1"
                state={{ project }}
                className={`${styles.image} ${styles[`column2_${index + 1}`]}`}
              ></Link>
            ))}
          </div>
          <div className={styles.rows3}>
            {projects.slice(5).map((project, index) => (
              <Link
                key={project}
                to="/Project1"
                state={{ project }}
                className={`${styles.image} ${styles[`column3_${index + 1}`]}`}
              ></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myproject;