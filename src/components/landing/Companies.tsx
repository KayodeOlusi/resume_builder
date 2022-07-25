import { FC } from "react";
import { svgs } from "../../constants";
import withMotionWrap from "../../wrapper/MotionWrap";

const Companies: FC = () => {
  return (
    <div data-testid="companies" className="mt-24 md:mt-36">
      <h3 className="text-center font-semibold text-trusted">Trusted By</h3>
      <div className="mt-12 grid grid-cols-2 gap-x-28 mx-auto max-w-[17rem] md:max-w-[40rem] md:gap-x-96 lg:grid-cols-6 lg:gap-4 lg:max-w-full">
        <img src={svgs.google} alt="google" className="trusted" />
        <img src={svgs.facebook} alt="facebook" className="trusted" />
        <img src={svgs.paypal} alt="paypal" className="trusted" />
        <img src={svgs.stripe} alt="stripe" className="trusted" />
        <img src={svgs.sony} alt="sony" className="trusted" />
        <img src={svgs.microsoft} alt="microsoft" className="trusted" />
      </div>
    </div>
  );
};

export default withMotionWrap(Companies);
