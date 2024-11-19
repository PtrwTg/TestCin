// src/pages/Project1/Project1.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Homebar/Homebar';
import styles from './Project1.module.css';
import Project1img from './column1_1.svg';
import Project2img from './column1_2.svg';
import Project3img from './column2_1.svg';
import Project4img from './column2_2.svg';
import Project5img from './column2_3.svg';
import Project6img from './column3_1.svg';
import Project7img from './column3_2.svg';
import Project8img from './column3_3.svg';
import skillfigma from './figma.svg';
import skillps from './Group37.svg';
import skillmiro from './Group36.svg';
import skillwix from './Group42.svg';
import skillfigmahover from './figma_ani.svg';
import skillpshover from './Group37_ani.svg';
import skillmirohover from './Group36_ani.svg';
import skillwixhover from './Group42_ani.svg';

function Project1() {
  const location = useLocation();
  const initialProject = location.state?.project || 'Unicourse Landing Page';
  const [activeButton, setActiveButton] = useState(initialProject);
  const [isFading, setIsFading] = useState(false);
  const [hoveredTool, setHoveredTool] = useState(null);

  const projects = {
    'Unicourse Landing Page': {
      projectname: 'Unicourse Landing Page',
      hashtags: ['#Landing Page', '#UX/UI Design'],
      img: Project1img,
      text: 'In this Unicourse Landing Page project, I am responsible for the complete design, except for some graphic elements. In this project, we created a modern, futuristic landing page with neon tones. This design will attract attention with a futuristic theme while inspiring confidence in learning AI.',
      tools: [
        { normal: skillfigma, hover: skillfigmahover, alt: 'Figma' },
        { normal: skillps, hover: skillpshover, alt: 'Photoshop' },
        { normal: skillmiro, hover: skillmirohover, alt: 'Miro' },
      ],
    },
    'MasterKids (In-House)': {
      projectname: 'MasterKids (In-House)',
      hashtags: ['#In-House-Page', '#UX/UI Design', '#WIX Design'],
      img: Project2img,
      text: 'Design the In-house page of MasterKids Thailand in a formal tone by using MasterKids color scheme, adjusted to appear calm and professional, while organizing elements in an orderly fashion to reflect the commitment to developing childrens skills and potential.',
      tools: [
        { normal: skillwix, hover: skillwixhover, alt: 'WIX' },
      ],
    },
    'My Old Portfolio Website': {
      projectname: 'My Old Portfolio Website',
      hashtags: ['#Portfolio Website', '#UX/UI Design '],
      img: Project3img,
      text: 'The outcome of my designed ( old ) portfolio website featuring a light background and improved a user-friendly and visually appealing platform accessible across all devices, enhancing engagement, and effectively showcasing my work to a broader audience.',
      tools: [
        { normal: skillfigma, hover: skillfigmahover, alt: 'Figma' },
        { normal: skillps, hover: skillpshover, alt: 'Photoshop' },
        { normal: skillmiro, hover: skillmirohover, alt: 'Miro' },
      ],
    },
    'Living House': {
      projectname: 'Living House',
      hashtags: ['#Web Design', '#UX/UI Design', '#Portfolio Project'],
      img: Project4img,
      text: 'This is a website project I designed for my portfolio, where I intentionally created a user-friendly experience with a visually appealing UI. The well-organized information and intuitive navigation enhance clarity, while effective assembly visualization empowers users to make informed decisions confidently, ultimately improving their overall satisfaction with the online shopping experience.',
      tools: [
        { normal: skillfigma, hover: skillfigmahover, alt: 'Figma' },
        { normal: skillps, hover: skillpshover, alt: 'Photoshop' },
        { normal: skillmiro, hover: skillmirohover, alt: 'Miro' },
      ],
    },
    '2 Hand': {
      projectname: '2 Hand',
      hashtags: ['#Application Design', '#UX/UI Design', '#Portfolio Project'],
      img: Project5img,
      text: 'This is a website project I designed for my portfolio. The site is dedicated to selling vinyl records directly from retailers, where I intentionally addressed the pain points of complex navigation and poorly organized information. This approach resulted in a streamlined user experience, improved accessibility for all users, and enhanced clarity in finding and accessing relevant information, ultimately leading to increased user engagement and satisfaction.',
      tools: [
        { normal: skillfigma, hover: skillfigmahover, alt: 'Figma' },
        { normal: skillmiro, hover: skillmirohover, alt: 'Miro' },
      ],
    },
    'Journal Mood': {
      projectname: 'Journal Mood',
      hashtags: ['#App Design', '#User Experience'],
      img: Project6img,
      text: 'This is a mobile project I designed for my portfolio. JournalMood is your personal companion for reflection and emotional well-being. I took the pain points of other diary applications and improved them, ultimately leading to the solution of JournalMood. We aimed to create a diary app that felt like a trusted friend—light-hearted yet safe. To achieve this, I selected soothing colors that provide a comfortable experience, avoiding any heavy or oppressive feelings during use.',
      tools: [
        { normal: skillfigma, hover: skillfigmahover, alt: 'Figma' },
        { normal: skillmiro, hover: skillmirohover, alt: 'Miro' },
      ],
    },
    'Pocket': {
      projectname: 'Pocket',
      hashtags: ['#Application Design', '#UX/UI Design', '#Portfolio Project'],
      img: Project7img,
      text: 'This is a mobile project I designed for my portfolio. Pocket represents a new generation of mobile banking, addressing common pain points found in some other banking apps. Its innovative solutions lead to an enhanced user experience, increased engagement, and empowered financial decision-making for users. Pocket offers a modern, intuitive design with robust features, user-centric customization, and goal-setting capabilities.',
      tools: [
        { normal: skillfigma, hover: skillfigmahover, alt: 'Figma' },
        { normal: skillmiro, hover: skillmirohover, alt: 'Miro' },
      ],
    },
    'Wonder': {
      projectname: 'Wonder',
      hashtags: ['#Application Design', '#UX/UI Design', '#Portfolio Project'],
      img: Project8img,
      text: 'This is my first mobile project designed for my portfolio. Wonder is an inclusive app created for members of the queer community who seek to forge genuine connections and meaningful friendships. We aimed to design a friendship app that focuses on interaction and conversation rather than dating. As this was my first project in the UX/UI design field, it contains some mistakes; however, I want to keep it in my portfolio to showcase my growth and development in this area.',
      tools: [
        { normal: skillfigma, hover: skillfigmahover, alt: 'Figma' },
        { normal: skillmiro, hover: skillmirohover, alt: 'Miro' },
      ],
    },
  };

  const currentProject = projects[activeButton] || projects['Unicourse Landing Page'];

  useEffect(() => {
    // เมื่อคอมโพเนนต์ Project1 ถูก mount หรือเปลี่ยนแปลง เป็นการเลื่อนหน้าจอไปที่ด้านบน
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (location.state?.project && location.state.project !== activeButton) {
      setIsFading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setActiveButton(location.state.project);
        setIsFading(false);
      }, 500); // ระยะเวลาควรตรงกับ duration ใน CSS transition
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state?.project]);

  const handleButtonClick = (btn) => {
    if (btn === activeButton) return;
    setIsFading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setActiveButton(btn);
      setIsFading(false);
    }, 500); // Duration should match the CSS transition duration
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentarea}>
        <h1 className={`${styles.projectname} ${isFading ? styles.fade : ''}`}>
          {currentProject.projectname}
        </h1>
        <div className={`${styles.hashtag} ${isFading ? styles.fade : ''}`}>
          {currentProject.hashtags.map((tag, index) => (
            <h6 key={index}>{tag}</h6>
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.projectmenu}>
              <h1 className={styles.name}>Cinq.</h1>
              <div className={styles.contact}>
                <div className={styles.email}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 24 24" width="24px" fill="#8BB0DB">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <p>phurichaya.7502@gmail.com</p>
                </div>
                <div className={styles.tel}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="#8BB0DB">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                  </svg>
                  <p>099-365-6596</p>
                </div>
              </div>
              <div className={styles.menu}>
                {Object.keys(projects).map((btn) => (
                  <button
                    key={btn}
                    className={`${styles.button} ${activeButton === btn ? styles.active : ''}`}
                    onClick={() => handleButtonClick(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <img
                className={`${styles.img} ${isFading ? styles.fade : ''}`}
                src={currentProject.img}
                alt={currentProject.projectname}
              />
            </div>
            <div className={`${styles.bottom} ${isFading ? styles.fade : ''}`}>
              <div className={styles.outcome}>
                <h1 className={styles.head}>Out Come</h1>
                <p className={styles.text}>{currentProject.text}</p>
              </div>
              <div className={styles.tools}>
                <h1 className={styles.head}>Tools</h1>
                <div className={styles.icon}>
                  {currentProject.tools.map((tool, index) => (
                    <div
                      key={index}
                      className={styles.toolWrapper}
                      onMouseEnter={() => setHoveredTool(index)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      <img
                        src={hoveredTool === index ? tool.hover : tool.normal}
                        alt={tool.alt}
                        className={styles.skillIcon}
                      />
                      {hoveredTool === index && (
                        <span className={styles.tooltip}>{tool.alt}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;