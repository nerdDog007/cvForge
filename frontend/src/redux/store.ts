import { configureStore } from "@reduxjs/toolkit";
import createCvReducer from "./createcv";
import  cvSlice  from "./cv";

const store = configureStore({
  reducer: {
    createCv: createCvReducer,
    cv: cvSlice,
  },
});


export default store;