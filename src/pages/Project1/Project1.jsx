// src/pages/Project1/Project1.jsx
import React, { useState } from 'react';
import Header from '../../components/Homebar/Homebar';
import styles from './Project1.module.css';
import Project1img from './column1_1.svg';
import skillfigma from './figma.svg';
import skillps from './Group37.svg';
import skillvector from './Group36.svg';

function Project1() {
  const [activeButton, setActiveButton] = useState('Unicourse Landing Page');

  const buttons = [
    'Unicourse Landing Page',
    'MasterKids (In-House)',
    'My Old Portfolio Website',
    'Living House',
    '2 Hand',
    'Journal Mood',
    'Pocket',
    'Wonder',
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentarea}>
        <h1 className={styles.projectname}>{activeButton}</h1>
        <div className={styles.hashtag}>
          <h6>#Landing Page</h6>
          <h6>#UX/UI Design</h6>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.projectmenu}>
              <h1 className={styles.name}>Cinq.</h1>
              <div className={styles.contact}>
                <div className={styles.email}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 24 24" width="24px" fill="#8BB0DB">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <p>phurichaya.7502@gmail.com</p>
                </div>
                <div className={styles.tel}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="#8BB0DB">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/>
                  </svg>
                  <p>099-365-6596</p>
                </div>
              </div>
              <div className={styles.menu}>
                {buttons.map((btn) => (
                  <button
                    key={btn}
                    className={`${styles.button} ${activeButton === btn ? styles.active : ''}`}
                    onClick={() => setActiveButton(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <img className={styles.img} src={Project1img} alt="Project1img" />
            </div>
            <div className={styles.bottom}>
              <div className={styles.outcome}>
                <h1 className={styles.head}>Out Come</h1>
                <p className={styles.text}>
                  In this {activeButton} project, I am responsible for the complete design, except for some graphic elements. In this project, we created a modern, futuristic landing page with neon tones. This design will attract attention with a futuristic theme while inspiring confidence in learning AI.
                </p>
              </div>
              <div className={styles.tools}>
                <h1 className={styles.head}>Tools</h1>
                <div className={styles.icon}>
                  <img src={skillfigma} alt="Figma" />
                  <img src={skillps} alt="Photoshop" />
                  <img src={skillvector} alt="Vector" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;