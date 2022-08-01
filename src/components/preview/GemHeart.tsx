import { FC } from "react";
import Spinner from "react-spinkit";
import useResume from "../../hooks/useResume";

const GemHeart: FC = () => {
  const data = useResume();

  if (!data) {
    return (
      <div className="flex items-center justify-center w-full">
        <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
      </div>
    );
  }

  return <div>GemHeart</div>;
};

export default GemHeart;
