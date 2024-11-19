// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
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
import Preloader from '../../components/Preloader/Preloader.jsx';

// นำเข้าภาพทั้งหมดที่ต้องการ preload
import figma from '../../components/Skill/figma.svg';
import figma_ani from '../../components/Skill/figma_ani.svg';
import group42 from '../../components/Skill/Group42.svg';
import group42_ani from '../../components/Skill/Group42_ani.svg';
import group36 from '../../components/Skill/Group36.svg';
import group36_ani from '../../components/Skill/Group36_ani.svg';
import procreate from '../../components/Skill/procreate.svg';
import procreate_ani from '../../components/Skill/procreate_ani.svg';
import group37 from '../../components/Skill/Group37.svg';
import group37_ani from '../../components/Skill/Group37_ani.svg';
import unity from '../../components/Skill/unity.svg';
import unity_ani from '../../components/Skill/unity_ani.svg';

// ภาพจาก Myproject
import column1_1 from '../../components/Myproject/column1_1.svg';
import column1_1_ani from '../../components/Myproject/column1_1_ani.svg';
import column1_2 from '../../components/Myproject/column1_2.svg';
import column1_2_ani from '../../components/Myproject/column1_2_ani.svg';
import column2_1 from '../../components/Myproject/column2_1.svg';
import column2_1_ani from '../../components/Myproject/column2_1_ani.svg';
import column2_2 from '../../components/Myproject/column2_2.svg';
import column2_2_ani from '../../components/Myproject/column2_2_ani.svg';
import column2_3 from '../../components/Myproject/column2_3.svg';
import column2_3_ani from '../../components/Myproject/column2_3_ani.svg';
import column3_1 from '../../components/Myproject/column3_1.svg';
import column3_1_ani from '../../components/Myproject/column3_1_ani.svg';
import column3_2 from '../../components/Myproject/column3_2.svg';
import column3_2_ani from '../../components/Myproject/column3_2_ani.svg';
import column3_3 from '../../components/Myproject/column3_3.svg';
import column3_3_ani from '../../components/Myproject/column3_3_ani.svg';

// ภาพจาก ImageComponent
import CinqPurish from '../../components/ImageComponent/CinqPurish.svg';
// ภาพจาก CinqImage
import Cinqimg from '../../components/CinqImage/Cinqimg.svg';



const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = [
      CinqPurish,
      Cinqimg,
      figma,
      figma_ani,
      group42,
      group42_ani,
      group36,
      group36_ani,
      procreate,
      procreate_ani,
      group37,
      group37_ani,
      unity,
      unity_ani,
      column1_1,
      column1_1_ani,
      column1_2,
      column1_2_ani,
      column2_1,
      column2_1_ani,
      column2_2,
      column2_2_ani,
      column2_3,
      column2_3_ani,
      column3_1,
      column3_1_ani,
      column3_2,
      column3_2_ani,
      column3_3,
      column3_3_ani,
    ];

    const preloadImages = (imageArray) => {
      return Promise.all(
        imageArray.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    preloadImages(images)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading images', err);
        setIsLoading(false); // แม้จะมีบางภาพโหลดไม่สำเร็จ ก็ยังคงเปลี่ยนสเตตให้เป็นไม่โหลดแล้ว
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
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
          <Myproject />
        </div>
      )}
    </>
  );
};

export default Home;