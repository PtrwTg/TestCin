import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.buttonarea}>
        <button className={styles.buttoncontact}>Bē</button>
        <button className={styles.buttoncontact}>in</button>
        <button className={styles.buttoncontact}>M</button>
    </div>
  )
}

export default Contact