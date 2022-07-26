import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  resume: {
    name: string;
  };
}

const initialState: IUser = {
  resume: {
    name: "",
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
  },
});

export default slice.reducer;
export const { setResumeName } = slice.actions;
