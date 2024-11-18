import React, { useState } from 'react';
import styles from './Skill.module.css';
import figma from './figma.svg';
import figma_ani from './figma_ani.svg';
import group42 from './Group42.svg';
import group42_ani from './Group42_ani.svg';
import group36 from './Group36.svg';
import group36_ani from './Group36_ani.svg';
import procreate from './procreate.svg';
import procreate_ani from './procreate_ani.svg';
import group37 from './Group37.svg';
import group37_ani from './Group37_ani.svg';
import unity from './unity.svg';
import unity_ani from './unity_ani.svg';

function Skill() {
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (icon) => {
    setHovered((prev) => ({ ...prev, [icon]: true }));
  };

  const handleMouseLeave = (icon) => {
    setHovered((prev) => ({ ...prev, [icon]: false }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Software Skills</h1>
      <div className={styles.imgArea}>
        <img
          src={hovered.figma ? figma_ani : figma}
          alt="Figma"
          className={`${styles.icon}`}
          loading="lazy"
          onMouseEnter={() => handleMouseEnter('figma')}
          onMouseLeave={() => handleMouseLeave('figma')}
        />
        <img
          src={hovered.group42 ? group42_ani : group42}
          alt="Group42"
          className={`${styles.icon}`}
          loading="lazy"
          onMouseEnter={() => handleMouseEnter('group42')}
          onMouseLeave={() => handleMouseLeave('group42')}
        />
        <img
          src={hovered.group36 ? group36_ani : group36}
          alt="Group36"
          className={`${styles.icon}`}
          loading="lazy"
          onMouseEnter={() => handleMouseEnter('group36')}
          onMouseLeave={() => handleMouseLeave('group36')}
        />
        <img
          src={hovered.procreate ? procreate_ani : procreate}
          alt="Procreate"
          className={`${styles.icon}`}
          loading="lazy"
          onMouseEnter={() => handleMouseEnter('procreate')}
          onMouseLeave={() => handleMouseLeave('procreate')}
        />
        <img
          src={hovered.group37 ? group37_ani : group37}
          alt="Group37"
          className={`${styles.icon}`}
          loading="lazy"
          onMouseEnter={() => handleMouseEnter('group37')}
          onMouseLeave={() => handleMouseLeave('group37')}
        />
        <img
          src={hovered.unity ? unity_ani : unity}
          alt="Unity"
          className={`${styles.icon}`}
          loading="lazy"
          onMouseEnter={() => handleMouseEnter('unity')}
          onMouseLeave={() => handleMouseLeave('unity')}
        />
      </div>
    </div>
  );
}

export default Skill;