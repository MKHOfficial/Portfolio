import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform with shopping cart, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and drag-drop functionality.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '/api/placeholder/400/250',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive charts.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: './assets/Weather%20Template.png',
      liveLink: '#',
      githubLink: 'https://github.com/MKHOfficial/Mini-Projects/tree/main/Weather%20App%20using%20React'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>In Progress</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">Live Demo</a>
                  <a href={project.githubLink} className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
