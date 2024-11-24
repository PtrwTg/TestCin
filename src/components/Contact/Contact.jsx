// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.buttonarea}>
      <button
        className={styles.buttoncontact}
        onClick={() => handleClick('https://www.behance.net/190c15d9')}
      >
        Bē
      </button>
      <button
        className={styles.buttoncontact}
        onClick={() => handleClick('https://www.linkedin.com/in/purichk/')}
      >
        in
      </button>
      <button
        className={styles.buttoncontact}
        onClick={() => handleClick('mailto:phurichaya.7502@gmail.com')}
      >
        M
      </button>
    </div>
  );
}

export default Contact;