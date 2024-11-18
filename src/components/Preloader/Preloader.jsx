// src/components/Preloader/Preloader.jsx
import React from 'react';
import styles from './Preloader.module.css';

function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
}

export default Preloader;