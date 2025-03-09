import React, { useRef } from "react";
import "./style.css";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHook from "../CustomHook/CustomHook";
import { useSelector } from "react-redux";

function Projects() {
  const listProjects = useSelector((data) => data.listProjects.data);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section ref={scrollTab} className="projects_section" id="Projects">
      <div className="projects_title" ref={(el) => el && divs.current.push(el)}>
        Pet Projects
      </div>
      <div
        className="projects_description"
        ref={(el) => el && divs.current.push(el)}
      >
        In this projects I showcase a diverse array of personal initiatives
        where I've applied my skills in HTML5, CSS, JavaScript,Typescript,
        React, and Redux, among others. Each project is a reflection of my
        commitment to leveraging the latest in web development technologies to
        create user-centric, innovative solutions.
      </div>
      <div className="projects_list">
        {listProjects.map((value, key) => (
          <div
            className="project_item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="project_images">
              <img src={value.images} alt="" />
            </div>
            <div className="project_content">
              <h3>{value.name}</h3>
              <div className="project_description">{value.des}</div>
              <div className="project_mission">
                <div>
                  <a href={value.linkToCode} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <div>
                  <a href={value.linkToCode} target="_blank" rel="noreferrer">
                    <h4>Link to source code</h4>
                  </a>
                </div>
              </div>
              <div className="project_mission">
                <div>
                  <a href={value.linkToApp} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEarthAmericas} />{" "}
                  </a>
                </div>
                <div>
                  <a
                    href={value.linkToApp}
                    className="project_mission_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>Link to the application</h4>
                  </a>
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
