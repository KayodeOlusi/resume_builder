import { v4 as uuidv4 } from "uuid";
import { svgs } from "../../constants";
import { TrashIcon } from "@heroicons/react/solid";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Skills = ({ formData, setFormData }: IProps) => {
  // change value of input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      skills: [
        ...prevState.skills.slice(0, index),
        { ...prevState.skills[index], [name]: value },
        ...prevState.skills.slice(index + 1),
      ],
    }));
  };

  // add a new skill to form data skills array
  const addNewSkill = () => {
    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      skills: [
        ...prevState.skills,
        {
          skillName: "",
          proficiency: "1",
          id: uuidv4(),
        },
      ],
    }));
  };

  // delete skill from form data skills array
  const deleteSkill = (index: number) => {
    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      skills: [
        ...prevState.skills.slice(0, index),
        ...prevState.skills.slice(index + 1),
      ],
    }));
  };

  return (
    <div>
      <h1 className=" text-alium text-center font-semibold px-5 md:px-0 md:text-left text-xl lg:text-2xl mt-8">
        Skills
      </h1>
      <h6 className="text-hero text-center font-semibold text-base mt-3 px-5 md:px-0 md:text-left">
        Highlight your top skills and proficiency level.
      </h6>

      {formData.skills.length ? (
        formData.skills.map((skill, index) => {
          const { id, proficiency, skillName } = skill;

          return (
            <div key={id} className="mt-12 px-5 md:px-0 md:mt-8">
              <form className="mt-8 flex space-x-2 md:space-x-8 md:justify-between md:mt-12">
                <div>
                  <p className="text-sm font-semibold text-herotext mb-3">
                    Skill Name
                  </p>
                  <input
                    type="text"
                    id="skillName"
                    name="skillName"
                    value={skillName}
                    onChange={(e) => handleChange(e, index)}
                    className=" bg-landingcard py-3 px-4 rounded-md font-semibold 
                    text-sm text-herotext w-[6rem] sm-px-8 md:w-[22rem] xl:w-[34rem]"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-herotext mb-3">
                    Proficiency
                  </p>
                  <select
                    name="proficiency"
                    id="proficiency"
                    value={proficiency}
                    onChange={(e) => handleChange(e, index)}
                    className=" bg-landingcard py-3 px-4 rounded-md font-semibold 
                    text-sm text-herotext w-fit sm:px-8 md:w-[22rem] xl:w-full"
                  >
                    <option value="1">Beginner</option>
                    <option value="2">Intermediate</option>
                    <option value="3">Advanced</option>
                    <option value="4">Expert</option>
                  </select>
                </div>
                <TrashIcon
                  className="w-6 h-6 text-red-600 cursor-pointer"
                  onClick={() => deleteSkill(index)}
                />
              </form>
            </div>
          );
        })
      ) : (
        <div className="mt-6 px-5 text-center md:text-left md:px-0">
          <p className="text-base font-semibold text-herotext mb-3">
            No skill added yet.
          </p>
        </div>
      )}
      <div className="flex items-center px-5 space-x-2 mt-4 md:px-0">
        <img src={svgs.add} alt="" className="w-4 h-4" />
        <p
          onClick={addNewSkill}
          className="text-herobtn text-sm font-semibold cursor-pointer"
        >
          Add another skill
        </p>
      </div>
    </div>
  );
};

export default Skills;
