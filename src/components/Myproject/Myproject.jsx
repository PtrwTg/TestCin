// src/components/Myproject/Myproject.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Myproject.module.css';

function Myproject() {
  return (
    <div className={styles.container}>
      <div className={styles.workarea}>
        <h1 className={styles.title}>My Project & Work</h1>
        <div className={styles.projectimgarea}>
          <div className={styles.rows1}>
            <Link to="/Project1" className={`${styles.image} ${styles.column1_1}`}></Link>
            <Link to="/Project2" className={`${styles.image} ${styles.column1_2}`}></Link>
          </div>
          <div className={styles.rows2}>
            <Link to="/Project3" className={`${styles.image} ${styles.column2_1}`}></Link>
            <Link to="/Project4" className={`${styles.image} ${styles.column2_2}`}></Link>
            <Link to="/Project5" className={`${styles.image} ${styles.column2_3}`}></Link>
          </div>
          <div className={styles.rows3}>
            <Link to="/Project6" className={`${styles.image} ${styles.column3_1}`}></Link>
            <Link to="/Project7" className={`${styles.image} ${styles.column3_2}`}></Link>
            <Link to="/Project8" className={`${styles.image} ${styles.column3_3}`}></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myproject;