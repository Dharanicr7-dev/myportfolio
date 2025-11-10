import React from "react";
import "./about.css";
// import themepattern from '../../assets/dd.png'
import heroimg from "../../components/3.about/hero1.jpg";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={themepattern} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={heroimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Dharanidharan, a passionate Frontend
              Developer focused on crafting modern, responsive, and
              user-friendly web interfaces. I specialize in building seamless
              digital experiences using HTML, CSS, JavaScript, React, and
              Tailwind CSS. I enjoy turning creative ideas into elegant,
              functional designs that work smoothly across all devices. With a
              strong attention to detail and a drive for continuous learning, I
              strive to create clean, efficient, and visually appealing web
              solutions that elevate the user experience. I'm always learning and growing, excited to take on new challenges
              in the ever-evolving tech world.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            {/* <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Advance Java</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>My Sql</p>
              <hr style={{ width: "40%" }} />
            </div> */}
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievement">
        <div className="about-achieve">
          <h2>0+</h2>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achieve">
          <h2>3+</h2>
          <p>Completed Projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
