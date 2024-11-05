import React from 'react'
import styles from './Hardskill.module.css'
import Frame30 from './Frame30.svg'

function Hardskill() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Hard Skills</h1>
        <div className={styles.imgarea}>
            <img src={Frame30} alt="" />
        </div>
    </div>
  )
}

export default Hardskill