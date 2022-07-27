import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { svgs } from "../../constants";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Personal = ({ formData, setFormData }: IProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<
    File | string | ArrayBuffer | null
  >(null);

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      readerEvent.target && setSelectedImage(readerEvent.target.result);
    };
  };

  return (
    <div className="personal-info mt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {selectedImage ? (
            <img
              src={selectedImage as string}
              alt=""
              className="cursor-pointer w-40 h-40 rounded-full object-cover"
            />
          ) : (
            <div className="h-40 w-40 rounded-full relative bg-[#C8DBF4] flex items-center justify-center">
              <img src={svgs.cloud} alt="" className="w-20 h-20" />
            </div>
          )}
          <input type="file" hidden ref={fileRef} onChange={selectFile} />
          <p
            className="text-alium font-semibold cursor-pointer border-b-2 border-alium"
            onClick={() => fileRef.current?.click()}
          >
            Change Profile Picture
          </p>
        </div>
        <p
          className="text-red-600 font-semibold cursor-pointer border-b-2 border-red-600"
          onClick={() => setSelectedImage(null)}
        >
          Delete Profile Picture
        </p>
      </div>

      <div className="form mt-8">
        <form>
          <div className="flex flex-col items-center md:flex-row"></div>
        </form>
      </div>
    </div>
  );
};

export default Personal;
