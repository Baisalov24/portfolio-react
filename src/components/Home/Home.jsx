import React, { useRef } from "react";
import CustomHook from "../CustomHook/CustomHook";
import "./style.css";
import avatar from "../../assets/img/avatar.png";

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
        Results-driven Frontend Developer <br /> with 3+ years of experience in modern web technologies and a passion for creating seamless, responsive, and high-performance web applications. Experienced in developing scalable solutions using React, JavaScript, and TypeScript, with a deep understanding of UI/UX principles. Adept at working in Agile teams and collaborating with backend developers, designers, and stakeholders to deliver high-quality products.
        </div>

        <a
          href="https://github.com/Baisalov24"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Github account
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
