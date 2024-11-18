import React from 'react';
import styles from './Aboutme.module.css';
import Cinqimg from './Cinqimg.svg';
import { FaArrowDown } from 'react-icons/fa';

function Aboutme() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.image} src={Cinqimg} alt="CinqImage" />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.head}>About Me</h1>
          <div className={styles.border}>
            <div className={styles.textarea}>
              <p className={styles.p}>
                Hi, I'm Cinq, a recent graduate passionate about
                UX/UI design. I'm driven to become a good
                storyteller through creating engaging and friendly
                user experiences.
              </p>
              <p className={styles.last}>Here’s my CV</p>
            </div>
            <button className={styles.button}>
              <FaArrowDown className={styles.icon} />
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.contactbottonarea}>
            <button className={styles.contactButton}>Bē</button>
            <button className={styles.contactButton}>in</button>
            <button className={styles.contactButton}>M</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;