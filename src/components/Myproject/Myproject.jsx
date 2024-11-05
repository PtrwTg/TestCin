import React, { useState } from 'react';
import styles from './Myproject.module.css';
import column1_1 from './column1_1.svg';
import column1_1_ani from './column1_1_ani.svg';
import column1_2 from './column1_2.svg';
import column1_2_ani from './column1_2_ani.svg';
import column2_1 from './column2_1.svg';
import column2_1_ani from './column2_1_ani.svg';
import column2_2 from './column2_2.svg';
import column2_2_ani from './column2_2_ani.svg';
import column2_3 from './column2_3.svg';
import column2_3_ani from './column2_3_ani.svg';
import column3_1 from './column3_1.svg';
import column3_1_ani from './column3_1_ani.svg';
import column3_2 from './column3_2.svg';
import column3_2_ani from './column3_2_ani.svg';
import column3_3 from './column3_3.svg';
import column3_3_ani from './column3_3_ani.svg';

function Myproject() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.workarea}>
        <h1 className={styles.title}>My Project & Work</h1>
        <div className={styles.projectimgarea}>
          <div className={styles.rows1}>
            <img
              className={styles.image}
              src={hoveredImage === 'column1_1' ? column1_1_ani : column1_1}
              alt=""
              onMouseEnter={() => handleMouseEnter('column1_1')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              className={styles.image}
              src={hoveredImage === 'column1_2' ? column1_2_ani : column1_2}
              alt=""
              onMouseEnter={() => handleMouseEnter('column1_2')}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className={styles.rows2}>
            <img
              className={styles.image}
              src={hoveredImage === 'column2_1' ? column2_1_ani : column2_1}
              alt=""
              onMouseEnter={() => handleMouseEnter('column2_1')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              className={styles.image}
              src={hoveredImage === 'column2_2' ? column2_2_ani : column2_2}
              alt=""
              onMouseEnter={() => handleMouseEnter('column2_2')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              className={styles.image}
              src={hoveredImage === 'column2_3' ? column2_3_ani : column2_3}
              alt=""
              onMouseEnter={() => handleMouseEnter('column2_3')}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className={styles.rows3}>
            <img
              className={styles.image}
              src={hoveredImage === 'column3_1' ? column3_1_ani : column3_1}
              alt=""
              onMouseEnter={() => handleMouseEnter('column3_1')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              className={styles.image}
              src={hoveredImage === 'column3_2' ? column3_2_ani : column3_2}
              alt=""
              onMouseEnter={() => handleMouseEnter('column3_2')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              className={styles.image}
              src={hoveredImage === 'column3_3' ? column3_3_ani : column3_3}
              alt=""
              onMouseEnter={() => handleMouseEnter('column3_3')}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myproject;