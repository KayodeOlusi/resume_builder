import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/slice/user";
import resumeReducer from "../features/slice/resume";
import templateReducer from "../features/slice/template";

export const store = configureStore({
  reducer: {
    user: userReducer,
    resume: resumeReducer,
    template: templateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
