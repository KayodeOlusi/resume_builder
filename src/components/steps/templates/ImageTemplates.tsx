import { image } from "../../../constants";

interface ITemplate {
  name: string;
  image: string;
}

const ImageTemplates = () => {
  const templates: ITemplate[] = [
    {
      name: "Gemheart",
      image: image.gemheart,
    },
    {
      name: "Adolfa",
      image: image.adolfa,
    },
    {
      name: "Pixel",
      image: image.pixel,
    },
    {
      name: "Empire",
      image: image.empire,
    },
  ];

  return (
    <div className="mt-12 text-center">
      <div className="flex flex-col space-y-12 items-center md:flex-row md:justify-around md:space-y-0">
        {templates.slice(0, 2).map((item) => (
          <div key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-96 h-96 object-contain"
            />
            <p className="text-herotext font-semibold mt-4 text-sm md:text-base lg:mt-4">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex mt-12 flex-col space-y-12 items-center md:flex-row md:justify-around md:space-y-0">
        {templates.slice(2).map((item) => (
          <div key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-96 h-96 object-contain"
            />
            <p className="text-herotext font-semibold text-sm mt-4 md:text-base">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTemplates;
