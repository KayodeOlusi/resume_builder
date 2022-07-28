interface IResumeName {
  name: string;
}
// Form Types
interface IFormDetails {
  personal: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    phoneNumber: string;
    address: string;
    email: string;
    professionalSummary: string;
    profilePicture: File | string | ArrayBuffer | null;
  };
  work: [
    {
      companyName: string;
      jobTitle: string;
      city: string;
      state: string;
      startDate: string;
      endDate: string;
      present: boolean;
      description: string;
      id: string | number;
    }
  ];
  education: [
    {
      schoolName: string;
      degreeObtained: string;
      city: string;
      state: string;
      startDate: string;
      endDate: string;
      id: string | number;
      present: boolean;
    }
  ];
  skills: [
    {
      skillName: string;
      proficiency: string;
      id: string | number;
    }
  ];
  hobbies: [
    {
      hobby: string;
      id: string | number;
    }
  ];
}

interface IReduxState {
  personal: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    phoneNumber: string;
    address: string;
    email: string;
    professionalSummary: string;
    profilePicture: File | string | ArrayBuffer | null;
  };
  work: IWorkPayload[];
  education: IEducationPayload[];
  skills: ISkillPayload[];
  hobbies: IHobbyPayload[];
}

// Payload types for the reducer
interface IPersonalPayload {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  address: string;
  email: string;
  professionalSummary: string;
  profilePicture: File | string | ArrayBuffer | null;
}

interface IWorkPayload {
  companyName: string;
  jobTitle: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  present: boolean;
  description: string;
  id: string | number;
}

interface IEducationPayload {
  schoolName: string;
  degreeObtained: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  id: string | number;
  present: boolean;
}

interface ISkillPayload {
  skillName: string;
  proficiency: string;
  id: string | number;
}

interface IHobbyPayload {
  hobby: string;
  id: string | number;
}
