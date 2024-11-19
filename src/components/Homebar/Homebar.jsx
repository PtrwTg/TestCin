import React from 'react'
import styles from './Homebar.module.css'

function Homebar() {
  return (
    <div className={styles.container}>
      <button className={styles.Home}>Home</button>
    </div>
  )
}

export default Homebar