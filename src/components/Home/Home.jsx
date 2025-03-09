import React, { useRef } from "react";
import CustomHook from "../CustomHook/CustomHook";
import "./style.css";
import { useSelector } from "react-redux";

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);
  const homeData = useSelector((data) => data.homeData.data);

  return (
    <section ref={scrollTab} className="home_section" id="Home">
      {homeData.map((data) => (
        <div className="content">
          <div className="name">
            {data.title} <span>{data.subtitle}</span>
          </div>
          <div className="des">
            {data.descriptionStart}
            <br /> {data.description}
          </div>
          <div>
            <a
              href="https://github.com/Baisalov24"
              target="_blank"
              rel="noopener noreferrer"
              className="animation active "
            >
              {data.accountName}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Home;
