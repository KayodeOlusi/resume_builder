import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/slice/user";
import resumeReducer from "../features/slice/resume";

export const store = configureStore({
  reducer: {
    user: userReducer,
    resume: resumeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
