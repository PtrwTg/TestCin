import React from 'react';
import Header from '../../components/Header/Header.jsx';
import ImageComponent from '../../components/ImageComponent/ImageComponent.jsx';
import styles from './Home.module.css';
import CinqImage from '../../components/CinqImage/CinqImage.jsx';
import Textaboutme from '../../components/Textaboutme/Textaboutme.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Skill from '../../components/Skill/Skill.jsx';
import Exp from '../../components/Exp/Exp.jsx';
import Hardskill from '../../components/Hardskill/Hardskill.jsx';
import Softskill from '../../components/Softskill/Softskill.jsx';
import Myproject from '../../components/Myproject/Myproject.jsx';
import Aboutme from '../../components/Aboutme/Aboutme.jsx';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ImageComponent />
      <Aboutme />
      <div className={styles.box}></div>
      <div className={styles.containerdetail}>
        <div className={styles.detailleft}>
          <div className={styles.softwareskill}>
            <div className={styles.softwarearea}>
            <Skill />
            </div>
          </div>
          <div className={styles.exp}>
            <div className={styles.Exparea}>
            <Exp />
            </div>
          </div>
        </div>
        <div className={styles.detailright}>
          <div className={styles.hardskill}>
            <Hardskill />
          </div>
          <div className={styles.softskills}>
            <Softskill />
          </div>
        </div>
      </div>
      < Myproject />
    </div>
  );
};

export default Home;