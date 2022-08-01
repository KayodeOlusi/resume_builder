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

const GDownload: FC<IProps> = ({ innerRef }) => {
  const data = useResume();
  const image = localStorage.getItem("userImage");

  return (
    <div className="relative max-w-2xl mx-auto">
      <div
        className="grid grid-cols-4 border-4 mb-14 border-gemheart"
        ref={innerRef}
      >
        <div className="col-span-2">
          <img src={svgs.gemheartc} alt="" className="w-40 h-40" />
          <div className="flex items-center flex-col -mt-6">
            <img
              alt=""
              src={data?.resume ? (image ? image : svgs.thumb) : ""}
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div className="px-9 mt-7">
            <h3 className="font-extrabold text-2xl">Contact</h3>
            <div className="contact">
              <div className="mt-4 flex space-x-4 items-center">
                <PhoneIcon className="w-6 h-6 text-gemheartbase" />
                <p className="font-semibold text-sm">
                  {data?.resume?.personal.phoneNumber}
                </p>
              </div>
              <div className="mt-4 flex space-x-0 items-center">
                <MailIcon className="w-6 h-6 text-gemheartbase" />
                <p className="font-semibold text-sm px-5">
                  {data?.resume?.personal.email.split("@")[0]}
                </p>
              </div>
              <div className="mt-4 flex space-x-4">
                <LocationMarkerIcon className="w-6 h-6 text-gemheartbase" />
                <p className="font-semibold text-sm">
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
                        <p className="bg-gemheartbase p-1 font-bold text-white text-base">
                          {startDate.split(" ")[1]} - {endDate.split(" ")[1]}
                        </p>
                      </div>
                      <p className="font-bold mt-1 text-base mt-3">
                        {degreeObtained}
                      </p>

                      <p className="font-semibold mt-1 text-sm mt-3">
                        {schoolName} | {state}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mt-8 px-3">
            <p className="font-bold text-3xl">
              {data?.resume?.personal.firstName}{" "}
              <span className="text-gemheartbase">
                {data?.resume.personal.lastName}
              </span>
            </p>
            <p className="text-lg font-semibold mt-6">
              {data?.resume?.personal.jobTitle}
            </p>
            <p className="mt-6 text-sm font-semibold">
              {data?.resume?.personal.professionalSummary}
            </p>
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
                      <h5 className="font-bold text-lg">Job Position</h5>
                      <p className="bg-gemheartbase p-1 font-bold w-fit text-base text-white">
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
                      <p className="mt-2 font-semibold text-sm">{jobTitle}</p>
                      <p className="mt-2 font-normal text-sm">{description}</p>
                    </div>
                  );
                })}
            </div>
            <div className="hobbies mt-16 mb-7">
              <p className="font-extrabold text-2xl">Hobbies</p>
              <ul className="grid grid-rows-3 grid-flow-col gap-x-1">
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
            <div className="skills mt-16 mb-6">
              <h3 className="font-extrabold text-2xl">Skills</h3>
              <div className="grid grid-rows-5 grid-flow-col gap-x-1">
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
      </div>
    </div>
  );
};

export default GDownload;
