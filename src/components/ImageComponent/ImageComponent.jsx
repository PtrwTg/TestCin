// src/components/ImageComponent/ImageComponent.jsx
import React from 'react';
import styles from './ImageComponent.module.css';
import FlowerLoader from '../FlowerLoader/FlowerLoader.jsx';

const ImageComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centerarea}>
        <h1>Cinq</h1>
        <h1 className={styles.lastname}>
          Pur
          <span className={styles.iContainer}>
            i
          </span>
          ch
        </h1>
      </div>
    </div>
  );
};

export default ImageComponent;