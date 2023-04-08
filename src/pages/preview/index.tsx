import Adolfa from "../../components/preview/Adolfa";
import Empire from "../../components/preview/Empire";
import GemHeart from "../../components/preview/GemHeart";
import Pixel from "../../components/preview/Pixel";

const Preview = () => {
  const resumeName = localStorage.getItem("resumeName");

  const displayResume = () => {
    switch (resumeName) {
      case "gemheart":
        return <GemHeart />;
      case "adolfa":
        return <Adolfa />;
      case "pixel":
        return <Pixel />;
      case "empire":
        return <Empire />;
      default:
        break;
    }
  };

  return (
    <div className="mt-20 px-8 lg:px-0">
      <h1 className="text-center text-alium font-semibold text-2xl lg:text-4xl">
        Your resume is ready for download
      </h1>
      <div className="mt-8">{displayResume()}</div>
    </div>
  );
};

export default Preview;
