interface IResumeName {
  name: string;
}

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
  hobbies: string;
}

interface IPersonalPayload {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  address: string;
  email: string;
  professionalSummary: string;
}
