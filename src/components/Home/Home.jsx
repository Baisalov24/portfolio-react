import React, { useRef } from "react";
import CustomHook from "../CustomHook/CustomHook";
import "./style.css";

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home_section" id="Home">
      <div className="content">
        <div className="name">
          Frontend developer <span>with 2+ years of experience</span>
        </div>
        <div className="des">
        Hi, my name is Temirlan, <br /> and I am a frontend developer with 2+ years of experience in modern web technologies. I specialize in building seamless, responsive, and high-performance web applications using React, JavaScript, TypeScript, Redux Toolkit, and RTK Query. I have a strong understanding of UI/UX principles and thrive in Agile environments, collaborating with backend developers, designers, and stakeholders to deliver high-quality solutions.
        </div>
        <div>
        <a
          href="https://github.com/Baisalov24"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Github account
        </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
