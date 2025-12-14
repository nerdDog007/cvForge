import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,

  name: "",
  title: "",
  description: "  ",

  contact: {
    website: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    address: "",
  },

  skills: [],

  experience: [
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: ["", "", "", "", ""],
    },
  ],

  projects: [
    {
      name: " ",
      link: "",
      description: [""],
      technologies: ["","","","","",""],
    },
  ],

  education: [
    {
      school: "",
      degree: "",
      startDate:"",
      endDate: "",
    },
  ],
};

const createCvSlice = createSlice({
  name: "createCv",
  initialState,
  reducers: {
    indexIncr: (state) => {
      state.currentIndex++;
    },
    indexDecr: (state) => {
      state.currentIndex--;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },

    setContact: (state, action) => {
      state.contact = { ...state.contact, ...action.payload };
    },

    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    updateSkill: (state, action) => {
      const { index, value } = action.payload;
      state.skills[index] = value;
    },
    removeSkill: (state, action) => {
      state.skills.splice(action.payload, 1);
    },

    addExperience: (state) => {
      state.experience.push({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: [""],
      });
    },

    removeExperience: (state, action) => {
      state.experience.splice(action.payload, 1);
    },

    updateExperience: (state, action) => {
      const { index, value } = action.payload;
      state.experience[index] = { ...state.experience[index], ...value };
    },

    addProject: (state) => {
      state.projects.push({
        name: "",
        link: "",
        description: [""],
        technologies: [""],
      });
    },
    updateProject: (state, action) => {
      const { index, value } = action.payload;
      state.projects[index] = { ...state.projects[index], ...value };
    },
    removeProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },

    addEducation: (state) => {
      state.education.push({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      });
    },
    updateEducation: (state, action) => {
      const { index, value } = action.payload;
      state.education[index] = { ...state.education[index], ...value };
    },
    removeEducation: (state, action) => {
      state.education.splice(action.payload, 1);
    },

    resetCv: () => initialState,
  },
});

export const {
  setName,
  setTitle,
  setDescription,
  setContact,
  setSkills,
  addSkill,
  updateSkill,
  removeSkill,
  addExperience,
  updateExperience,
  removeExperience,
  addProject,
  updateProject,
  removeProject,
  addEducation,
  updateEducation,
  removeEducation,
  resetCv,
  indexIncr,
  indexDecr,
} = createCvSlice.actions;

export default createCvSlice.reducer;
