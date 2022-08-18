import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Checkbox from "../../components/stepper/Checkbox";
import Education from "../../components/stepper/Education";
import Hobbies from "../../components/stepper/Hobbies";
import Personal from "../../components/stepper/Personal";
import Skills from "../../components/stepper/Skills";
import Work from "../../components/stepper/Work";
import useViewport from "../../hooks/useViewport";
import {
  storeEducationInformation,
  storeHobbiesInformation,
  storePersonalInformation,
  storeSkillsInformation,
  storeWorkInformation,
} from "../../features/slice/template";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  selectResumeModalState,
  setResumeId,
  setResumeModalState,
} from "../../features/slice/resume";
import Modal from "../../components/stepper/Modal";
interface IStepperSections {
  title: string;
  checked: boolean;
  stepperNumber: number;
}

const Stepper = () => {
  const viewPort = useViewport();
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth);
  const modal = useAppSelector(selectResumeModalState);
  const [stepperState, setStepperState] = useState<number>(1);
  const [resumeCollections] = useCollection(query(collection(db, "resume")));
  const [stepperSections, setStepperSections] = useState<IStepperSections[]>([
    {
      title: "Personal Information",
      checked: false,
      stepperNumber: 0,
    },
    {
      title: "Work Experience",
      checked: false,
      stepperNumber: 1,
    },
    {
      title: "Education",
      checked: false,
      stepperNumber: 2,
    },
    {
      title: "Skills",
      checked: false,
      stepperNumber: 3,
    },
    {
      title: "Hobbies",
      checked: false,
      stepperNumber: 4,
    },
  ]);

  const handleCheckboxChange = (position: number) => {
    setStepperSections((prevState) =>
      prevState.map((section) =>
        section.stepperNumber === position
          ? { ...section, checked: true }
          : section
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

  const nextButtonClicked = async () => {
    if (stepperState < stepperSections.length) {
      handleCheckboxChange(stepperState - 1);
      setStepperState((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      dispatch(setResumeModalState({ modalState: true }));
      if (resumeCollections?.docs) {
        if (resumeCollections.docs.length > 0) {
          try {
            resumeCollections?.docs?.forEach(async (document) => {
              if (
                document?.data()?.user_details?.uid === user?.uid ||
                document?.data()?.user_details?.email === user?.email
              ) {
                dispatch(setResumeId({ resumeID: document.id }));
              }
            });
          } catch (err) {}
        }
      }
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
    <Fragment>
      {modal && <Modal formData={formData} />}
      <div className="mt-8 md:mt-12">
        <div className="checkbox flex items-center justify-between px-5">
          {viewPort < 768 ? (
            <Checkbox
              handleChange={handleCheckboxChange}
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
                    handleChange={handleCheckboxChange}
                  />
                </div>
              );
            })
          )}
        </div>
        {SectionDisplay()}
        <div
          className="flex flex-col space-y-6 items-center mt-10 justify-between
          md:space-y-0 md:flex-row  lg:space-y-0"
        >
          <button
            disabled={stepperState === 1}
            onClick={() => {
              setStepperState(stepperState - 1);
              window.scrollTo(0, 0);
            }}
            className={`border-2 border-hero font-semibold ${
              stepperState === 1 && "bg-slate-400"
            } text-sm w-48 py-4 rounded-md lg:w-72`}
          >
            Back
          </button>
          <button
            onClick={nextButtonClicked}
            className="w-48 text-white font-semibold whitespace-nowrap text-sm bg-herobtn py-4
            rounded-md lg:w-72"
          >
            {stepperState === stepperSections.length
              ? "Submit"
              : "Save and Next"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Stepper;
