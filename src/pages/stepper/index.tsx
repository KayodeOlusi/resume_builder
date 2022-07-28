import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Checkbox from "../../components/stepper/Checkbox";
import Education from "../../components/stepper/Education";
import Hobbies from "../../components/stepper/Hobbies";
import Personal from "../../components/stepper/Personal";
import Skills from "../../components/stepper/Skills";
import Work from "../../components/stepper/Work";
import useViewport from "../../hooks/useViewport";
import { useAppDispatch } from "../../app/hooks";
import {
  storeEducationInformation,
  storeHobbiesInformation,
  storePersonalInformation,
  storeSkillsInformation,
  storeWorkInformation,
} from "../../features/slice/template";
interface IStepperSections {
  title: string;
  checked: boolean;
  stepperNumber: number;
}

const Stepper = () => {
  const viewPort = useViewport();
  const dispatch = useAppDispatch();
  const [stepperState, setStepperState] = useState<number>(1);
  const [stepperSections, setStepperSections] = useState<IStepperSections[]>([
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
  ]);

  const handleCheckboxChange = (position: number) => {
    setStepperSections((prevState) =>
      prevState.map((section, index) =>
        index === position ? { ...section, checked: true } : section
      )
    );
  };

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
      },
    ],
    skills: [
      {
        skillName: "",
        proficiency: "1",
        id: uuidv4(),
      },
    ],
    hobbies: [
      {
        hobby: "",
        id: uuidv4(),
      },
    ],
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

  const nextButtonClicked = () => {
    if (stepperState < stepperSections.length) {
      handleCheckboxChange(stepperState - 1);
      setStepperState((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
    // Store the data in the store based on the stepper form state
    switch (stepperState) {
      case 1:
        dispatch(storePersonalInformation(formData.personal));
        break;
      case 2:
        let { work } = formData;
        dispatch(storeWorkInformation(work));
        break;
      case 3:
        let { education } = formData;
        dispatch(storeEducationInformation(education));
        break;
      case 4:
        let { skills } = formData;
        dispatch(storeSkillsInformation(skills));
        break;
      case 5:
        let { hobbies } = formData;
        dispatch(storeHobbiesInformation(hobbies));
        break;
      default:
        break;
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
          className="border-2 border-hero font-semibold text-sm w-48 py-4 rounded-md lg:w-72"
        >
          Back
        </button>
        <button
          onClick={nextButtonClicked}
          className="w-48 text-white font-semibold whitespace-nowrap text-sm bg-herobtn py-4 rounded-md lg:w-72"
        >
          {stepperState === stepperSections.length ? "Submit" : "Save and Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
