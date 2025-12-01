import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface CreateCvState {
  objective: string;
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
  experience: Array<string>;
  projects: Array<string>;
  education: Array<string>;
}

const initialState: CreateCvState = {
  objective: "lorem ipsum skfaksd kbskjasd kasdasd aksdbaskdba kasdbaskdb aksdbasbkd", 
  contact: {
    website: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    address: ""
  },
  education: [],
  skills: [],
  name: "",
  experience: [],
  projects: [],
  description: "",
  title: "",
};

export const createCvSlice = createSlice({
  name: "createCv",
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