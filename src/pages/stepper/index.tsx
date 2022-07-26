import { useState } from "react";
import Education from "../../components/stepper/Education";
import Hobbies from "../../components/stepper/Hobbies";
import Personal from "../../components/stepper/Personal";
import Skills from "../../components/stepper/Skills";
import Work from "../../components/stepper/Work";

const Stepper = () => {
  const [stepperState, setStepperState] = useState<number>(1);

  const SectionDisplay = () => {
    switch (stepperState) {
      case 1:
        return <Personal />;
      case 2:
        return <Work />;
      case 3:
        return <Education />;
      case 4:
        return <Skills />;
      case 5:
        return <Hobbies />;
      default:
        return null;
    }
  };

  return <div></div>;
};

export default Stepper;
