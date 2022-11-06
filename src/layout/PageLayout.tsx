import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const PageLayout = () => {
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
