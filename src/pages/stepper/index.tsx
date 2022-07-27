import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Checkbox from "../../components/stepper/Checkbox";
import Education from "../../components/stepper/Education";
import Hobbies from "../../components/stepper/Hobbies";
import Personal from "../../components/stepper/Personal";
import Skills from "../../components/stepper/Skills";
import Work from "../../components/stepper/Work";
import useViewport from "../../hooks/useViewport";

interface IStepperSections {
  title: string;
  checked: boolean;
  stepperNumber: number;
}

const Stepper = () => {
  const viewPort = useViewport();
  const [stepperState, setStepperState] = useState<number>(1);
  const stepperSections: IStepperSections[] = [
    {
      title: "Personal Information",
      checked: false,
      stepperNumber: 1,
    },
    {
      title: "Work Experience",
      checked: false,
      stepperNumber: 2,
    },
    {
      title: "Education",
      checked: false,
      stepperNumber: 3,
    },
    {
      title: "Skills",
      checked: false,
      stepperNumber: 4,
    },
    {
      title: "Hobbies",
      checked: false,
      stepperNumber: 5,
    },
  ];

  const [formData, setFormData] = useState<IFormDetails>({
    personal: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      address: "",
      email: "",
      professionalSummary: "",
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
        present: false,
      },
    ],
    skills: [
      {
        skillName: "",
        proficiency: "",
        id: uuidv4(),
      },
    ],
    hobbies: "",
  });

  const SectionDisplay = () => {
    switch (stepperState) {
      case 1:
        return <Personal formData={formData} setFormData={setFormData} />;
      case 2:
        return <Work formData={formData} setFormData={setFormData} />;
      case 3:
        return <Education formData={formData} setFormData={setFormData} />;
      case 4:
        return <Skills formData={formData} setFormData={setFormData} />;
      case 5:
        return <Hobbies formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-4 md:mt-12">
      <div className="checkbox flex items-center justify-between px-5">
        {viewPort < 768 ? (
          <Checkbox
            checked={stepperSections[stepperState].checked}
            title={stepperSections[stepperState].title}
            stepperNumber={stepperSections[stepperState].stepperNumber}
          />
        ) : (
          stepperSections.map((step) => {
            const { title, checked, stepperNumber } = step;

            return (
              <div key={stepperNumber}>
                <Checkbox
                  title={title}
                  checked={checked}
                  stepperNumber={stepperNumber}
                />
              </div>
            );
          })
        )}
      </div>
      <h1 className=" text-alium font-semibold text-xl lg:text-2xl mt-8">
        This is your Resume Heading
      </h1>
      <h6 className="text-hero font-semibold text-base mt-3">
        Information you use here will be used to contact you, by the employer.
      </h6>
      {SectionDisplay()}
    </div>
  );
};

export default Stepper;
