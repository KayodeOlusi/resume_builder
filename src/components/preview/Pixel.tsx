import { Fragment, useCallback, useRef } from "react";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import Spinner from "react-spinkit";
import ReactToPrint from "react-to-print";
import { svgs } from "../../constants";
import useResume from "../../hooks/useResume";
import PDownload from "./download/PDownload";

const Pixel = () => {
  const data = useResume();
  const pixelRef = useRef<HTMLDivElement>(null);
  const image = localStorage.getItem("userImage");

  const reactToPrintContent = useCallback(() => {
    return pixelRef?.current;
  }, []);

  const reactToPrintTrigger = useCallback(() => {
    return (
      <div className="flex items-center justify-center">
        <button
          className="w-48 text-white font-semibold whitespace-nowrap
          text-sm bg-herobtn py-4 rounded-md lg:w-72"
        >
          Download
        </button>
      </div>
    );
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center w-full">
        <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="relative max-w-2xl mx-auto border-4 mb-14">
        <Fragment>
          <img src={svgs.pixel1} alt="" className="w-full" />
          <div className="grid grid-cols-2 md:mb-1">
            <div className="flex flex-col items-center px-2 md:px-7">
              <img
                src={data?.resume ? (image ? image : svgs.thumb) : ""}
                alt=""
                className="w-20 h-20 md:w-40 md:h-40 rounded-full p-2 border-4 md:border-8 border-pixel"
              />
              <p className="font-bold text-sm md:text-2xl mt-4">
                {`${data?.resume.personal.firstName} ${data?.resume.personal.lastName}`}
              </p>
              <p className="mt-2 text-xs md:text-sm font-bold">
                {data?.resume.personal.jobTitle}
              </p>
              <p className="text-[0.5rem] px-1 md:px-0 md:text-xs font-normal mt-2">
                {data?.resume.personal.professionalSummary}
              </p>
              <div className="contact mt-6 md:mt-9 flex flex-col items-center">
                <h3 className="text-sm font-extrabold md:text-2xl">Contact</h3>
                <div className="flex space-x-3 mt-5">
                  <span
                    className="bg-pixel flex justify-center items-center w-5 h-5 md:w-9 md:h-6
                    rounded-tl-2xl rounded-br-2xl"
                  >
                    <MailIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                  </span>
                  <p className="text-[0.5rem] md:text-xs">
                    {data?.resume?.personal.email.split("@")[0]}
                  </p>
                </div>
                <div className="flex space-x-3 mt-2 w-full">
                  <span
                    className="bg-pixel flex justify-center items-center w-5 h-5 md:w-9 md:h-6
                    rounded-tl-2xl rounded-br-2xl"
                  >
                    <PhoneIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                  </span>
                  <p className="text-[0.5rem] md:text-xs">
                    {data?.resume?.personal.phoneNumber}
                  </p>
                </div>
                <div className="flex space-x-3 mt-2 w-full">
                  <span
                    className="bg-pixel flex justify-center items-center w-5 h-5 md:w-9 md:h-6
                    rounded-tl-2xl rounded-br-2xl"
                  >
                    <LocationMarkerIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                  </span>
                  <p className="text-[0.5rem] md:text-xs">
                    {data?.resume?.personal.address}
                  </p>
                </div>
              </div>
              <div className="skills mt-12">
                {data?.resume.skills && (
                  <>
                    <h3 className="text-sm font-extrabold md:text-2xl">
                      Skills
                    </h3>
                    <div className="grid grid-rows-5 grid-flow-col gap-x-2 md:gap-x-6 gap-y-2">
                      {data?.resume &&
                        data?.resume?.skills.map((skill) => {
                          const { id, skillName } = skill;

                          return (
                            <p
                              key={id}
                              className="md:text-sm font-semibold mt-2 text-[0.5rem] md:mt-4"
                            >
                              {skillName}
                            </p>
                          );
                        })}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="mt-4 flex flex-col px-2 md:px-10">
              <div className="education">
                {data?.resume.education && (
                  <>
                    <div
                      className="bg-pixel flex items-center justify-center ml-4 md:ml-0 w-20 h-6 md:w-56 md:h-10
                  mb-6 rounded-tl-2xl rounded-br-2xl"
                    >
                      <h3 className="text-[0.65rem] font-extrabold text-white md:text-xl">
                        Education
                      </h3>
                    </div>
                    {data?.resume &&
                      data.resume.education.map((educate) => {
                        const {
                          id,
                          state,
                          endDate,
                          startDate,
                          schoolName,
                          degreeObtained,
                        } = educate;

                        return (
                          <div
                            key={id}
                            className="flex items-center space-x-0 md:mt-6 md:space-x-4"
                          >
                            <p className="text-[0.5rem] md:text-xs font-extrabold">
                              {startDate.split(" ")[1]} -{" "}
                              {endDate.split(" ")[1]}
                            </p>
                            <div>
                              <p className="text-[0.6rem] md:text-xs font-bold">
                                {degreeObtained}
                              </p>
                              <p className="text-[0.5rem] md:text-[0.7rem]">
                                {schoolName} | {state}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </>
                )}
              </div>
              <div className="work mt-16">
                {data?.resume.work && (
                  <>
                    <div
                      className="bg-pixel flex items-center justify-center ml-4 md:ml-0 w-20 h-6 md:w-56 md:h-10
                  mb-6 rounded-tl-2xl rounded-br-2xl"
                    >
                      <h3 className="text-[0.6rem] p-4 font-extrabold text-white md:text-xl">
                        Work Experience
                      </h3>
                    </div>
                    {data?.resume &&
                      data.resume.work.map((exp) => {
                        const {
                          id,
                          present,
                          endDate,
                          jobTitle,
                          startDate,
                          description,
                          companyName,
                        } = exp;

                        return (
                          <div
                            key={id}
                            className="flex items-center mt-6 space-x-4"
                          >
                            <p className="text-[0.5rem] md:text-xs font-extrabold">
                              {present
                                ? "Present"
                                : startDate.split(" ")[1] ===
                                  endDate.split(" ")[1]
                                ? startDate.split(" ")[1]
                                : `${startDate.split(" ")[1]} - ${
                                    endDate.split(" ")[1]
                                  }`}
                            </p>
                            <div>
                              <p className="text-[0.6rem] md:text-xs font-bold">
                                {companyName}
                              </p>
                              <p className="text-[0.5rem] md:text-[0.7rem] font-semibold">
                                {jobTitle}
                              </p>
                              <p className="text-[0.5rem] md:text-[0.6rem]">
                                {description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </>
                )}
              </div>
              <div className="hobbies ml-4 md:ml-0">
                {data?.resume.hobbies && (
                  <>
                    <div
                      className="bg-pixel flex items-center justify-center w-20 h-6 md:w-56 md:h-10
                      mt-14 rounded-tl-2xl rounded-br-2xl"
                    >
                      <h3 className="text-[0.6rem] font-extrabold text-white md:text-xl">
                        Hobbies
                      </h3>
                    </div>
                    <ul className="grid grid-rows-3 grid-flow-col gap-2">
                      {data?.resume?.hobbies.map((hob) => {
                        const { hobby, id } = hob;

                        return (
                          <li
                            key={id}
                            className="mt-2 md:mt-3 text-[0.5rem] md:text-sm font-semibold"
                          >
                            {hobby}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
          <img src={svgs.pixel2} alt="" className="w-full" />
        </Fragment>
        <div className="hidden">
          <PDownload innerRef={pixelRef} />
        </div>
      </div>
      <ReactToPrint
        documentTitle="Resume"
        content={reactToPrintContent}
        trigger={reactToPrintTrigger}
      />
    </Fragment>
  );
};

export default Pixel;
