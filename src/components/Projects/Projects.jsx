import React, { useState } from "react";
import "./style.css";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
  const [listProjects] = useState([
    {
      name: "My project",
      des: "Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.",
      mission:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At delectus numquam id voluptatibus amet. Fugiat, praesentium id provident",
      language: "HTML5, CSS3, React JS, SockerIO,...",
      images: "/project1.PNG",
    },
    {
      name: "My project",
      des: "Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.",
      mission:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At delectus numquam id voluptatibus amet. Fugiat, praesentium id provident",
      language: "HTML5, CSS3, React JS, SockerIO,...",
      images: "/project2.PNG",
    },
    {
      name: "My project",
      des: "Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.",
      mission:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At delectus numquam id voluptatibus amet. Fugiat, praesentium id provident",
      language: "HTML5, CSS3, React JS, SockerIO,...",
      images: "/project2.PNG",
    },
  ]);
  return (
    <section className="projects">
      <div className="title">
        This is my Projects
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At delectus
          numquam id voluptatibus amet. Fugiat, praesentium id provident
          consequatur odit sit laudantium reprehenderit illum totam, eaque sequi
          corrupti labore tempore!
        </p>
      </div>
      <div className="des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur
        consequatur quisquam harum.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key}>
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
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
