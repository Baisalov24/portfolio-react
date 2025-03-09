import React, { useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHook from "../CustomHook/CustomHook";
import "./style.css";
import { useSelector } from "react-redux";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const listSkills = useSelector((data) => data.listSkills.data);
  return (
    <section ref={scrollTab} className="skills_section" id="Skills">
      <div className="skills_title" ref={(el) => el && divs.current.push(el)}>
        Toolkit Arsenal
      </div>
      <div
        className="skills_description"
        ref={(el) => el && divs.current.push(el)}
      >
        In this section, I delve into the comprehensive suite of technologies
        and tools that have been instrumental in my journey as a front-end
        developer. From the foundational trifecta of HTML, CSS, and JavaScript,
        which forms the backbone of the web, to advanced frameworks like React
        for component-driven development and Redux for state management, each
        tool has been carefully selected and mastered to enhance functionality,
        aesthetics and user experience.
      </div>
      <div className="skills_list">
        {listSkills.map((value, key) => (
          <div
            className={"skills_item"}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="skills_item_description">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
