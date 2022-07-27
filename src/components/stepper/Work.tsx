import { v4 as uuidv4 } from "uuid";
import { svgs } from "../../constants";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Work = ({ formData, setFormData }: IProps) => {
  // change value of input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      work: [
        ...prevState.work.slice(0, index),
        { ...prevState.work[index], [name]: value },
        ...prevState.work.slice(index + 1),
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
      work: [
        ...prevState.work.slice(0, index),
        { ...prevState.work[index], [name]: checked },
        ...prevState.work.slice(index + 1),
      ],
    }));
  };

  // add new work to form data work array
  const addNewWork = () => {
    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      work: [
        ...prevState.work,
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
    }));
  };

  return (
    <div>
      <h1 className=" text-alium text-center font-semibold px-5 md:px-0 md:text-left text-xl lg:text-2xl mt-8">
        Work Experience
      </h1>
      <h6 className="text-hero text-center font-semibold text-base mt-3 px-5 md:px-0 md:text-left">
        Ensure to list your companies or organizations from recent to oldest.
      </h6>

      <div>
        {formData.work.map((work, index) => {
          const {
            city,
            companyName,
            description,
            endDate,
            jobTitle,
            present,
            startDate,
            state,
            id,
          } = work;

          return (
            <div key={id} className="mt-12 px-5 md:px-0 md:mt-8">
              <hr className="mb-4" />

              <form>
                <div className="flex flex-col space-y-8 md:items-center md:space-y-0 md:justify-between md:flex-row">
                  <div>
                    <p className="text-sm font-semibold text-herotext mb-3">
                      Company Name
                    </p>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter your previous company name"
                      value={companyName}
                      className=" bg-landingcard py-3 px-8 rounded-md font-semibold 
                        text-sm text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-herotext mb-3">
                      Job Title
                    </p>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      placeholder="Enter the title of the job"
                      onChange={(e) => handleChange(e, index)}
                      value={jobTitle}
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
                      placeholder="Enter your previous company name"
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
                      placeholder="Enter the title of your job"
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
                <div className="mt-7 space-x-2">
                  <input
                    type="checkbox"
                    id="present"
                    name="present"
                    checked={present}
                    onChange={(e) => handleCheckboxChange(e, index)}
                  />
                  <label htmlFor="present">I currently work here</label>
                </div>
                <div className="mt-8 md:px-0 md:mt-10">
                  <p className="text-sm font-semibold text-herotext mb-3">
                    Job Description
                  </p>
                  <textarea
                    name="description"
                    onChange={(e) => handleChange(e, index)}
                    placeholder="Give a summary of the tasks you carried out while you held the position."
                    value={description}
                    className=" bg-landingcard rounded-md font-semibold text-sm text-herotext py-3 px-9 w-full h-40 xl:w-full xl:h-52"
                  />
                </div>
              </form>
            </div>
          );
        })}
      </div>
      <div
        className="flex items-center px-5 space-x-2 mt-4 md:px-0"
        onClick={addNewWork}
      >
        <img src={svgs.add} alt="" className="w-4 h-4" />
        <p className="text-herobtn text-sm font-semibold">
          Add another work place
        </p>
      </div>
    </div>
  );
};

export default Work;
