import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IUser {
  resume: {
    name: string;
    resumeID: any;
    resumeModalState: boolean;
  };
}

const initialState: IUser = {
  resume: {
    name: "",
    resumeID: "",
    resumeModalState: false,
  },
};

const slice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumeName: {
      reducer: (state, action: PayloadAction<IResumeName>) => {
        state.resume.name = action.payload.name;
      },
      prepare: (name: string) => {
        return {
          payload: {
            name,
          },
        };
      },
    },
    setResumeId: (state, action: PayloadAction<IResumeId>) => {
      state.resume.resumeID = action.payload.resumeID;
    },
    setResumeModalState: (state, action: PayloadAction<IResumeModalState>) => {
      state.resume.resumeModalState = action.payload.modalState;
    },
  },
});

export default slice.reducer;
export const { setResumeName, setResumeId, setResumeModalState } =
  slice.actions;
export const selectResumeId = (state: RootState) =>
  state.resume.resume.resumeID;
export const selectResumeModalState = (state: RootState) =>
  state.resume.resume.resumeModalState;
