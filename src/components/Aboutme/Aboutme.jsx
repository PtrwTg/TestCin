// src/components/Aboutme/Aboutme.jsx
import React from 'react';
import styles from './Aboutme.module.css';
import Cinqimg from './Cinqimg.svg';
import { FaArrowDown } from 'react-icons/fa';
import Resume from './resume.pdf';

function Aboutme() {
  const handleDownload = () => {
    // สร้างลิงก์ชั่วคราวเพื่อดาวน์โหลดไฟล์ PDF
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              {/* เพิ่ม onClick ที่นี่ */}
              <p className={styles.last} onClick={handleDownload} style={{ cursor: 'pointer' }}>
                Here’s my CV
              </p>
            </div>
            {/* เพิ่ม onClick ที่นี่ */}
            <button className={styles.button} onClick={handleDownload}>
              <FaArrowDown className={styles.icon} />
            </button>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.contactbottonarea}>
            <button
              className={styles.contactButton}
              onClick={() => handleClick('https://www.behance.net/190c15d9')}
            >
              Bē
              <span className={styles.tooltip}>Hello Behance 👋</span>
            </button>
            <button
              className={styles.contactButton}
              onClick={() => handleClick('https://www.linkedin.com/in/purichk/')}
            >
              in
              <span className={styles.tooltip}>Hello LinkedIn 👋</span>
            </button>
            <button
              className={styles.contactButton}
              onClick={() => handleClick('mailto:phurichaya.7502@gmail.com')}
            >
              M
              <span className={styles.tooltip}>Hello Email 👋</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;