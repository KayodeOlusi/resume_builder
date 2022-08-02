import { useRef } from "react";
import { svgs } from "../../constants";
import useResume from "../../hooks/useResume";

const Pixel = () => {
  const data = useResume();
  const pixelRef = useRef<HTMLDivElement>(null);
  const image = localStorage.getItem("userImage");

  return (
    <div className="relative max-w-2xl mx-auto">
      <img src={svgs.pixel1} alt="" className="w-full" />
      <div className="grid grid-cols-2 mb-14">
        <div className="flex flex-col items-center">
          <img
            src={data?.resume ? (image ? image : svgs.thumb) : ""}
            alt=""
            className="w-20 h-20 md:w-40 md:h-40 rounded-full border-4 md:border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Pixel;
