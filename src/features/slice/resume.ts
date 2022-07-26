import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  resume: {};
}

const initialState: IUser = {
  resume: {},
};

const slice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
});

export default slice.reducer;
