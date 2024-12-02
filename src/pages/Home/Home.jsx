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
import Box2D from 'box2dweb';

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
  const [draggedBody, setDraggedBody] = useState(null);
  const mouseJointRef = useRef(null);

  // กำหนดตัวแปรสำหรับ Box2D
  const b2Vec2 = Box2D.Common.Math.b2Vec2;
  const b2BodyDef = Box2D.Dynamics.b2BodyDef;
  const b2Body = Box2D.Dynamics.b2Body;
  const b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
  const b2World = Box2D.Dynamics.b2World;
  const b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
  const b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;

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
      setBox2d(Box2D);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // สร้างโลกฟิสิกส์เมื่อ box2d พร้อม
  useEffect(() => {
    if (!isDropping) return;

    // สร้างโลกฟิสิกส์
    const gravity = new b2Vec2(0, 30);
    const world = new b2World(gravity, true);
    worldRef.current = world;

    const scale = 30;
    const boxRect = boxRef.current.getBoundingClientRect();

    // สร้างขอบเขต (พื้นและขอบ)
    const walls = [
      // พื้น - ยยู่ที่ด้านล่างของ .box
      { x: boxRect.width/2, y: boxRect.height, w: boxRect.width, h: 20 },
      // ซ้าย
      { x: 0, y: boxRect.height/2, w: 20, h: boxRect.height },
      // ขวา
      { x: boxRect.width, y: boxRect.height/2, w: 20, h: boxRect.height }
    ];

    walls.forEach(wall => {
      const bodyDef = new b2BodyDef();
      bodyDef.position.Set(wall.x/scale, wall.y/scale);
      const body = world.CreateBody(bodyDef);
      const shape = new b2PolygonShape();
      shape.SetAsBox(wall.w/(2*scale), wall.h/(2*scale));
      body.CreateFixture2(shape, 0);
    });

    // สร้าง hashtag bodies
    hashtags.forEach((tag, index) => {
      const bodyDef = new b2BodyDef();
      bodyDef.type = b2Body.b2_dynamicBody;
      bodyDef.position.Set(
        (50 + index * 100) / scale,
        -(Math.random() * 100) / scale
      );

      const body = world.CreateBody(bodyDef);
      const shape = new b2PolygonShape();
      const width = tag.text.length * 3;
      shape.SetAsBox(width/scale, 15/scale);

      const fixtureDef = new b2FixtureDef();
      fixtureDef.shape = shape;
      fixtureDef.density = 1.0;
      fixtureDef.friction = 0.3;
      fixtureDef.restitution = 0.8;
      body.CreateFixture(fixtureDef);
      bodiesRef.current.push(body);
    });

    // อัพเดตการเคลื่อนที่
    const animate = () => {
      world.Step(1/60, 10, 10);
      world.ClearForces();

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
  }, [isDropping]);

  const handleDrop = () => {
    setIsDropping(true);
  };

  const handleMouseDown = (e, index) => {
    if (!worldRef.current || !bodiesRef.current[index]) return;

    const body = bodiesRef.current[index];
    const boxRect = boxRef.current.getBoundingClientRect();
    const scale = 30;

    const groundBody = worldRef.current.CreateBody(new b2BodyDef());
    const mouseJointDef = new b2MouseJointDef();

    mouseJointDef.bodyA = groundBody;
    mouseJointDef.bodyB = body;
    mouseJointDef.target.Set(
      (e.clientX - boxRect.left) / scale,
      (e.clientY - boxRect.top) / scale
    );
    mouseJointDef.maxForce = 2000000.0;
    mouseJointDef.frequencyHz = 30.0;
    mouseJointDef.dampingRatio = 1.0;

    mouseJointRef.current = worldRef.current.CreateJoint(mouseJointDef);
    setDraggedBody(body);

    // ปิดแรงโน้มถ่วงและความเฉื่อยขณะลาก
    body.SetGravityScale(0);
    body.SetAngularVelocity(0);
    body.SetLinearVelocity(new b2Vec2(0, 0));
  };

  const handleMouseMove = (e) => {
    if (!mouseJointRef.current || !draggedBody) return;

    const boxRect = boxRef.current.getBoundingClientRect();
    const scale = 30;
    
    // อัพเดตตำแหน่งเป้าหมายของ mouseJoint
    mouseJointRef.current.SetTarget(new b2Vec2(
      (e.clientX - boxRect.left) / scale,
      (e.clientY - boxRect.top) / scale
    ));
    
    // รีเซ็ตความเร็วเพื่อป้องกันการเคลื่อนที่ที่ไม่ต้องการ
    draggedBody.SetAngularVelocity(0);
    draggedBody.SetLinearVelocity(new b2Vec2(0, 0));
  };

  const handleMouseUp = () => {
    if (!worldRef.current || !mouseJointRef.current || !draggedBody) return;

    worldRef.current.DestroyJoint(mouseJointRef.current);
    mouseJointRef.current = null;
    
    // ทืนค่าแรงโน้มถ่วงกลับเป็นปกติ
    draggedBody.SetGravityScale(1);
    draggedBody.SetAwake(true);
    setDraggedBody(null);
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
                    opacity: isDropping ? 1 : 0,
                    cursor: 'grab'
                  }}
                  onMouseDown={(e) => handleMouseDown(e, index)}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
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