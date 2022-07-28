import { v4 as uuidv4 } from "uuid";
import { svgs } from "../../constants";
import { TrashIcon } from "@heroicons/react/solid";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Hobbies = ({ formData, setFormData }: IProps) => {
  // change value of input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;

    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      hobbies: [
        ...prevState.hobbies.slice(0, index),
        { ...prevState.hobbies[index], [name]: value },
        ...prevState.hobbies.slice(index + 1),
      ],
    }));
  };

  // add a new hobby to form data hobbies array
  const addNewHobby = () => {
    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      hobbies: [
        ...prevState.hobbies,
        {
          hobby: "",
          id: uuidv4(),
          icon: <TrashIcon className="w-6 h-6 text-red-600" />,
        },
      ],
    }));
  };

  // delete hobby from form data hobbies array
  const deleteHobby = (index: number) => {
    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      hobbies: [
        ...prevState.hobbies.slice(0, index),
        ...prevState.hobbies.slice(index + 1),
      ],
    }));
  };

  return (
    <div>
      <h1 className=" text-alium text-center font-semibold px-5 md:px-0 md:text-left text-xl lg:text-2xl mt-8">
        Hobbies
      </h1>
      <h6 className="text-hero text-center font-semibold text-base mt-3 px-5 md:px-0 md:text-left">
        Give a list of your hobbies.
      </h6>

      {formData.hobbies.length ? (
        formData.hobbies.map((hobbyName, index) => {
          const { hobby, id, icon } = hobbyName;

          return (
            <div key={id} className="mt-12 px-5 md:px-0 md:mt-8">
              <form className="mt-8 flex space-x-2 md:space-x-8 md:justify-between md:mt-12">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-herotext mb-3">
                    Hobby
                  </p>
                  <input
                    type="text"
                    id="hobby"
                    name="hobby"
                    value={hobby}
                    onChange={(e) => handleChange(e, index)}
                    className=" bg-landingcard py-3 px-4 rounded-md font-semibold 
                    text-sm text-herotext w-[16rem] sm-px-8 md:w-[22rem] xl:w-[34rem]"
                  />
                </div>
                <div>
                  <span
                    className="cursor-pointer"
                    onClick={() => deleteHobby(index)}
                  >
                    {icon}
                  </span>
                </div>
              </form>
            </div>
          );
        })
      ) : (
        <div className="mt-6 px-5 text-center md:text-left md:px-0">
          <p className="text-base font-semibold text-herotext mb-3">
            No hobby added.
          </p>
        </div>
      )}
      <div className="flex items-center px-5 space-x-2 mt-4 md:px-0">
        <img src={svgs.add} alt="" className="w-4 h-4" />
        <p
          onClick={addNewHobby}
          className="text-herobtn text-sm font-semibold cursor-pointer"
        >
          Add a new hobby
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
