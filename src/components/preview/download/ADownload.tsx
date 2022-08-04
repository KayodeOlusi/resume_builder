import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { FC, RefObject } from "react";
import { svgs } from "../../../constants";
import useResume from "../../../hooks/useResume";

interface IProps {
  innerRef: RefObject<HTMLDivElement>;
}

const ADownload: FC<IProps> = ({ innerRef }) => {
  const data = useResume();
  const image = localStorage.getItem("userImage");

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="grid grid-cols-5" ref={innerRef}>
        <div className="bg-adolfa col-span-2">
          <img src={svgs.adolfac} alt="" className="w-40 h-40" />
          <div className="flex flex-col items-center -mt-24">
            <img
              src={data?.resume ? image! : svgs.thumb}
              alt=""
              className="w-40 h-40 rounded-full border-8 border-white"
            />
          </div>
          <div className="px-7 mt-7">
            <h3 className="font-extrabold text-2xl">Contact</h3>
            <div className="contact">
              <div className="mt-6 flex space-x-4 items-center">
                <PhoneIcon className="w-4 h-4 text-adolfabase" />
                <p className="font-semibold text-xs">
                  {data?.resume?.personal.phoneNumber}
                </p>
              </div>
              <div className="mt-6 flex space-x-0 items-center">
                <MailIcon className="w-4 h-4 text-adolfabase" />
                <p className="font-semibold text-xs px-5">
                  {data?.resume?.personal.email.split("@")[0]}
                </p>
              </div>
              <div className="mt-6 flex space-x-4 items-center">
                <LocationMarkerIcon className="w-4 h-4 text-adolfabase" />
                <p className="font-semibold text-xs">
                  {data?.resume?.personal.address}
                </p>
              </div>
            </div>
            <div className="education mt-16">
              <h3 className="font-extrabold text-2xl">Education</h3>
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
                    <div key={id} className="mt-6">
                      <div className="w-fit">
                        <p className="bg-adolfabase p-1 font-bold text-white">
                          {startDate.split(" ")[1]} - {endDate.split(" ")[1]}
                        </p>
                      </div>
                      <p className="font-semibold mt-3">{degreeObtained}</p>
                      <p className="font-semibold mt-3 text-sm">
                        {schoolName} | {state}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="skills mt-16 mb-7">
              <h3 className="font-extrabold text-2xl">Skills</h3>
              <div className="grid grid-rows-5 grid-flow-col">
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
        </div>
        <div className="col-span-3">
          <div className="mt-24 px-7">
            <p className="font-bold text-3xl">
              {data?.resume?.personal.firstName}{" "}
              <span className="text-adolfabase">
                {data?.resume.personal.lastName}
              </span>
            </p>
            <p className="text-lg font-semibold mt-6">
              {data?.resume?.personal.jobTitle}
            </p>
            <div className="about mt-16">
              <p className="font-extrabold text-2xl">About</p>
              <p className="mt-8 text-sm font-semibold">
                {data?.resume?.personal.professionalSummary}
              </p>
            </div>
            <div className="experience mt-16">
              <p className="font-extrabold text-2xl">Work Experience</p>
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
                    <div key={id} className="mt-5">
                      <h5 className="font-bold text-lg">{jobTitle}</h5>
                      <p className="bg-adolfabase p-1 font-bold w-fit text-white">
                        {present
                          ? "Present"
                          : startDate.split(" ")[1] === endDate.split(" ")[1]
                          ? startDate.split(" ")[1]
                          : `${startDate.split(" ")[1]} - ${
                              endDate.split(" ")[1]
                            }`}
                      </p>
                      <p className="mt-2 font-semibold text-sm">
                        {companyName} | {state}
                      </p>
                      <p className="mt-2 font-normal text-sm">{description}</p>
                    </div>
                  );
                })}
            </div>
            <div className="hobbies mt-16 mb-7">
              <p className="font-extrabold text-2xl">Hobbies</p>
              <ul className="grid grid-rows-3 grid-flow-col">
                {data?.resume?.hobbies.map((hob) => {
                  const { hobby, id } = hob;

                  return (
                    <li key={id} className="mt-3 font-semibold">
                      {hobby}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADownload;
