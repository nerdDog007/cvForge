import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface CreateCvState {
  contact: {
    website: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    address: string;
  };
  skills: Array<string>;
  name: string;
  title: string;
  description: string;
  experience: [{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }]
  projects: [{
    name: string;
    link: string;
    description: string[];
    technologies: string[];
  }];
  education:[{
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
  }];
}

const initialState: CreateCvState = {
  experience: [{
    company: "Example Corp",
    position: "Full Stack Developer",
    startDate: "2022-01",
    endDate: "2023-01",
    summary: "Lorem lorem lorem ldfds skdf  kaf kndfnksd asldkmasd aksjdnasdkn aksdnnads. lorem lorem loren.",
    highlights: ["Improved UI performance", "Built reusable components","lorem sdkfj skdfsdfewkf kwewerk kwerwer kwerhwer"],
  },{
    company: "Example Corp",
    position: "Full Stack Developer",
    startDate: "2022-01",
    endDate: "2023-01",
    summary: "Lorem lorem lorem ldfds skdf  kaf kndfnksd asldkmasd aksjdnasdkn aksdnnads. lorem lorem loren.",
    highlights: ["Improved UI performance", "Built reusable components","lorem sdkfj skdfsdfewkf kwewerk kwerwer kwerhwer"],
  }],
contact:{
  website: "https://example.com",
  email: "example@gmail.com",
  phone: "+977-9800000000",
  linkedin: "linkedin.com/in/example",
  github: "github.com/example",
  address: "Kathmandu, Nepal",
},
  education: [{
    school: "Nepal Engineering College",
    degree: "BSc. Computer Science",
    startDate: "2019",
    endDate: "2023",
  }],

  skills: ["React", "TailwindCSS", "JavaScript","Node.js","Express.js","MongoDB","PostgreSQL","MySQL"],

  name: "Sandesh Kc",

  projects:[ {
    name: "Rotten Tomatoes Clone",
    link: "https://github.com/sandeshkc/rotten-tomatoes-clone",
    description: [
      "Built a modern portfolio with animations",
      "Responsive layout using Tailwind CSS",
    ],
    technologies: ["React", "Framer Motion", "TailwindCSS"],
  }],

  description: "Highly motivated developer passionate about web technologies.asdkas kaksjdn kajsd aksdjn",
  title: "Full Stack Developer",
  currentIndex: 0,
};


export const createCvSlice = createSlice({
  name: "cvTemp",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setObjective: (state, action: PayloadAction<string>) => {
      state.objective = action.payload;
    },
    
    setContact: (state, action: PayloadAction<Partial<CreateCvState['contact']>>) => {
      state.contact = { ...state.contact, ...action.payload };
    },
    
    addSkill: (state, action: PayloadAction<string>) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action: PayloadAction<number>) => {
      state.skills.splice(action.payload, 1);
    },
    updateSkill: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.skills[action.payload.index] = action.payload.value;
    },
    setSkills: (state, action: PayloadAction<Array<string>>) => {
      state.skills = action.payload;
    },
    
    addExperience: (state, action: PayloadAction<string>) => {
      state.experience.push(action.payload);
    },
    removeExperience: (state, action: PayloadAction<number>) => {
      state.experience.splice(action.payload, 1);
    },
    updateExperience: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.experience[action.payload.index] = action.payload.value;
    },
    setExperience: (state, action: PayloadAction<Array<string>>) => {
      state.experience = action.payload;
    },
    
    addProject: (state, action: PayloadAction<string>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects.splice(action.payload, 1);
    },
    updateProject: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.projects[action.payload.index] = action.payload.value;
    },
    setProjects: (state, action: PayloadAction<Array<string>>) => {
      state.projects = action.payload;
    },
    addEducation: (state, action: PayloadAction<string>) => {
      state.education.push(action.payload);
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.education.splice(action.payload, 1);
    },
    updateEducation: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.education[action.payload.index] = action.payload.value;
    },
    setEducation: (state, action: PayloadAction<Array<string>>) => {
      state.education = action.payload;
    },
      resetCv: () => initialState,
  },
});

export const {
  setName,
  setTitle,
  setDescription,
  setObjective,
  setContact,
  addSkill,
  removeSkill,
  updateSkill,
  setSkills,
  addExperience,
  removeExperience,
  updateExperience,
  setExperience,
  addProject,
  removeProject,
  updateProject,
  setProjects,
  addEducation,
  removeEducation,
  updateEducation,
  setEducation,
  resetCv,
} = createCvSlice.actions;

export default createCvSlice.reducer;