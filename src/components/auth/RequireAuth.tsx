import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth: FC = () => {
  const location = useLocation();
  const user = localStorage.getItem("user_alium");

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default RequireAuth;
