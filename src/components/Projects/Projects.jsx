import React, { useState, useRef } from "react";
import "./style.css";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHook from "../CustomHook/CustomHook";
import pizzaAppImg from "../../assets/pazzaAppImg.bmp";
import reactAppImg from "../../assets/reactAppImg.bmp";
import movieAppImg from "../../assets/movieAppImg.bmp";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Pizza application",
      des: "This web application, designed for pizza sales, integrates the latest tech including React, Redux for state management, and Axios for data requests from a mock API. It offers features like pizza filtering, search functionality, and pagination, providing a streamlined ordering experience. Deployed on Vercel for testing, this project showcases a modern approach to online food ordering, demonstrating scalability and user-friendly design",
      mission:
        "You can see the source code of this project on my GitHub account.",
      language: "This project was deployed on the test hosting Vercel",
      linkToCode: "https://github.com/Baisalov24/pizza-app",
      linkToApp: "https://pizza-app-theta-weld.vercel.app/",
      images: pizzaAppImg,
    },
    {
      name: "React-based application",
      des: "This React-based task management application utilizes the latest React features to offer a streamlined user experience. It includes a registration panel for user-specific task lists, dynamic pagination for easy navigation, and a search bar with sorting options for efficient task organization. Users can create and delete tasks with ease. Data fetching and manipulation are handled through Axios, ensuring smooth operation. This project combines modern web technologies and a user-focused design to enhance productivity and task management.",
      mission:
        "You can see the source code of this project on my GitHub account.",
      language: "This project was deployed on the test hosting Vercel",
      linkToCode: "https://github.com/Baisalov24/react-app",
      linkToApp: "https://react-app-eight-brown.vercel.app/login",
      images: reactAppImg,
    },
    {
      name: "Movie application",
      des: "This application serves as a dedicated platform for movie discovery, crafted entirely in vanilla JavaScript without reliance on third-party libraries. It features a robust search functionality, enabling users to effortlessly sift through a vast selection of films. The information is dynamically fetched from an open API, ensuring access to up-to-date movie data. Upon selecting a title, users are presented with a modal window that details the film's synopsis, blending functionality with a seamless user experience.",
      mission:
        "You can see the source code of this project on my GitHub account.",
      language: "This project was deployed on the test hosting Vercel",
      linkToCode: "https://github.com/Baisalov24/movie-app",
      linkToApp: "https://movie-app-sigma-sage.vercel.app/",
      images: movieAppImg,
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section ref={scrollTab} className="projects">
      <div className="title" ref={(el) => el && divs.current.push(el)}>Pet Projects</div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        In this projects I showcase a diverse array of personal initiatives
        where I've applied my skills in HTML5, CSS, JavaScript, React, and
        Redux, among others. Each project is a reflection of my commitment to
        leveraging the latest in web development technologies to create
        user-centric, innovative solutions.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <a href={value.linkToCode} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <div>
                  <a href={value.linkToCode} target="_blank">
                    <h4>Link to source code</h4>
                  </a>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <a href={value.linkToApp} target="_blank">
                    <FontAwesomeIcon icon={faEarthAmericas} />{" "}
                  </a>
                </div>
                <div>
                  <a href={value.linkToApp} target="_blank">
                    <h4>Link to the application</h4>
                  </a>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
