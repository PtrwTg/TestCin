// src/components/Skill/Skill.jsx
import React from 'react';
import styles from './Skill.module.css';

function Skill() {
  const skills = [
    { className: styles.figma, label: 'Figma' },
    { className: styles.group42, label: 'Wix' },
    { className: styles.group36, label: 'Photoshop' },
    { className: styles.procreate, label: 'Procreate' },
    { className: styles.group37, label: 'Miro' },
    { className: styles.unity, label: 'Unity' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Software Skills</h1>
      <div className={styles.imgArea}>
        {skills.map((skill, index) => (
          <div key={index} className={`${styles.icon} ${skill.className}`}>
            <span className={styles.tooltip}>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;