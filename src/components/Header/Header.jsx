// src/components/Header/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  const handleAboutMeClick = () => {
    navigate('/', { state: { scrollTo: 'aboutme' } });
  };

  const handleMyWorkClick = () => {
    navigate('/', { state: { scrollTo: 'myproject' } });
  };

  return (
    <div className={styles.container}>
      <button className={styles.aboutMe} onClick={handleAboutMeClick}>
        About Me
      </button>
      <button className={styles.myWork} onClick={handleMyWorkClick}>
        My Work
      </button>
    </div>
  );
}

export default Header;