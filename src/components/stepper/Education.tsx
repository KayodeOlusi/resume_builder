import { v4 as uuidv4 } from "uuid";
import { svgs } from "../../constants";
import { TrashIcon } from "@heroicons/react/solid";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Education = ({ formData, setFormData }: IProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education.slice(0, index),
        { ...prevState.education[index], [name]: value },
        ...prevState.education.slice(index + 1),
      ],
    }));
  };

  // handle onChange event handler for checkbox
  const handleCheckboxChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, checked } = e.target;

    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education.slice(0, index),
        { ...prevState.education[index], [name]: checked },
        ...prevState.education.slice(index + 1),
      ],
    }));
  };

  // add new work to form data work array
  const addNewEducation = () => {
    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          schoolName: "",
          degreeObtained: "",
          city: "",
          state: "",
          id: uuidv4(),
          startDate: "",
          endDate: "",
          present: false,
        },
      ],
    }));
  };

  // remove education from form data education array
  const removeEducation = (index: number) => {
    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education.slice(0, index),
        ...prevState.education.slice(index + 1),
      ],
    }));
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1 className=" text-alium text-center font-semibold px-5 md:px-0 md:text-left text-xl lg:text-2xl mt-8">
        Education
      </h1>
      <h6 className="text-hero text-center font-semibold text-base mt-3 px-5 md:px-0 md:text-left">
        This section shows the colleges you have attended
      </h6>

      <div>
        {formData.education.length ? (
          formData.education.map((education, index) => {
            const {
              id,
              city,
              state,
              present,
              endDate,
              startDate,
              schoolName,
              degreeObtained,
            } = education;

            return (
              <div key={id} className="mt-12 px-5 md:px-0 md:mt-8">
                <hr className="mb-4" />

                <form>
                  <div className="flex flex-col space-y-8 md:items-center md:space-y-0 md:justify-between md:flex-row">
                    <div>
                      <p className="text-sm font-semibold text-herotext mb-3">
                        School Name
                      </p>
                      <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Enter your school name"
                        value={schoolName}
                        className=" bg-landingcard py-3 px-8 rounded-md font-semibold 
                        text-sm text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-herotext mb-3">
                        Degree Obtained
                      </p>
                      <input
                        type="text"
                        id="degreeObtained"
                        name="degreeObtained"
                        placeholder="BSc, MSc, PhD, Doctor of the Magical Arts..."
                        onChange={(e) => handleChange(e, index)}
                        value={degreeObtained}
                        className=" bg-landingcard py-3 px-8 rounded-md font-semibold text-sm
                      text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-7 space-y-8 md:items-center md:space-y-0 md:justify-between md:flex-row">
                    <div>
                      <p className="text-sm font-semibold text-herotext mb-3">
                        City
                      </p>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Enter the city"
                        value={city}
                        className=" bg-landingcard py-3 px-8 rounded-md font-semibold 
                        text-sm text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-herotext mb-3">
                        State
                      </p>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter the state"
                        onChange={(e) => handleChange(e, index)}
                        value={state}
                        className=" bg-landingcard py-3 px-8 rounded-md font-semibold text-sm
                      text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-7 space-y-8 md:items-center md:space-y-0 md:justify-between md:flex-row">
                    <div>
                      <p className="text-sm font-semibold text-herotext mb-3">
                        Start Date
                      </p>
                      <input
                        type="text"
                        id="startDate"
                        name="startDate"
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Month and year"
                        value={startDate}
                        className=" bg-landingcard py-3 px-8 rounded-md font-semibold 
                        text-sm text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-herotext mb-3">
                        End Date
                      </p>
                      <input
                        type="text"
                        id="endDate"
                        name="endDate"
                        placeholder="Month and year"
                        onChange={(e) => handleChange(e, index)}
                        value={endDate}
                        className=" bg-landingcard py-3 px-8 rounded-md font-semibold text-sm
                      text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                      />
                    </div>
                  </div>
                  <div className="mt-7 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <input
                        type="checkbox"
                        id="present"
                        name="present"
                        checked={present}
                        onChange={(e) => handleCheckboxChange(e, index)}
                      />
                      <label htmlFor="present">I presently attend here</label>
                    </div>
                    <TrashIcon
                      className="w-6 h-6 text-red-600 cursor-pointer"
                      onClick={() => removeEducation(index)}
                    />
                  </div>
                </form>
              </div>
            );
          })
        ) : (
          <div className="mt-6 px-5 text-center md:text-left md:px-0">
            <p className="text-base font-semibold text-herotext mb-3">
              No education added yet.
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center px-5 space-x-2 mt-4 md:px-0">
        <img src={svgs.add} alt="" className="w-4 h-4" />
        <p
          className="text-herobtn text-sm font-semibold cursor-pointer"
          onClick={addNewEducation}
        >
          Add another education
        </p>
      </div>
    </div>
  );
};

export default Education;
