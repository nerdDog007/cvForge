import { configureStore } from "@reduxjs/toolkit";
import createCvReducer from "./createcv";

const store = configureStore({
  reducer: {
    createCv: createCvReducer,
  },
});


export default store;