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
import { useSpring, animated, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Box2DFactory from 'box2d-wasm';

// นำเข้าภาพทั้งหมดทีต้องการ preload
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
  const aboutMeRef = useRef(null);
  const myProjectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);
  const [box2d, setBox2d] = useState(null);
  const worldRef = useRef(null);
  const bodiesRef = useRef([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDropping, setIsDropping] = useState(false);

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
        setIsLoading(false); 
      });
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === 'aboutme' && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.state?.scrollTo === 'myproject' && myProjectRef.current) {
      myProjectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const [hashtags] = useState([
    { text: '#wireframe', color: 'lightblue' },
    { text: '#user_interface', color: 'lightgreen' },
    { text: '#user_experience', color: '#FFE5A5' },
    { text: '#prototype', color: 'lightgreen' },
    { text: '#user_journey', color: '#FFB5E8' },
    { text: '#design_system', color: '#FFD4CC' },
    { text: '#Information Architecture(IA)', color: 'lightblue' },
    { text: '#figma', color: '#FFB5E8' }
  ]);

  // ตรวจจับเมื่อ box เข้ามาในวิวพอร์ต
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // เริ่มต้น Box2D
  useEffect(() => {
    if (!isInitialized) {
      Box2DFactory().then(box2d => {
        setBox2d(box2d);
        setIsInitialized(true);
      });
    }
  }, [isInitialized]);

  // สร้างโลกฟิสิกส์เมื่อ box2d พร้อม
  useEffect(() => {
    if (!box2d || !boxRef.current || !isDropping) return;

    if (worldRef.current) {
      bodiesRef.current.forEach(body => {
        worldRef.current.DestroyBody(body);
      });
      bodiesRef.current = [];
    }

    const gravity = new box2d.b2Vec2(0, 15);
    worldRef.current = new box2d.b2World(gravity);

    const boxRect = boxRef.current.getBoundingClientRect();
    const scale = 30;

    // สร้างขอบเขต
    const walls = [
      // พื้น
      { x: boxRect.width/2, y: boxRect.height, width: boxRect.width, height: 20 },
      // ซ้าย
      { x: 0, y: boxRect.height/2, width: 20, height: boxRect.height },
      // ขวา
      { x: boxRect.width, y: boxRect.height/2, width: 20, height: boxRect.height }
    ];

    walls.forEach(wall => {
      const bodyDef = new box2d.b2BodyDef();
      bodyDef.position.Set(wall.x/scale, wall.y/scale);
      const body = worldRef.current.CreateBody(bodyDef);
      const shape = new box2d.b2PolygonShape();
      shape.SetAsBox(wall.width/(2*scale), wall.height/(2*scale));
      body.CreateFixture(shape, 0);
    });

    // สร้าง hashtags แบบสุ่มตำแหน่ง
    hashtags.forEach((tag, index) => {
      const bodyDef = new box2d.b2BodyDef();
      bodyDef.type = box2d.b2_dynamicBody;
      
      // สุ่มตำแหน่งเริ่มต้น
      const randomX = Math.random() * (boxRect.width - 100) + 50;
      const randomY = -Math.random() * 500; // เริ่มจากด้านบนที่ระดับความสูงต่างกัน
      
      bodyDef.position.Set(randomX/scale, randomY/scale);
      bodyDef.angle = Math.random() * Math.PI; // สุ่มการหมุนเริ่มต้น

      const body = worldRef.current.CreateBody(bodyDef);
      const shape = new box2d.b2PolygonShape();
      const width = tag.text.length * 4;
      shape.SetAsBox(width/scale, 15/scale);

      const fixtureDef = new box2d.b2FixtureDef();
      fixtureDef.shape = shape;
      fixtureDef.density = 1.0;
      fixtureDef.friction = 0.3;
      fixtureDef.restitution = 0.6; // เพิ่มค่าการกระเด้ง

      body.CreateFixture(fixtureDef);
      bodiesRef.current.push(body);
    });

    // อัพเดตการเคลื่อนที่
    const animate = () => {
      worldRef.current.Step(1/60, 8, 3);
      
      bodiesRef.current.forEach((body, index) => {
        const position = body.GetPosition();
        const angle = body.GetAngle();
        const element = document.getElementById(`hashtag-${index}`);
        if (element) {
          element.style.transform = `translate(${position.x * scale}px, ${position.y * scale}px) rotate(${angle}rad)`;
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (worldRef.current) {
        bodiesRef.current.forEach(body => {
          worldRef.current.DestroyBody(body);
        });
        bodiesRef.current = [];
      }
    };
  }, [box2d, isVisible, isInitialized, isDropping]);

  const handleDrop = () => {
    setIsDropping(true);
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
          <div className={styles.boxContainer}>
            <button 
              className={styles.dropButton}
              onClick={handleDrop}
              disabled={isDropping}
            >
              Drop Hashtags
            </button>
            <div ref={boxRef} className={styles.box}>
              {hashtags.map((tag, index) => (
                <div
                  key={index}
                  id={`hashtag-${index}`}
                  className={styles.hashtag}
                  style={{
                    backgroundColor: tag.color,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: isDropping ? 1 : 0
                  }}
                >
                  {tag.text}
                </div>
              ))}
            </div>
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