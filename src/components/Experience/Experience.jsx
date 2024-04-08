import React from "react";
import "./style.css";
import experienceData from "./experienceData";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Experience() {
  let workIconStyles = { background: "#eee5" };

  return (
    <div>
      <h1 className="title">My Experience</h1>
      <VerticalTimeline>
        {experienceData.map((element) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(0, 0, 0, 0.30)",
                color: "#fff",
              }}
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={{ background: "#fff", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              <p>{element.company} </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
