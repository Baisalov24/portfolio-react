import React, { useRef } from "react";
import CustomHook from "../CustomHook/CustomHook";
import "./style.css";
import avatar from "../../assets/avatar.png";

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="Home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>Temirlan</span>
        </div>
        <div className="des">
          I'm front-end developer. As a dedicated front-end developer with over
          two years of experience, I specialize in turning complex designs into
          functional and aesthetically pleasing web applications.
        </div>

        <a
          href="https://github.com/Baisalov24"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          My Github account
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
}

export default Home;
