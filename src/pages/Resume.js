// Resume.js
import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>

      {/* Download Button */}
      <div className="download-section">
        <a
          href="/resume/RESUME_CLASS_PROJECT.docx"
          download
          className="download-button"
        >
          Download Full Resume
        </a>
      </div>

      {/* Resume Content */}
      <div className="resume-content">

        {/* Education Section */}
        <div className="education">
          <h3>Education</h3>
          <ul>
            <li>Harvard University – Current Student</li>
            <li>Regis University – Coursework Completed</li>
            <li>Metro University of Denver – Coursework Completed</li>
            <li>University of Denver – Coursework Completed</li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="experience">
          <h3>Professional Experience</h3>

          <div className="job">
            <h4>Operations Manager / Service Porter Manager – Automotive Operations</h4>
            <ul>
              <li>Managed daily operations and coordinated staff workflow in a luxury automotive environment.</li>
              <li>Oversaw process improvements and customer service strategies.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Computer Scientist / Software Developer</h4>
            <ul>
              <li>Designed and implemented software solutions using TypeScript, JavaScript, Java, C++, Python, Rust, and Ruby.</li>
              <li>Built web applications using MERN (MongoDB, Express, React, Node) and PERN (PostgreSQL, Express, React, Node) stacks.</li>
              <li>Developed games and interactive applications with a strong foundation in 6502 assembly and computer architecture.</li>
              <li>Assembled custom computing hardware and analyzed processor architectures for performance optimization.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Laboratory / Research Experience</h4>
            <ul>
              <li>Conducted molecular biology and chemistry laboratory experiments, maintaining strict adherence to safety and procedural standards.</li>
              <li>Applied quantitative and computational techniques to support experimental data analysis.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <ul>
            <li>Programming Languages: TypeScript, JavaScript, Java, C++, Python, Rust, Ruby, 6502 Assembly</li>
            <li>Web Development: MERN Stack, PERN Stack</li>
            <li>Game Development: Engine design, gameplay mechanics, debugging</li>
            <li>Hardware & Systems: Computer assembly, processor architecture, optimization techniques</li>
            <li>Other: Laboratory techniques in molecular biology and chemistry, mathematical modeling and data analysis</li>
          </ul>
        </div>

        {/* Projects / Portfolio Highlights */}
        <div className="projects">
          <h3>Projects / Portfolio Highlights</h3>
          <ul>
            <li>Full-stack web applications using MERN and PERN stacks</li>
            <li>Custom-built personal computers and experimental computing rigs</li>
            <li>Game development projects (2D and 3D) with modular design and interactive systems</li>
            <li>Laboratory simulations and data-driven analyses in chemistry and molecular biology</li>
          </ul>
        </div>

        {/* Professional Summary */}
        <div className="summary">
          <h3>Professional Summary</h3>
          <p>
            Multidisciplinary technologist and scientist with a strong foundation in software development, computational sciences, laboratory research, and operations management. Skilled in bridging technical and operational domains with practical and creative problem-solving. Experienced in both academic and applied environments, currently expanding expertise through advanced studies at Harvard University.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Resume;