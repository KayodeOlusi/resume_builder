import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { FC, RefObject } from "react";
import { svgs } from "../../../constants";
import useResume from "../../../hooks/useResume";

interface IProps {
  innerRef: RefObject<HTMLDivElement>;
}

const PDownload: FC<IProps> = ({ innerRef }) => {
  const data = useResume();
  const image = localStorage.getItem("userImage");

  return (
    <div className="relative max-w-2xl mx-auto mb-14 border-2" ref={innerRef}>
      <img src={svgs.pixel1} alt="" className="w-full" />
      <div className="grid grid-cols-2 mb-1">
        <div className="flex flex-col items-center px-7">
          <img
            src={data?.resume ? (image ? image : svgs.thumb) : ""}
            alt=""
            className="w-40 h-40 rounded-full p-2 border-8 border-pixel"
          />
          <p className="font-bold text-2xl mt-4">
            {`${data?.resume.personal.firstName} ${data?.resume.personal.lastName}`}
          </p>
          <p className="mt-2 text-sm font-bold">
            {data?.resume.personal.jobTitle}
          </p>
          <p className="text-xs font-normal mt-2">
            {data?.resume.personal.professionalSummary}
          </p>
          <div className="contact mt-9 flex flex-col items-center">
            <h3 className="font-extrabold text-2xl">Contact</h3>
            <div className="flex space-x-3 mt-5">
              <span
                className="bg-pixel flex justify-center items-center w-9 h-6
                rounded-tl-2xl rounded-br-2xl"
              >
                <MailIcon className="w-4 h-4 text-white" />
              </span>
              <p className="text-xs">
                {data?.resume?.personal.email.split("@")[0]}
              </p>
            </div>
            <div className="flex space-x-3 mt-2 w-full">
              <span
                className="bg-pixel flex justify-center items-center w-9 h-6
                rounded-tl-2xl rounded-br-2xl"
              >
                <PhoneIcon className="w-4 h-4 text-white" />
              </span>
              <p className="text-xs">{data?.resume?.personal.phoneNumber}</p>
            </div>
            <div className="flex space-x-3 mt-2 w-full">
              <span
                className="bg-pixel flex justify-center items-center w-9 h-6
                rounded-tl-2xl rounded-br-2xl"
              >
                <LocationMarkerIcon className="w-4 h-4 text-white" />
              </span>
              <p className="text-xs">{data?.resume?.personal.address}</p>
            </div>
          </div>
          <div className="skills mt-12">
            <h3 className="font-extrabold text-2xl">Skills</h3>
            <div className="grid grid-rows-5 grid-flow-col gap-x-6 gap-y-2">
              {data?.resume &&
                data?.resume?.skills.map((skill) => {
                  const { id, skillName } = skill;

                  return (
                    <p key={id} className="text-sm font-semibold mt-4">
                      {skillName}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col px-10">
          <div className="education">
            <div
              className="bg-pixel flex items-center justify-center w-56 h-10
              rounded-tl-2xl rounded-br-2xl"
            >
              <h3 className="font-extrabold text-white text-xl">Education</h3>
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
                  <div key={id} className="flex items-center mt-6 space-x-4">
                    <p className="text-xs font-extrabold">
                      {startDate.split(" ")[1]} - {endDate.split(" ")[1]}
                    </p>
                    <div>
                      <p className="text-xs font-bold">{degreeObtained}</p>
                      <p className="text-[0.7rem]">
                        {schoolName} | {state}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="work mt-16">
            <div
              className="bg-pixel flex items-center justify-center w-56 h-10
              mb-6 rounded-tl-2xl rounded-br-2xl"
            >
              <h3 className="font-extrabold text-white text-xl">
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
                  <div key={id} className="flex items-center mt-6 space-x-4">
                    <p className="text-xs font-extrabold">
                      {present
                        ? "Present"
                        : startDate.split(" ")[1] === endDate.split(" ")[1]
                        ? startDate.split(" ")[1]
                        : `${startDate.split(" ")[1]} - ${
                            endDate.split(" ")[1]
                          }`}
                    </p>
                    <div>
                      <p className="text-xs font-bold">{companyName}</p>
                      <p className="text-[0.7rem] font-semibold">{jobTitle}</p>
                      <p className="text-[0.6rem]">{description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="hobbies">
            <div
              className="bg-pixel flex items-center justify-center w-56 h-10
              mt-14 rounded-tl-2xl rounded-br-2xl"
            >
              <h3 className="font-extrabold text-white text-xl">Hobbies</h3>
            </div>
            <ul className="grid grid-rows-3 grid-flow-col gap-2">
              {data?.resume?.hobbies.map((hob) => {
                const { hobby, id } = hob;

                return (
                  <li key={id} className="mt-3 text-sm font-semibold">
                    {hobby}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <img src={svgs.pixel2} alt="" className="w-full" />
    </div>
  );
};

export default PDownload;
