import React, { useState, useRef } from "react";
import "./style.css";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHook from "../CustomHook/CustomHook";
import pizzaAppImg from "../../assets/img/pizzaAppImg.bmp";
import jobPortalImg from "../../assets/img/jobPortalImg.jpg"
import realtimeChatImg from "../../assets/img/realtimeChatImg.jpg"


function Projects() {
  const [listProjects] = useState([
    {
      name: "Job portal application",
      des: "Job Portal App is a full-stack MERN application designed to streamline the job search and hiring process. Built with JavaScript, TypeScript, Node.js, MongoDB, React, Express, and Auth0, this platform offers a seamless experience for both job seekers and employers. The application features secure authentication with Auth0, allowing users to create profiles, browse job listings, and apply for positions effortlessly. Employers can post, manage, and filter job listings with advanced search and sorting functionalities. Dynamic pagination ensures smooth navigation, while real-time data handling with Axios enhances performance.",
      mission:
        "You can see the source code of this project on my GitHub account.",
      language: "This project was deployed on the test hosting Vercel",
      linkToCode: "https://github.com/Baisalov24/Job-Portal-App",
      linkToApp: "https://job-portal-app-tan.vercel.app/",
      images: jobPortalImg,
    },
    {
      name: "Realtime chat application",
      des: "Real-Time Chat App is a full-stack MERN application designed for seamless and instant communication. Built with JavaScript, Node.js, MongoDB, React, Express, and Socket.io, it enables real-time messaging, secure authentication, and an intuitive user experience.Users can create accounts, join private or group chats, and exchange messages instantly with WebSocket-powered live updates. The app supports dynamic chat creation, message persistence in MongoDB, and efficient state management for a smooth experience.",
      mission:
        "You can see the source code of this project on my GitHub account.",
      language: "This project was deployed on the test hosting Vercel",
      linkToCode: "https://github.com/Baisalov24/realtime-chat-app",
      linkToApp: "https://realtime-chat-app-gmk4.onrender.com/login",
      images: realtimeChatImg,
    },
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
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section ref={scrollTab} className="Projects">
      <div className="title" ref={(el) => el && divs.current.push(el)}>Pet Projects</div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        In this projects I showcase a diverse array of personal initiatives
        where I've applied my skills in HTML5, CSS, JavaScript,Typescript, React, and
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
                  <a href={value.linkToCode} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <div>
                  <a href={value.linkToCode} target="_blank" rel="noreferrer">
                    <h4>Link to source code</h4>
                  </a>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <a href={value.linkToApp} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEarthAmericas} />{" "}
                  </a>
                </div>
                <div>
                  <a href={value.linkToApp} target="_blank" rel="noreferrer">
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
