import React from 'react'
import styles from './Hardskill.module.css'
import Frame30 from './Frame30.svg'

function Hardskill() {
  return (
    <div className={styles.container}>
      <div className={styles.containerarea}>
        <h1 className={styles.title}>Hard Skills</h1>
        <div className={styles.imgarea}>
            <img className={styles.img} src={Frame30} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Hardskill