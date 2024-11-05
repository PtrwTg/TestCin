import React, { useState } from 'react';
import styles from './Skill.module.css';
import figma from './figma.svg';
import figma_ani from './figma_ani.svg';
import Group42 from './Group42.svg';
import Group42_ani from './Group42_ani.svg';
import Group36 from './Group36.svg';
import Group36_ani from './Group36_ani.svg';
import procreate from './procreate.svg';
import procreate_ani from './procreate_ani.svg';
import Group37 from './Group37.svg';
import Group37_ani from './Group37_ani.svg';
import unity from './unity.svg';
import unity_ani from './unity_ani.svg';

function Skill() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className={styles.constainer}>
      <h1 className={styles.title}>Software Skills</h1>
      <div className={styles.imgarea}>
        <img
          src={hoveredImage === 'figma' ? figma_ani : figma}
          alt=""
          onMouseEnter={() => handleMouseEnter('figma')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoveredImage === 'Group42' ? Group42_ani : Group42}
          alt=""
          onMouseEnter={() => handleMouseEnter('Group42')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoveredImage === 'Group36' ? Group36_ani : Group36}
          alt=""
          onMouseEnter={() => handleMouseEnter('Group36')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoveredImage === 'procreate' ? procreate_ani : procreate}
          alt=""
          onMouseEnter={() => handleMouseEnter('procreate')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoveredImage === 'Group37' ? Group37_ani : Group37}
          alt=""
          onMouseEnter={() => handleMouseEnter('Group37')}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={hoveredImage === 'unity' ? unity_ani : unity}
          alt=""
          onMouseEnter={() => handleMouseEnter('unity')}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default Skill;