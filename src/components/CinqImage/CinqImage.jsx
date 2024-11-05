import React from 'react';
import styles from './CinqImage.module.css';
import Cinqimg from './Cinqimg.svg';

function CinqImage() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={Cinqimg} alt="CinqImage" />
    </div>
  );
}

export default CinqImage;