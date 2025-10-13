import React from 'react';
import './Hero.css';
import profilePic from './Pic.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Muhammad Kamran Haider</span>
            </h1>
            <h2 className="hero-subtitle">Frontend Developer</h2>
            <p className="hero-description">
              I create beautiful, responsive web applications using modern technologies. 
              Passionate about user experience and clean code.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              {/* Replace with your image */}
              <div className="profile-image">
                <img src={profilePic} alt="My Pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;