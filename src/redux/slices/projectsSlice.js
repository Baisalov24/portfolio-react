import { createSlice } from "@reduxjs/toolkit";
import jobPortalImg from "../../assets/img/jobPortalImg.jpg";
import realtimeChatImg from "../../assets/img/realtimeChatImg.jpg";
import pizzaAppImg from "../../assets/img/pizzaAppImg.bmp";
const initialState = {
  data: [
    {
      name: "Job portal application",
      des: "Job Portal App is a full-stack MERN application designed to streamline the job search and hiring process. Built with JavaScript, TypeScript, Node.js, MongoDB, React, Express, and Auth0, this platform offers a seamless experience for both job seekers and employers. The application features secure authentication with Auth0, allowing users to create profiles, browse job listings, and apply for positions effortlessly. Employers can post, manage, and filter job listings with advanced search and sorting functionalities. Dynamic pagination ensures smooth navigation, while real-time data handling with Axios enhances performance.",
      linkToCode: "https://github.com/Baisalov24/Job-Portal-App",
      linkToApp: "https://job-portal-app-tan.vercel.app/",
      images: jobPortalImg,
    },
    {
      name: "Realtime chat application",
      des: "Real-Time Chat App is a full-stack MERN application designed for seamless and instant communication. Built with JavaScript, Node.js, MongoDB, React, Express, and Socket.io, it enables real-time messaging, secure authentication, and an intuitive user experience.Users can create accounts, join private or group chats, and exchange messages instantly with WebSocket-powered live updates. The app supports dynamic chat creation, message persistence in MongoDB, and efficient state management for a smooth experience.",
      linkToCode: "https://github.com/Baisalov24/realtime-chat-app",
      linkToApp: "https://realtime-chat-app-gmk4.onrender.com/login",
      images: realtimeChatImg,
    },
    {
      name: "Pizza application",
      des: "This web application, designed for pizza sales, integrates the latest tech including React, Redux for state management, and Axios for data requests from a mock API. It offers features like pizza filtering, search functionality, and pagination, providing a streamlined ordering experience. Deployed on Vercel for testing, this project showcases a modern approach to online food ordering, demonstrating scalability and user-friendly design",
      linkToCode: "https://github.com/Baisalov24/pizza-app",
      linkToApp: "https://pizza-app-theta-weld.vercel.app/",
      images: pizzaAppImg,
    },
  ],
};

const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
