// src/components/Homebar/Homebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Homebar.module.css';

function Homebar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <button className={styles.Home} onClick={handleHomeClick}>
        Home
      </button>
    </div>
  );
}

export default Homebar;