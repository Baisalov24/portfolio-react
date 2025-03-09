import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      title: "Frontend developer",
      subtitle: "with 2+ years of experience",
      descriptionStart: "Hi, my name is Temirlan,",
      description:
        "and I am a frontend developer with 2+ years of experience in modern web technologies. I specialize in building seamless, responsive, and high-performance web applications using React, JavaScript, TypeScript, Redux Toolkit, and RTK Query. I have a strong understanding of UI/UX principles and thrive in Agile environments, collaborating with backend developers, designers, and stakeholders to deliver high-quality solutions.",
      accountName: "Github account",
    },
  ],
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
