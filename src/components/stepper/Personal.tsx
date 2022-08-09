import { svgs } from "../../constants";
import { useRef, Dispatch, ChangeEvent, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectResumeImage, setResumeImage } from "../../features/slice/resume";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Personal = ({ formData, setFormData }: IProps) => {
  const dispatch = useAppDispatch();
  const image = useAppSelector(selectResumeImage);
  const fileRef = useRef<HTMLInputElement>(null);

  // Select an Image as Profile Image
  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      readerEvent.target &&
        dispatch(
          setResumeImage({ resumeImage: String(readerEvent.target.result) })
        );
    };
  };

  // change value of input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <h1 className=" text-alium text-center font-semibold px-5 md:px-0 md:text-left text-xl lg:text-2xl mt-8">
        This is your resume heading.
      </h1>
      <h6 className="text-hero text-center font-semibold text-base mt-3 px-5 md:px-0 md:text-left">
        Information you use here will be used to contact you, by the employer.
      </h6>
      <div className="personal-info mt-10">
        <div className="flex flex-col space-y-6 items-center md:space-y-0 md:flex-row md:justify-between">
          <div className="flex flex-col space-y-4 items-center md:space-y-0 md:flex-row md:space-x-8">
            {/**Logic for selecting an image as profile picture */}
            {image ? (
              <img
                src={image}
                alt=""
                className="cursor-pointer w-40 h-40 rounded-full object-cover"
              />
            ) : (
              <div className="h-40 w-40 rounded-full relative bg-[#C8DBF4] flex items-center justify-center">
                <img src={svgs.cloud} alt="" className="w-20 h-20" />
              </div>
            )}
            <p
              className="text-alium font-semibold cursor-pointer border-b-2 border-alium"
              onClick={() => fileRef.current?.click()}
            >
              Change Profile Picture
            </p>
            <input type="file" hidden ref={fileRef} onChange={selectFile} />
          </div>
          <p
            className="text-red-600 font-semibold cursor-pointer border-b-2 border-red-600"
            onClick={() => dispatch(setResumeImage({ resumeImage: "" }))}
          >
            Delete Profile Picture
          </p>
        </div>

        <div className="mt-12 px-5 md:px-0 md:mt-8">
          <form>
            <div className="flex flex-col space-y-8 md:items-center md:space-y-0 md:justify-between md:flex-row">
              <div>
                <p className="text-sm font-semibold text-herotext mb-3">
                  First Name
                </p>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  value={formData.personal.firstName}
                  className=" bg-landingcard py-3 px-8 rounded-md font-semibold 
                  text-sm text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-herotext mb-3">
                  Last Name
                </p>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleChange}
                  value={formData.personal.lastName}
                  className=" bg-landingcard py-3 px-8 rounded-md font-semibold text-sm
                 text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-8 md:items-center md:space-y-0 md:justify-between mt-7 md:mt-10 md:flex-row">
              <div className="block">
                <p className="text-sm font-semibold text-herotext mb-3">
                  Job Title
                </p>
                <input
                  type="text"
                  name="jobTitle"
                  onChange={handleChange}
                  placeholder="Enter your job title"
                  value={formData.personal.jobTitle}
                  className=" bg-landingcard py-3 px-8 rounded-md font-semibold text-sm
                   text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                />
              </div>
              <div className="block">
                <p className="text-sm font-semibold text-herotext mb-3">
                  Phone Number
                </p>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                  value={formData.personal.phoneNumber}
                  className=" bg-landingcard py-3 px-8 rounded-md font-semibold text-sm
                   text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-8 md:items-center md:space-y-0 md:justify-between mt-7 md:mt-10 md:flex-row">
              <div className="block">
                <p className="text-sm font-semibold text-herotext mb-3">
                  Country
                </p>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  placeholder="Enter your country"
                  value={formData.personal.address}
                  className=" bg-landingcard rounded-md py-3 px-8 font-semibold
                   text-sm text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                />
              </div>
              <div className="block">
                <p className="text-sm font-semibold text-herotext mb-3">
                  Email Address
                </p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  value={formData.personal.email}
                  className=" bg-landingcard rounded-md py-3 px-8 font-semibold
                   text-sm text-herotext w-full md:w-[22rem] xl:w-[34rem]"
                />
              </div>
            </div>
            <div className="mt-8 md:px-0 md:mt-10">
              <p className="text-sm font-semibold text-herotext mb-3">
                Professional Summary
              </p>
              <textarea
                name="professionalSummary"
                onChange={handleChange}
                placeholder="Enter your professional summary"
                value={formData.personal.professionalSummary}
                className=" bg-landingcard rounded-md font-semibold text-sm text-herotext py-3 px-9 w-full h-40 xl:w-full xl:h-52"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Personal;
