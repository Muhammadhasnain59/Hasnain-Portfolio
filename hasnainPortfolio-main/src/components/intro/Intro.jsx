import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Mee.png.jpeg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Completed Projects</small>
            </article>
          </div>
          <p className="about__description">
            1.5 years experienced Frontend Developer React.js with a strong
            foundation in building responsive and interactive user interfaces
            using modern JavaScript technologies. Proficient in React.js, Redux,
            and modern UI libraries like Tailwind CSS and Material-UI to craft
            seamless, user-centric web applications. Experienced in integrating
            RESTful APIs, optimizing performance, and ensuring cross-browser
            compatibility. Skilled in creating reusable components, managing
            application state efficiently, and adhering to best practices in
            responsive design and accessibility. Adept at collaborating with
            backend teams to deliver cohesive and scalable full-stack solutions
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
