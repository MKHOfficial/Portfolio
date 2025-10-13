import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Git/GitHub', 'MongoDb', 'MySQL'
  ];

  const tools = [
    'VS Code', 'Visual Studio', 'GitHub', 'Canva'
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          <div className="skills-section">
            <h3>Programming Languages & Frameworks</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;