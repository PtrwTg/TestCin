import React from 'react'
import styles from './Softskill.module.css'
import Frame31 from './Frame31.svg'

function Softskill() {
  return (
    <div className={styles.container}>
      <div className={styles.containerarea}>
        <h1 className={styles.title}>Soft Skills</h1>
        <div className={styles.imgarea}>
            <img className={styles.img} src={Frame31} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Softskill