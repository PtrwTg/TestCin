import React from 'react';
import styles from './Skill.module.css';

function Skill() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Software Skills</h1>
      <div className={styles.imgArea}>
        <div className={`${styles.icon} ${styles.figma}`}></div>
        <div className={`${styles.icon} ${styles.group42}`}></div>
        <div className={`${styles.icon} ${styles.group36}`}></div>
        <div className={`${styles.icon} ${styles.procreate}`}></div>
        <div className={`${styles.icon} ${styles.group37}`}></div>
        <div className={`${styles.icon} ${styles.unity}`}></div>
      </div>
    </div>
  );
}

export default Skill;