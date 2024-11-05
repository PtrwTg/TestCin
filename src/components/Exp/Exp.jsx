import React from 'react'
import styles from './Exp.module.css'
import Group43 from './Group43.svg'

function Exp() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>My Experiences</h1>
        <div className={styles.progressarea}>
        <img className={styles.progress} src={Group43} alt="Progress" />
        </div>
        
    </div>
  )
}

export default Exp