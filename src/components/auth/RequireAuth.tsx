import { FC } from "react";
import { auth } from "../../firebase";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const RequireAuth: FC = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default RequireAuth;
