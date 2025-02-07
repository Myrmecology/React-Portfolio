import React from 'react';
import './Portfolio.css';
import employeeTracker from '../assets/images/employee-tracker.png';
import vehicleBuilder from '../assets/images/vehicle-builder.png';
import rockPaperScissors from '../assets/images/rock-paper-scissors.png';
import fancySite from '../assets/images/fancy-site.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';
import readmeGenerator from '../assets/images/readme-generator.png';

function Portfolio() {
  const projects = [
    {
      title: "Employee Tracker",
      image: employeeTracker,
      deployedUrl: "https://github.com/Myrmecology/employee-tracker#readme",
      githubUrl: "https://github.com/Myrmecology/employee-tracker",
      description: "A command-line application built with Node.js and MySQL that helps business owners view and manage departments, roles, and employees in their company."
    },
    {
      title: "Vehicle Builder",
      image: vehicleBuilder,
      deployedUrl: "https://github.com/Myrmecology/Vehicle-Builder#readme",
      githubUrl: "https://github.com/Myrmecology/Vehicle-Builder",
      description: "A comprehensive vehicle-building application that allows users to create custom vehicles using Node.js and SQL. Features include building, editing, and tracking custom vehicle configurations."
    },
    {
      title: "Rock Paper Scissors",
      image: rockPaperScissors,
      deployedUrl: "https://myrmecology.github.io/Rock_Paper_Scissors/",
      githubUrl: "https://github.com/Myrmecology/Rock_Paper_Scissors",
      description: "An interactive web-based Rock Paper Scissors game built with JavaScript, HTML, and CSS. Players can compete against the computer in this classic game."
    },
    {
      title: "Fancy Site",
      image: fancySite,
      deployedUrl: "https://myrmecology.github.io/Fancy-Site/",
      githubUrl: "https://github.com/Myrmecology/Fancy-Site",
      description: "A sleek and modern website showcasing advanced CSS techniques including animations, flexbox layouts, and responsive design principles."
    },
    {
      title: "Weather Dashboard",
      image: weatherDashboard,
      deployedUrl: "https://myrmecology.github.io/Weather-Dashboard/",
      githubUrl: "https://github.com/Myrmecology/Weather-Dashboard",
      description: "A dynamic weather dashboard that provides current weather conditions and 5-day forecasts for any city. Built with OpenWeather API, JavaScript, and Bootstrap."
    },
    {
      title: "README Generator",
      image: readmeGenerator,
      deployedUrl: "https://github.com/Myrmecology/README-generator#readme",
      githubUrl: "https://github.com/Myrmecology/README-generator",
      description: "A command-line application that dynamically generates professional README files for projects. Built with Node.js and Inquirer.js."
    }
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;