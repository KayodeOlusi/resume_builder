interface IResumeName {
  name: string;
}

interface IResumeId {
  resumeID: any;
}

interface IResumeModalState {
  modalState: boolean;
}

interface IResumeImage {
  resumeImage: string;
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

// Blog State
interface IBlogState {
  _id: string | number;
  title: string;
  author: string;
  created_at: string | number;
  tags: string[];
  body: string;
  image_url: string;
}

interface IEditedBlogState {
  _id: string | number;
  title: string;
  author: string;
  created_at: string | number;
  tags: string[];
  body: string;
  image_url: string;
  reactions: {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
  };
}

interface IReactionPayload {
  post: IEditedBlogState;
  reaction: string;
}

interface IPostToAdd {
  title: string;
  author: string | null | undefined;
  tags?: string[];
  body: string;
  image_url?: string;
}
