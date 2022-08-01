import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IUser {
  resume: {
    name: string;
    resumeID: any;
    resumeImage: string;
    resumeModalState: boolean;
  };
}

const initialState: IUser = {
  resume: {
    name: "",
    resumeID: "",
    resumeImage: "",
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
    setResumeImage: (state, action: PayloadAction<IResumeImage>) => {
      if (action.payload.resumeImage === "") {
        state.resume.resumeImage = "";
        localStorage.removeItem("userImage");
      } else {
        state.resume.resumeImage = action.payload.resumeImage;
        localStorage.setItem("userImage", action.payload.resumeImage);
      }
    },
  },
});

export default slice.reducer;
export const {
  setResumeName,
  setResumeId,
  setResumeModalState,
  setResumeImage,
} = slice.actions;
export const selectResumeId = (state: RootState) =>
  state.resume.resume.resumeID;
export const selectResumeModalState = (state: RootState) =>
  state.resume.resume.resumeModalState;
export const selectResumeImage = (state: RootState) =>
  state.resume.resume.resumeImage;
