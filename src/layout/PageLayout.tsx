import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const PageLayout: FC = () => {
  return (
    <div>
      <Fragment>
        <Outlet />
      </Fragment>
      <Footer />
    </div>
  );
};

export default PageLayout;
