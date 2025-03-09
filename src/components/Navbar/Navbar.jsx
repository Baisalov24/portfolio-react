import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTabActive } from "../../redux/slices/tabSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab.activeTab);

  const sections = useMemo(
    () => ["Home", "Experience", "Skills", "Projects", "Contacts"],
    []
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    setMenuOpen((prev) => !prev);
  };

  const changeTab = (value) => {
    const section = document.getElementById(value);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    dispatch(changeTabActive(value));
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150;
      let currentSection = null;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= threshold && bottom > threshold) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeTab) {
        dispatch(changeTabActive(currentSection));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, sections, activeTab]);

  return (
    <header className="navbar">
      <div className="navbar_wrapper">
        <div className="logo">My Portfolio</div>
        <nav className={menuOpen ? "active" : ""}>
          {sections.map((value) => (
            <span
              key={value}
              className={activeTab === value ? "active" : ""}
              onClick={() => changeTab(value)}
            >
              {value}
            </span>
          ))}
        </nav>
        <div className="icon-bar" onClick={toggleNav}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
