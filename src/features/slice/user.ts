import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  user: {
    name: string;
    email: string;
    id: number | string;
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
    signUp: {
      reducer: (state, action: PayloadAction<IPayload>) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.id = action.payload.id;
      },
      prepare: (id: string | number, name: string, email: string) => {
        return {
          payload: {
            id,
            name,
            email,
          },
        };
      },
    },
    login: {
      reducer: (state, action: PayloadAction<IPayload>) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.id = action.payload.id;
      },
      prepare: (id: string | number, name: string, email: string) => {
        return {
          payload: {
            id,
            name,
            email,
          },
        };
      },
    },
  },
});

export default slice.reducer;
export const { signUp, login } = slice.actions;
