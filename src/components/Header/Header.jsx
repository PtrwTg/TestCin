import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <button className={styles.aboutMe}>About Me</button>
      <button className={styles.myWork}>My Work</button>
    </div>
  );
};

export default Header;