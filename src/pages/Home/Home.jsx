// src/pages/Home/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const aboutMeRef = useRef(null); // Reference for Aboutme
  const myProjectRef = useRef(null); // Reference for Myproject

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
        setIsLoading(false); // Even if some images fail to load, stop loading state
      });
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === 'aboutme' && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.state?.scrollTo === 'myproject' && myProjectRef.current) {
      myProjectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const hashtags = [
    { text: '#wireframe', color: 'lightblue' },
    { text: '#user_interface', color: 'lightgreen' },
    { text: '#user_experience', color: '#FFE5A5' },
    { text: '#prototype', color: 'lightgreen' },
    { text: '#user_journey', color: '#FFB5E8' },
    { text: '#design_system', color: '#FFD4CC' },
    { text: '#Information Architecture(IA)', color: 'lightblue' },
    { text: '#figma', color: '#FFB5E8' }
  ];

  // คำนวณตำแหน่งเริ่มต้นของแฮชแท็กแต่ละอัน
  const calculateInitialPositions = () => {
    const positions = [];
    const startY = 40; // ระยะห่างจากด้านบน

    // แถวที่ 1
    positions.push({ ...hashtags[0], position: { x: 50, y: startY }, isDragging: false }); // #wireframe
    positions.push({ ...hashtags[1], position: { x: 400, y: startY }, isDragging: false }); // #user_interface
    positions.push({ ...hashtags[2], position: { x: 700, y: startY }, isDragging: false }); // #user_experience
    positions.push({ ...hashtags[3], position: { x: 1000, y: startY }, isDragging: false }); // #prototype

    // แถวที่ 2
    positions.push({ ...hashtags[4], position: { x: 150, y: startY + 60 }, isDragging: false }); // #user_journey
    positions.push({ ...hashtags[5], position: { x: 300, y: startY + 60 }, isDragging: false }); // #design_system
    positions.push({ ...hashtags[6], position: { x: 600, y: startY + 60 }, isDragging: false }); // #Information Architecture(IA)
    positions.push({ ...hashtags[7], position: { x: 900, y: startY + 60 }, isDragging: false }); // #figma

    return positions;
  };

  const [draggedHashtags, setDraggedHashtags] = useState(calculateInitialPositions());

  const handleDragStart = (e, index) => {
    const newHashtags = [...draggedHashtags];
    newHashtags[index].isDragging = true;
    
    // เก็บตำแหน่งเมาส์เริ่มต้นเทียบกับ element
    const rect = e.target.getBoundingClientRect();
    newHashtags[index].offsetX = e.clientX - rect.left;
    newHashtags[index].offsetY = e.clientY - rect.top;
    
    setDraggedHashtags(newHashtags);
  };

  const handleDrag = (e, index) => {
    if (!e.clientX || !e.clientY) return;

    const boxRect = document.querySelector(`.${styles.box}`).getBoundingClientRect();
    const hashtagRect = e.target.getBoundingClientRect();

    // คำนวณตำแหน่งใหม่
    const newX = e.clientX - boxRect.left - draggedHashtags[index].offsetX;
    const newY = e.clientY - boxRect.top - draggedHashtags[index].offsetY;

    // กำหนดขอบเขตการเคลื่อนที่
    const maxX = boxRect.width - hashtagRect.width;
    const maxY = boxRect.height - hashtagRect.height;

    const newHashtags = [...draggedHashtags];
    newHashtags[index].position = {
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    };
    setDraggedHashtags(newHashtags);
  };

  const handleDragEnd = (index) => {
    const newHashtags = [...draggedHashtags];
    newHashtags[index].isDragging = false;
    setDraggedHashtags(newHashtags);
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={styles.container}>
          <Header />
          <ImageComponent />
          <div ref={aboutMeRef}>
            <Aboutme />
          </div>
          <div className={styles.box}>
            {draggedHashtags.map((tag, index) => (
              <span 
                key={index} 
                className={styles.hashtag}
                style={{
                  backgroundColor: tag.color,
                  position: 'absolute',
                  left: `${tag.position.x}px`,
                  top: `${tag.position.y}px`,
                  cursor: 'move'
                }}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, index)}
                onDrag={(e) => handleDrag(e, index)}
                onDragEnd={() => handleDragEnd(index)}
              >
                {tag.text}
              </span>
            ))}
          </div>
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
          <div ref={myProjectRef}>
            <Myproject />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;