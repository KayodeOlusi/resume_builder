import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { useCallback, useRef } from "react";
import Spinner from "react-spinkit";
import ReactToPrint from "react-to-print";
import { svgs } from "../../constants";
import useResume from "../../hooks/useResume";
import EDownload from "./download/EDownload";

const Empire = () => {
  const data = useResume();
  const empireRef = useRef<HTMLDivElement>(null);
  const image = localStorage.getItem("userImage");

  const reactToPrintContent = useCallback(() => {
    return empireRef?.current;
  }, []);

  const reactToPrintTrigger = useCallback(() => {
    return (
      <div className="flex items-center justify-center mt-14">
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
    <>
      <div className="relative max-w-2xl mx-auto border-4">
        <img
          src={svgs.pixel4}
          alt=""
          className="w-11 h-11 sm:w-16 sm:h-16 md:w-24 md:h-24"
        />
        <img
          src={svgs.empirer}
          alt=""
          className="w-20 -mt-11 sm:w-32 sm:-mt-16 md:-mt-24 md:w-48"
        />
        <div className="flex items-center ml-6 -mt-14 sm:ml-11 sm:-mt-24 md:ml-16 md:-mt-40 space-x-4">
          <img
            src={data.resume ? (image ? image : "") : ""}
            alt=""
            className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full"
          />
          <div className="w-64">
            <p className="font-bold text-xs md:text-base uppercase">
              {`${data?.resume.personal.firstName} ${data?.resume.personal.lastName}`}
            </p>
            <p className="text-[0.7rem] md:text-sm font-bold">
              {data?.resume.personal.jobTitle}
            </p>
            <p className="text-[0.5rem] md:text-xs">
              {data?.resume.personal.professionalSummary}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 py-4">
          <div className="flex flex-col items-center border-r-4 border-empire">
            {data?.resume.education && (
              <>
                <div className="education mt-8">
                  <h6 className="bg-empire text-xs px-4 md:px-16 rounded-sm md:text-lg w-fit text-white font-bold">
                    Education
                  </h6>
                </div>
                {data.resume.education.length > 0 &&
                  data?.resume.education.map((edu) => {
                    const {
                      id,
                      state,
                      endDate,
                      startDate,
                      degreeObtained,
                      schoolName,
                    } = edu;

                    return (
                      <div
                        key={id}
                        className="mt-5 flex items-center space-x-2 px-2 md:px-0"
                      >
                        <p className="text-[0.5rem] md:text-xs font-extrabold">
                          {startDate.split(" ")[1]} - {endDate.split(" ")[1]}
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
            <div className="work mt-16 flex flex-col items-center">
              {data?.resume.work && (
                <>
                  <h6
                    className="bg-empire text-[0.65rem] ml-[0.4rem] px-2 md:px-8 rounded-sm
                 md:text-lg w-fit text-white font-bold"
                  >
                    Work Experience
                  </h6>
                  {data?.resume.work.length > 0 &&
                    data.resume.work.map((work) => {
                      const {
                        id,
                        present,
                        startDate,
                        endDate,
                        companyName,
                        jobTitle,
                        description,
                      } = work;

                      return (
                        <div
                          key={id}
                          className="flex items-center mt-6 space-x-4 px-1 md:px-12"
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
            <div className="flex flex-col items-center">
              <div className="hobbies mt-16">
                {data?.resume.hobbies && (
                  <>
                    <h6 className="bg-empire px-6 text-xs md:px-20 rounded-sm md:text-lg w-fit text-white font-bold">
                      Hobbies
                    </h6>
                    <ul className="grid grid-rows-3 grid-flow-col gap-2">
                      {data?.resume?.hobbies.map((hob) => {
                        const { hobby, id } = hob;

                        return (
                          <li
                            key={id}
                            className="mt-1 md:mt-3 text-[0.5rem] md:text-sm font-semibold"
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
          <div className="flex items-center flex-col">
            <div className="contact mt-8 flex flex-col">
              <h6 className="text-lg font-bold">Contact</h6>
              <div className="flex space-x-3 mt-5">
                <span className="bg-empire flex justify-center items-center rounded-sm w-5 h-5 md:w-9 md:h-6">
                  <MailIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                </span>
                <p className="text-[0.5rem] md:text-xs">
                  {data?.resume.personal.email.split("@")[0]}
                </p>
              </div>
              <div className="flex space-x-3 mt-2">
                <span className="bg-empire flex justify-center items-center rounded-sm w-5 h-5 md:w-9 md:h-6">
                  <PhoneIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                </span>
                <p className="text-[0.5rem] md:text-xs">
                  {data?.resume.personal.phoneNumber}
                </p>
              </div>
              <div className="flex space-x-3 mt-2">
                <span className="bg-empire flex justify-center items-center rounded-sm w-5 h-5 md:w-9 md:h-6">
                  <LocationMarkerIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                </span>
                <p className="text-[0.5rem] md:text-xs">
                  {data?.resume.personal.address}
                </p>
              </div>
            </div>
            <div className="skills mt-16">
              {data?.resume.skills && (
                <>
                  <h6 className="text-lg font-bold">Skills</h6>
                  <div className="grid grid-rows-5 grid-flow-col gap-2">
                    {data?.resume &&
                      data?.resume?.skills.map((skill) => {
                        const { id, skillName } = skill;

                        return (
                          <p
                            key={id}
                            className="md:text-xs font-semibold mt-2 text-[0.5rem] md:mt-4"
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
        </div>
        <img
          src={svgs.pixel4}
          alt=""
          className="w-11 h-11 -mt-11 sm:w-16 sm:h-16 sm:-mt-16 md:-mt-24 md:w-24 md:h-24 right-0 absolute rotate-180"
        />
        <img
          src={svgs.empirer}
          alt=""
          className="w-20 -mt-[5.6rem] sm:w-32 sm:-mt-[9rem] md:-mt-[13.5rem] md:w-48 right-0 absolute rotate-180"
        />
        <div className="hidden">
          <EDownload innerRef={empireRef} />
        </div>
      </div>
      <ReactToPrint
        documentTitle="Resume"
        content={reactToPrintContent}
        trigger={reactToPrintTrigger}
      />
    </>
  );
};

export default Empire;
