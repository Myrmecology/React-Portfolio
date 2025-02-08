import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: "Employee Tracker",
      image: require("../assets/images/employee-tracker.png"),
      githubUrl: "https://github.com/Myrmecology/employee-tracker",
      description: "A command-line application built with Node.js and MySQL that helps business owners view and manage departments, roles, and employees in their company."
    },
    {
      title: "Vehicle Builder",
      image: require("../assets/images/vehicle-builder.png"),
      githubUrl: "https://github.com/Myrmecology/Vehicle-Builder",
      description: "A comprehensive vehicle-building application that allows users to create custom vehicles using Node.js and SQL. Features include building, editing, and tracking custom vehicle configurations."
    },
    {
      title: "Rock Paper Scissors",
      image: require("../assets/images/rock-paper-scissors.png"),
      githubUrl: "https://github.com/Myrmecology/Rock_Paper_Scissors",
      description: "An interactive web-based Rock Paper Scissors game built with JavaScript, HTML, and CSS. Players can compete against the computer in this classic game."
    },
    {
      title: "Fancy Site",
      image: require("../assets/images/fancy-site.png"),
      githubUrl: "https://github.com/Myrmecology/Fancy-Site",
      description: "A sleek and modern website showcasing advanced CSS techniques including animations, flexbox layouts, and responsive design principles."
    },
    {
      title: "Weather Dashboard",
      image: require("../assets/images/weather-dashboard.png"),
      githubUrl: "https://github.com/Myrmecology/Weather-Dashboard",
      description: "A dynamic weather dashboard that provides current weather conditions and 5-day forecasts for any city. Built with OpenWeather API, JavaScript, and Bootstrap."
    },
    {
      title: "README Generator",
      image: require("../assets/images/readme-generator.png"),
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