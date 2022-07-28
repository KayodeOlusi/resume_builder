import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: IFormDetails = {
  personal: {
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    address: "",
    email: "",
    professionalSummary: "",
    profilePicture: "",
  },
  work: [
    {
      companyName: "",
      jobTitle: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      present: false,
      description: "",
      id: "",
      icon: null || "",
    },
  ],
  education: [
    {
      schoolName: "",
      degreeObtained: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      id: "",
      present: false,
      icon: null || "",
    },
  ],
  skills: [
    {
      skillName: "",
      proficiency: "",
      id: "",
    },
  ],
  hobbies: "",
};

const slice = createSlice({
  name: "template",
  initialState,
  reducers: {
    storePersonalInformation: (
      state,
      action: PayloadAction<IPersonalPayload>
    ) => {
      state.personal.firstName = action.payload.firstName;
      state.personal.lastName = action.payload.lastName;
      state.personal.jobTitle = action.payload.jobTitle;
      state.personal.phoneNumber = action.payload.phoneNumber;
      state.personal.address = action.payload.address;
      state.personal.email = action.payload.email;
      state.personal.professionalSummary = action.payload.professionalSummary;
    },
  },
});

export default slice.reducer;
export const { storePersonalInformation } = slice.actions;
export const selectPersonalInformation = (state: RootState) =>
  state.template.personal;
