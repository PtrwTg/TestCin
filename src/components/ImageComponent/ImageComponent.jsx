import React from 'react';
import styles from './ImageComponent.module.css';
import CinqPurish from './CinqPurish.svg';

const ImageComponent = () => {
  return (
    <div className={styles.container}>
      <img src={CinqPurish} alt="Centered" className={styles.image} />
    </div>
  );
};

export default ImageComponent;