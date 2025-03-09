import { createSlice } from "@reduxjs/toolkit";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const initialState = {
  data: [
    {
      name: "HTML",
      des: "I leveraged HTML to structure web content, ensuring semantic markup for accessibility and SEO optimization. My focus on HTML5 allowed me to utilize the latest multimedia and interactive elements, making web pages more engaging and functional.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "With CSS, I styled web interfaces to match design mockups precisely, employing CSS3 features for animations, transitions, and responsive layouts. I utilized preprocessors like SASS for more efficient styling, and frameworks such as Bootstrap to speed up the development process.",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "I utilized JavaScript to add interactivity to web pages, from simple animations to complex application logic. My work included ES6+ features for cleaner code, AJAX for dynamic content loading, and JSON for data handling, significantly enhancing user experience.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "In React projects, I built reusable components to streamline development and maintain consistency across applications. I leveraged React's state management and lifecycle methods to handle dynamic data effectively, creating fast, responsive user interfaces.",
      icon: faReact,
    },
    {
      name: "Redux",
      des: "I integrated Redux into React applications for predictable state management, ensuring a unidirectional data flow and centralized state. This made debugging and testing easier, and facilitated the development of features requiring global state, like user authentication and form handling.",
    },
    {
      name: "TypeScript",
      des: "I adopted TypeScript to enhance JavaScript code reliability and maintainability, leveraging its static typing to catch errors early and ensure type safety across the application. TypeScript's features enabled more robust coding practices and improved collaboration with back-end teams.",
    },
  ],
};

const skillsSlice = createSlice({
  name: "skillsSlice",
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;
