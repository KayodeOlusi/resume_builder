import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { FC, useCallback, useRef } from "react";
import Spinner from "react-spinkit";
import ReactToPrint from "react-to-print";
import { svgs } from "../../constants";
import useResume from "../../hooks/useResume";
import GDownload from "./download/GDownload";

const GemHeart: FC = () => {
  const data = useResume();
  const gemRef = useRef<HTMLDivElement>(null);
  const image = localStorage.getItem("userImage");

  const reactToPrintContent = useCallback(() => {
    return gemRef?.current;
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
      <div className="grid grid-cols-4 border-4 mb-14 border-gemheart">
        <div className="col-span-2">
          <img
            src={svgs.gemheartc}
            alt=""
            className="w-16 h-16 md:w-40 md:h-40"
          />
          <div className="flex items-center flex-col -mt-1 md:-mt-6">
            <img
              alt=""
              src={data?.resume ? (image ? image : svgs.thumb) : ""}
              className="w-20 h-20 md:w-40 md:h-40 rounded-full"
            />
          </div>
          <div className="px-3 mt-4 md:px-7 md:mt-7">
            <h3 className="text-sm font-extrabold md:text-2xl">Contact</h3>
            <div className="contact">
              <div className="mt-3 md:mt-4 space-x-2 flex md:space-x-4 items-center">
                <PhoneIcon className="w-3 h-3 md:w-6 md:h-6 text-gemheartbase" />
                <p className="text-[0.5rem]  font-semibold md:text-sm">
                  {data?.resume?.personal.phoneNumber}
                </p>
              </div>
              <div className="mt-1 md:mt-4 flex space-x-2 md:space-x-0 items-center">
                <MailIcon className="w-3 h-3 md:w-6 md:h-6 text-gemheartbase" />
                <p className="text-[0.5rem] font-semibold md:text-sm md:px-5">
                  {data?.resume?.personal.email.split("@")[0]}
                </p>
              </div>
              <div className="mt-1 space-x-2 md:mt-4 flex md:space-x-4">
                <LocationMarkerIcon className="w-3 h-3 md:w-6 md:h-6 text-gemheartbase" />
                <p className="font-semibold text-[0.5rem] md:text-sm">
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
                            <p className="bg-gemheartbase p-1 font-bold text-white text-[0.6rem] md:text-base">
                              {startDate.split(" ")[1]} -{" "}
                              {endDate.split(" ")[1]}
                            </p>
                          </div>
                          <p className="font-bold mt-1 text-[0.65rem] md:text-base md:mt-3">
                            {degreeObtained}
                          </p>

                          <p className="font-semibold mt-1 text-[0.5rem] md:text-sm md:mt-3">
                            {schoolName} | {state}
                          </p>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mt-3 px-2 md:mt-8 md:px-3">
            <p className="font-bold text-sm md:text-3xl">
              {data?.resume?.personal.firstName}{" "}
              <span className="text-gemheartbase">
                {data?.resume.personal.lastName}
              </span>
            </p>
            <p className="md:text-lg mt-3 text-xs font-extrabold md:font-semibold md:mt-6">
              {data?.resume?.personal.jobTitle}
            </p>
            <p className="md:mt-6 text-[0.5rem] mt-1 md:text-sm font-medium md:font-bold">
              {data?.resume?.personal.professionalSummary}
            </p>
            <div className="experience mt-8 md:mt-16">
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
                          <h5 className="font-bold text-[0.7rem] md:text-lg">
                            {jobTitle}
                          </h5>
                          <p className="bg-gemheartbase p-1 font-bold w-fit text-[0.6rem] md:text-base text-white">
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
                          <p className="mt-1 md:mt-2 font-normal text-[0.45rem] md:text-sm">
                            {description}
                          </p>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
            <div className="hobbies mt-7 mb-3 md:mt-16 md:mb-7">
              {data?.resume.hobbies && (
                <>
                  <p className="font-extrabold text-sm md:text-2xl">Hobbies</p>
                  <ul className="grid grid-rows-3 grid-flow-col gap-x-3 md:gap-x-1">
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
            <div className="skills mt-7 mb-3 md:mt-16 md:mb-6">
              {data?.resume.skills && (
                <>
                  <h3 className="font-extrabold text-sm md:text-2xl">Skills</h3>
                  <div className="grid grid-rows-5 grid-flow-col gap-x-3 md:gap-x-1">
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
        </div>
      </div>
      <div className="hidden">
        <GDownload innerRef={gemRef} />
      </div>
      <ReactToPrint
        documentTitle="Resume"
        content={reactToPrintContent}
        trigger={reactToPrintTrigger}
      />
    </div>
  );
};

export default GemHeart;
