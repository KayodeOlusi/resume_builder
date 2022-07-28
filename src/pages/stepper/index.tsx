import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TrashIcon } from "@heroicons/react/solid";
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
      profilePicture: null,
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
        id: uuidv4(),
        icon: <TrashIcon className="w-6 h-6 text-red-600" />,
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
        id: uuidv4(),
        present: false,
        icon: <TrashIcon className="w-6 h-6 text-red-600" />,
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
    <div className="mt-8 md:mt-12">
      <div className="checkbox flex items-center justify-between px-5">
        {viewPort < 768 ? (
          <Checkbox
            title={stepperSections[stepperState - 1].title}
            checked={stepperSections[stepperState - 1].checked}
            stepperNumber={stepperSections[stepperState - 1].stepperNumber}
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
      {SectionDisplay()}
      <div className="flex flex-col space-y-6 items-center mt-10 justify-between md:space-y-0 md:flex-row  lg:space-y-0">
        <button
          disabled={stepperState === 1}
          onClick={() => {
            setStepperState(stepperState - 1);
            window.scrollTo(0, 0);
          }}
          className="border-2 border-hero font-semibold text-sm px-20 py-4 rounded-md lg:px-44"
        >
          Back
        </button>
        <button
          onClick={() => {
            if (stepperState < stepperSections.length) {
              stepperSections[stepperState - 1].checked = true;
              setStepperState((prev) => prev + 1);
              window.scrollTo(0, 0);
            }
          }}
          className="px-12 text-white font-semibold whitespace-nowrap text-sm bg-herobtn py-4 rounded-md lg:px-36"
        >
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
