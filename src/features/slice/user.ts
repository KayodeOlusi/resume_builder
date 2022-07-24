import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  user: {
    id: number | string;
    name: string;
    email: string;
  };
}

interface IPayload {
  id: number | string;
  name: string;
  email: string;
}

const initialState: IUser = {
  user: {
    id: "",
    name: "",
    email: "",
  },
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<IPayload>) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
    },
    login: (state, action: PayloadAction<IPayload>) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
    },
  },
});

export default slice.reducer;
export const { signUp, login } = slice.actions;
