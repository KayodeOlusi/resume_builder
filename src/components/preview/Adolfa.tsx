import { FC } from "react";
import { svgs } from "../../constants";
import useResume from "../../hooks/useResume";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const Adolfa: FC = () => {
  const data = useResume();

  // console.log(data);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="grid grid-cols-5 border">
        <div className="bg-adolfa col-span-2">
          <img src={svgs.adolfac} alt="" className="w-40 h-40" />
          <div className="flex flex-col items-center -mt-24">
            <img
              src={
                data?.resume
                  ? data?.resume.personal.profilePicture?.toString()
                  : svgs.thumb
              }
              alt=""
              className="w-40 h-40 rounded-full border-8 border-white"
            />
          </div>
          <div className="px-7 mt-12">
            <h3 className="font-extrabold text-2xl">Contact</h3>
            <div className="contact">
              <div className="mt-6 flex space-x-8 items-center">
                <PhoneIcon className="w-6 h-6 text-adolfabase" />
                <p className="font-semibold text-sm">
                  {data?.resume?.personal.phoneNumber}
                </p>
              </div>
              <div className="mt-6 flex space-x-2 items-center">
                <MailIcon className="w-6 h-6 text-adolfabase" />
                <p className="font-semibold text-sm px-5">
                  {data?.resume?.personal.email.split("@")[0]}
                </p>
              </div>
              <div className="mt-6 flex space-x-8 items-center">
                <LocationMarkerIcon className="w-6 h-6 text-adolfabase" />
                <p className="font-semibold text-sm">
                  {data?.resume?.personal.address}
                </p>
              </div>
            </div>
            <div className="education mt-24">
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
                    <div key={id} className="mt-14">
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
            <div className="skills mt-28">
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
        <div className="col-span-3">Hey</div>
      </div>
    </div>
  );
};

export default Adolfa;
