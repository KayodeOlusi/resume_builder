import { FC } from "react";
import { images } from "../../constants";

const Companies: FC = () => {
  return (
    <div className="mt-36">
      <h3 className="text-center font-semibold text-trusted">Trusted By</h3>
      <div className="mt-12 grid grid-cols-6 gap-4 items-center">
        <img src={images.google} alt="google" />
        <img src={images.facebook} alt="facebook" />
        <img src={images.paypal} alt="paypal" />
        <img src={images.stripe} alt="stripe" />
        <img src={images.sony} alt="sony" />
        <img src={images.microsoft} alt="microsoft" />
      </div>
    </div>
  );
};

export default Companies;
