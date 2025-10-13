import React from 'react';
import './About.css';
import aboutpic from "./Pic2.jpg"

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate frontend developer with expertise in React.js, JavaScript, 
              and modern web technologies. I love creating intuitive and dynamic user experiences.
            </p>
            <p>
              With a strong foundation in computer science and continuous learning, 
              I stay up-to-date with the latest industry trends and best practices.
            </p>
            <div className="about-stats">
              <div className="stat">
                <p><strong>Experienced</strong></p>
              </div>
              <div className="stat">
                <p><strong>Projects Completed</strong></p>
              </div>
              <div className="stat">
                <p><strong>Happy Clients</strong></p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
                <img src={aboutpic} alt="About Pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;