import React from 'react';
import './Resume.css';

function Resume() {
  const frontEndSkills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node',
    'Sass',
    'Bootstrap',
    'jQuery'
  ];

  const backEndSkills = [
    'Node.js',
    'Express.js',
    'MySQL',
    'MongoDB',
    'APIs',
    'GraphQL',
    'Object-Oriented Programming',
    'Model-View-Controller'
  ];

  const professionalSkills = [
    'Team Leadership',
    'Project Management',
    'Problem Solving',
    'Safety Management',
    'Quality Control',
    'Time Management',
    'Team Facilitation',
    'Operations Management',
    'Budget Management',
    'Customer Service'
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      
      <div className="download-section">
        <a href="/path-to-your-resume.pdf" download className="download-button">
          Download Full Resume
        </a>
      </div>

      <div className="resume-content">
        <div className="objective">
          <h3>Objective</h3>
          <p>Dedicated professional seeking to leverage extensive experience in team management, quality control, and operations supervision along with newly acquired full-stack development skills to contribute to innovative web development projects.</p>
        </div>

        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>Denver University - Coding Bootcamp</li>
            <li>Regis University - Computer Science</li>
            <li>Metropolitan State University - Molecular Biology</li>
            <li>Front Range Community College - Associate of Science</li>
          </ul>
        </div>

        <div className="skills-section">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <ul>
              {frontEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills-category">
            <h3>Backend Development</h3>
            <ul>
              {backEndSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills-category">
            <h3>Professional Skills</h3>
            <ul>
              {professionalSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="experience">
          <h3>Professional Experience</h3>
          
          <div className="job">
            <h4>Mercedes-Benz of Westminster</h4>
            <p className="job-title">Service Porter</p>
            <p className="job-date">December 2022 - Present</p>
            <ul>
              <li>Facilitate maximum customer service satisfaction</li>
              <li>Manage vehicle logistics and maintenance</li>
              <li>Excel in fast-paced environment</li>
              <li>Collaborate with management for operational efficiency</li>
            </ul>
          </div>

          <div className="job">
            <h4>At Home Décor Superstore</h4>
            <p className="job-title">Key Holder/Manager</p>
            <p className="job-date">December 2016 - May 2018</p>
            <ul>
              <li>Led team management and building operations</li>
              <li>Managed inventory and warehouse logistics</li>
              <li>Operated heavy equipment and managed facility safety</li>
            </ul>
          </div>

          <div className="job">
            <h4>Butterfly Pavilion</h4>
            <p className="job-title">Operations Supervisor</p>
            <p className="job-date">May 2005 - January 2013</p>
            <ul>
              <li>Managed facility maintenance and operations</li>
              <li>Coordinated with executive leadership</li>
              <li>Managed operations budget and cash flow</li>
              <li>Received Mountain States Employers training certification</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;