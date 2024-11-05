import React from 'react';
import styles from './ImageComponent.module.css';
import CinqPurish from './CinqPurish.svg';

const ImageComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.TextImgArea}>
      <img src={CinqPurish} alt="Centered" className={styles.image} />
      </div>
    </div>
  );
};

export default ImageComponent;