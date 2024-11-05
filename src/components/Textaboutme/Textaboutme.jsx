import React from 'react'
import styles from './Textaboutme.module.css'
import { FaArrowDown } from 'react-icons/fa'

function Textaboutme() {
  return (
    <div className={styles.container}>
        <h1 className={styles.Head}>Aboutme</h1>
        <div className={styles.border}>
        <div className={styles.textarea}>
        <p className={styles.text}>Hi, I'm Cinq, a recent graduate passionate about <br />
         UX/UI design. I'm driven to become a good <br />
          storyteller through creating engaging and friendly <br />
         user experiences.</p>
        <p className={styles.lasttext}>Here’s my CV</p>
        </div>
        <div className={styles.downloadbottondiv}>
         <button className={styles.downloadbutton}>
            <FaArrowDown className={styles.downloadicon} />
         </button>
        </div>
        </div>
        
    </div>
  )
}

export default Textaboutme