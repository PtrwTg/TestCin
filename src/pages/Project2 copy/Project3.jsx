// src/pages/Project1/Project1.jsx
import React from 'react';
import Header from '../../components/Header/Header.jsx';
import styles from './Project3.module.css';

function Project1() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>รายละเอียดโปรเจกต์ 1</h1>
      {/* เพิ่มรายละเอียดโปรเจกต์ */}
    </div>
  );
}

export default Project1;