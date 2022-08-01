import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: IReduxState = {
  personal: {
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    address: "",
    email: "",
    professionalSummary: "",
  },
  work: [],
  education: [],
  skills: [],
  hobbies: [],
};

const slice = createSlice({
  name: "template",
  initialState,
  reducers: {
    storePersonalInformation: (
      state,
      action: PayloadAction<IPersonalPayload>
    ) => {
      state.personal = {
        ...state.personal,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        jobTitle: action.payload.jobTitle,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
        email: action.payload.email,
        professionalSummary: action.payload.professionalSummary,
      };
    },
    storeWorkInformation: (state, action: PayloadAction<IWorkPayload[]>) => {
      state.work = [...state.work, ...action.payload];
    },
    storeEducationInformation: (
      state,
      action: PayloadAction<IEducationPayload[]>
    ) => {
      state.education = [...state.education, ...action.payload];
    },
    storeSkillsInformation: (state, action: PayloadAction<ISkillPayload[]>) => {
      state.skills = [...state.skills, ...action.payload];
    },
    storeHobbiesInformation: (
      state,
      action: PayloadAction<IHobbyPayload[]>
    ) => {
      state.hobbies = [...state.hobbies, ...action.payload];
    },
  },
});

export default slice.reducer;
export const {
  storePersonalInformation,
  storeWorkInformation,
  storeEducationInformation,
  storeSkillsInformation,
  storeHobbiesInformation,
} = slice.actions;
export const selectTemplateState = (state: RootState) => state.template;
