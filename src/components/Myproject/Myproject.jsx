import React, { useState } from 'react';
import styles from './Myproject.module.css';
import column1_1 from './column1_1.svg';
import column1_1_ani from './column1_1_ani.svg';
import column1_2 from './column1_2.svg';
import column1_2_ani from './column1_2_ani.svg';
import column2_1 from './column2_1.svg';
import column2_1_ani from './column2_1_ani.svg';
import column2_2 from './column2_2.svg';
import column2_2_ani from './column2_2_ani.svg';
import column2_3 from './column2_3.svg';
import column2_3_ani from './column2_3_ani.svg';
import column3_1 from './column3_1.svg';
import column3_1_ani from './column3_1_ani.svg';
import column3_2 from './column3_2.svg';
import column3_2_ani from './column3_2_ani.svg';
import column3_3 from './column3_3.svg';
import column3_3_ani from './column3_3_ani.svg';

function Myproject() {
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (column) => {
    setHovered((prev) => ({ ...prev, [column]: true }));
  };

  const handleMouseLeave = (column) => {
    setHovered((prev) => ({ ...prev, [column]: false }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.workarea}>
        <h1 className={styles.title}>My Project & Work</h1>
        <div className={styles.projectimgarea}>
          <div className={styles.rows1}>
            <img
              src={hovered.column1_1 ? column1_1_ani : column1_1}
              alt="Project 1"
              className={`${styles.image} ${styles.column1_1}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column1_1')}
              onMouseLeave={() => handleMouseLeave('column1_1')}
            />
            <img
              src={hovered.column1_2 ? column1_2_ani : column1_2}
              alt="Project 2"
              className={`${styles.image} ${styles.column1_2}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column1_2')}
              onMouseLeave={() => handleMouseLeave('column1_2')}
            />
          </div>
          <div className={styles.rows2}>
            <img
              src={hovered.column2_1 ? column2_1_ani : column2_1}
              alt="Project 3"
              className={`${styles.image} ${styles.column2_1}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column2_1')}
              onMouseLeave={() => handleMouseLeave('column2_1')}
            />
            <img
              src={hovered.column2_2 ? column2_2_ani : column2_2}
              alt="Project 4"
              className={`${styles.image} ${styles.column2_2}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column2_2')}
              onMouseLeave={() => handleMouseLeave('column2_2')}
            />
            <img
              src={hovered.column2_3 ? column2_3_ani : column2_3}
              alt="Project 5"
              className={`${styles.image} ${styles.column2_3}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column2_3')}
              onMouseLeave={() => handleMouseLeave('column2_3')}
            />
          </div>
          <div className={styles.rows3}>
            <img
              src={hovered.column3_1 ? column3_1_ani : column3_1}
              alt="Project 6"
              className={`${styles.image} ${styles.column3_1}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column3_1')}
              onMouseLeave={() => handleMouseLeave('column3_1')}
            />
            <img
              src={hovered.column3_2 ? column3_2_ani : column3_2}
              alt="Project 7"
              className={`${styles.image} ${styles.column3_2}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column3_2')}
              onMouseLeave={() => handleMouseLeave('column3_2')}
            />
            <img
              src={hovered.column3_3 ? column3_3_ani : column3_3}
              alt="Project 8"
              className={`${styles.image} ${styles.column3_3}`}
              loading="lazy"
              onMouseEnter={() => handleMouseEnter('column3_3')}
              onMouseLeave={() => handleMouseLeave('column3_3')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myproject;