import { FC } from "react";
import { svgs } from "../../constants";

const Companies: FC = () => {
  return (
    <div className="mt-36">
      <h3 className="text-center font-semibold text-trusted">Trusted By</h3>
      <div className="mt-12 grid grid-cols-6 gap-4 items-center">
        <img src={svgs.google} alt="google" />
        <img src={svgs.facebook} alt="facebook" />
        <img src={svgs.paypal} alt="paypal" />
        <img src={svgs.stripe} alt="stripe" />
        <img src={svgs.sony} alt="sony" />
        <img src={svgs.microsoft} alt="microsoft" />
      </div>
    </div>
  );
};

export default Companies;
