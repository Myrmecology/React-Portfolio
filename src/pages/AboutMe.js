import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="https://avatars.githubusercontent.com/u/185717017?v=4" 
          alt="Justin" 
          className="profile-image"
        />
        <div className="bio">
          <p>
            Hello, my name is Justin Deines, and I am a dedicated web developer specializing in creating intuitive and user-centric
            interfaces. With a background in computer science and a strong passion for technology, I strive to stay at the forefront
            of the industry trends. Currently, I am working remotely as a junior web developer, where I continuosly enhance my skills 
            and contribute to building dynamic web applications. 

            
          
           
          </p>
          <p>
            I enjoy solving complex problems and turning ideas into reality through 
            code. I enjoy JavaScript, TypScript, state management systems such as Redux and React, Tailwind, Node.js, and Express.js.
            I'm always looking to learn new technologies and improve my skills. I seek to always strengthen my skills with MySQL, PostgreSQL
            MongoDB, version control testing and debugging and cloud platforms such as AWS and Google Cloud. 

            
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;