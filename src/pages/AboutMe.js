// AboutMe.js
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
            Hello! I'm Justin, a junior full-stack developer with a growing expertise in
            crafting dynamic and complex web applications. With a solid foundation in modern 
            development technologies, I am focused on building scalable and maintainable solutions
            that contribute to real-world applications. 
            
            
          </p>
          <p>
            My primary area of focus is the MERN stack (MongoDB, Express.js, React.js, Node.js), which allows me to
            create seamless, full-stack applications using JavaScript. Through MERN, I have honed my ability to
            develop efficient, data-driven applications, from server-side logic to the dynamic user interfaces.
            
            
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;