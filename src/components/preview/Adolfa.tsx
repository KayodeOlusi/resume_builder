import { useCallback, useRef } from "react";
import Spinner from "react-spinkit";
import { svgs } from "../../constants";
import useResume from "../../hooks/useResume";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import ReactToPrint from "react-to-print";
import ADownload from "./download/ADownload";

const Adolfa = () => {
  const data = useResume();
  const adolfaRef = useRef<HTMLDivElement>(null);
  const image = localStorage.getItem("userImage");

  const reactToPrintContent = useCallback(() => {
    return adolfaRef?.current;
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
    <div className="relative max-w-2xl mx-auto">
      <div
        className="grid grid-cols-4 md:grid-cols-5 border-4 mb-14
        border-adolfabase"
      >
        <div className="bg-adolfa col-span-2">
          <img
            src={svgs.adolfac}
            alt=""
            className="w-16 h-16 md:w-40 md:h-40"
          />
          <div className="flex flex-col items-center -mt-10 md:-mt-24">
            <img
              src={data?.resume ? image! : svgs.thumb}
              alt=""
              className="w-20 h-20 md:w-40 md:h-40 rounded-full border-4 md:border-8 border-white"
            />
          </div>
          <div className="px-3 mt-4 md:px-5 md:mt-7">
            <h3 className="text-sm font-extrabold md:text-2xl">Contact</h3>
            <div className="contact">
              <div className="mt-3 md:mt-6 space-x-2 flex md:space-x-4 items-center">
                <PhoneIcon className="w-3 h-3 md:w-4 md:h-4 text-adolfabase" />
                <p className="text-[0.5rem]  font-semibold md:text-xs">
                  {data?.resume?.personal.phoneNumber}
                </p>
              </div>
              <div className="mt-1 md:mt-6 flex space-x-2 md:space-x-0 items-center">
                <MailIcon className="w-3 h-3 md:w-4 md:h-4 text-adolfabase" />
                <p className="text-[0.5rem] font-semibold md:text-xs md:px-5">
                  {data?.resume?.personal.email.split("@")[0]}
                </p>
              </div>
              <div className="mt-1 space-x-2 md:mt-6 flex md:space-x-4">
                <LocationMarkerIcon className="w-3 h-3 md:w-4 md:h-4 text-adolfabase" />
                <p className="font-semibold text-[0.5rem] md:text-xs">
                  {data?.resume?.personal.address}
                </p>
              </div>
            </div>
            <div className="education mt-8 md:mt-16">
              {data?.resume.education && (
                <>
                  <h3 className="font-extrabold text-sm md:text-2xl">
                    Education
                  </h3>
                  {data?.resume &&
                    data?.resume?.education.map((educate) => {
                      const {
                        id,
                        degreeObtained,
                        endDate,
                        schoolName,
                        state,
                        startDate,
                      } = educate;

                      return (
                        <div key={id} className="mt-2 md:mt-6">
                          <div className="w-fit">
                            <p className="bg-adolfabase p-1 font-bold text-white text-[0.6rem] md:text-base">
                              {startDate.split(" ")[1]} -{" "}
                              {endDate.split(" ")[1]}
                            </p>
                          </div>
                          <p className="font-semibold mt-1 text-[0.55rem] md:text-sm md:mt-3">
                            {degreeObtained}
                          </p>

                          <p className="font-semibold mt-1 text-[0.5rem] md:text-xs md:mt-3">
                            {schoolName} | {state}
                          </p>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
            <div className="skills mt-10 mb-3 md:mt-16 md:mb-7">
              {data?.resume.skills && (
                <>
                  <h3 className="font-extrabold text-sm md:text-2xl">Skills</h3>
                  <div className="grid grid-rows-5 grid-flow-col">
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
        <div className="col-span-2 md:col-span-3">
          <div className="mt-12 px-2 md:mt-24 md:px-7">
            <p className="font-bold text-sm md:text-3xl">
              {data?.resume?.personal.firstName}{" "}
              <span className="text-adolfabase">
                {data?.resume.personal.lastName}
              </span>
            </p>
            <p className="md:text-lg mt-1 text-[0.5rem] font-extrabold md:font-semibold md:mt-6">
              {data?.resume?.personal.jobTitle}
            </p>
            <div className="about mt-5 md:mt-12">
              {data?.resume.personal.professionalSummary && (
                <>
                  <p className="font-extrabold text-sm md:text-2xl">About</p>
                  <p className="md:mt-4 text-[0.5rem] mt-1 md:text-xs font-medium md:font-semibold">
                    {data?.resume?.personal.professionalSummary}
                  </p>
                </>
              )}
            </div>
            <div className="experience mt-5 md:mt-12">
              {data?.resume.work && (
                <>
                  <p className="font-extrabold text-sm md:text-2xl">
                    Work Experience
                  </p>
                  {data?.resume &&
                    data?.resume?.work.map((exp) => {
                      const {
                        id,
                        state,
                        present,
                        endDate,
                        jobTitle,
                        startDate,
                        companyName,
                        description,
                      } = exp;

                      return (
                        <div key={id} className="mt-2 md:mt-5">
                          <h6 className="font-bold text-xs md:text-lg">
                            {jobTitle}
                          </h6>
                          <p className="bg-adolfabase p-1 font-bold w-fit text-[0.6rem] md:text-base text-white">
                            {present
                              ? "Present"
                              : startDate.split(" ")[1] ===
                                endDate.split(" ")[1]
                              ? startDate.split(" ")[1]
                              : `${startDate.split(" ")[1]} - ${
                                  endDate.split(" ")[1]
                                }`}
                          </p>
                          <p className="mt-1 md:mt-2 font-semibold text-[0.6rem] md:text-sm">
                            {companyName} | {state}
                          </p>
                          <p className="mt-1 md:mt-2 font-normal text-[0.45rem] md:text-xs">
                            {description}
                          </p>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
            <div className="hobbies mt-5 mb-3 md:mt-16 md:mb-7">
              {data?.resume.hobbies && (
                <>
                  <p className="font-extrabold text-sm md:text-2xl">Hobbies</p>
                  <ul className="grid grid-rows-3 grid-flow-col">
                    {data?.resume?.hobbies.map((hob) => {
                      const { hobby, id } = hob;

                      return (
                        <li
                          key={id}
                          className="mt-1 md:mt-3 text-[0.5rem] md:text-xs font-semibold"
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
      </div>
      <div className="hidden">
        <ADownload innerRef={adolfaRef} />
      </div>
      <ReactToPrint
        documentTitle="Resume"
        content={reactToPrintContent}
        trigger={reactToPrintTrigger}
      />
    </div>
  );
};

export default Adolfa;
