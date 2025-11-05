import "./portfolio.css";
import IMG1 from "../../assets/Docurious.png";
import IMG2 from "../../assets/RXClinics.jpeg";
import IMG3 from "../../assets/osadoadmin.png";
import IMG6 from "../../assets/bussinessowers.png";
import IMG4 from "../../assets/Veriport.png";
import IMG5 from "../../assets/remember me .png";
import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "DoCurious",
      img: IMG1,
      description:
        "Discover new experiences, create group challenges, and earn rewards through an interactive community platform.",
      technologies: "React JS | Chakra UI | React Query | Redux Toolkit",
      link: "https://portal.docurious.com/home-page/",
    },
     {
      id: 2,
      title: "Remember Me Memorial",
      img: IMG5,
      description:
        "A heartfelt platform designed to preserve and share the last memories of loved ones. Each memorial includes a unique QR code placed on the grave, allowing families and visitors to view cherished moments and tributes online.",
      technologies:
        "React JS | Typescript | Tailwind CSS | Axios | Tanstack React Query | Framer Motion | React Router",
      link: "https://remember-me-memorial-staging.netlify.app/",
    },
    {
      id: 3,
      title: "Osado Admin Portal",
      img: IMG3,
      description:
        "An advanced admin dashboard built for managing influencer events, services, categories, and subcategories — enabling seamless coordination and data control for Osado’s platform.",
      technologies: "Next JS | Typescript | Tailwind CSS | Shadcn UI | Axios | React Query| React Hook Form | Zod | Zustand",
      link: "http://3.29.235.229/login",
    },
    {
      id: 4,
      title: "Osado Business Owner",
      img: IMG6,
      description:
        "A business management portal for influencers and service providers to schedule events, publish their offerings, and collaborate within the Osado ecosystem.",
      technologies: "Next JS | Typescript | Tailwind CSS | Shadcn UI | Axios | React Query| React Hook Form | Zod | Zustand",
      link: "https://osado-business-owner.pages.dev/",
    },
    {
      id: 5,
      title: "Veriport",
      img: IMG4,
      description:
        "A secure, cloud-based reporting platform for managing and tracking drug and alcohol testing with advanced analytics.",
      technologies: "Vue.js | Vuetify 3 | Pinia",
      link: "https://dev-2.veriport.app/",
    },
    {
      id: 6,
      title: "RxClinic",
      img: IMG2,
      description:
        "A medical web application providing detailed information about medicines, doctors, and diseases to support patient care.",
      technologies:
        "React JS | Tailwind CSS | TanStack React Query | AOS | Yup",
      link: "https://fs-code-task-two.vercel.app/",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>

            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p className="portfolio__description">{pro.description}</p>
              <p className="portfolio__tech">{pro.technologies}</p>
            </div>

            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary full-width-btn"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
