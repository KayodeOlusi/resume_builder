import { FC, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAppDispatch } from "../../app/hooks";
import toast from "react-hot-toast";
import { login, signUp } from "../../features/slice/user";

interface IFormData {
  name?: string;
  email: string;
  password: string;
}
interface IProps {
  title: string;
  svg?: string;
  google?: boolean;
  blue_bg?: boolean;
  sign_in?: boolean;
  sign_up?: boolean;
  formData?: IFormData;
}

interface ILocationState {
  from: {
    pathname: string;
  };
}

const Button: FC<IProps> = ({
  svg,
  title,
  blue_bg,
  sign_in,
  sign_up,
  formData,
  google,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const from = location.state
    ? (location.state as ILocationState)?.from?.pathname
    : "/page";

  // sign in or up to the website based on the button clicked
  const userAuth = (
    option?: string,
    e?: MouseEvent<HTMLButtonElement>,
    google?: boolean
  ) => {
    e?.preventDefault();
    // if user clicks google, sign in with google
    if (google) {
      signInWithPopup(auth, provider)
        .then((result) => {
          const { displayName, email, uid } = result.user;
          dispatch(login(uid, displayName!, email!));

          toast.success("Sign In Successful", {
            duration: 4000,
          });
          localStorage.setItem("user_alium", "true");
          navigate(from, { replace: true });
        })
        .catch(() => {
          toast.error("Error Signing In");
        });
    }

    if (formData) {
      const { name, email, password } = formData;

      switch (option) {
        case "sign_up":
          if (name && email && password) {
            const notification = toast.loading("Creating user...");

            createUserWithEmailAndPassword(auth, email, password)
              .then((user_details) => {
                const user_created = user_details?.user;

                updateProfile(user_created, {
                  displayName: name,
                }).then(() => {
                  dispatch(signUp(user_created?.uid, name, email));
                  localStorage.setItem("user_alium", JSON.stringify(true));
                });
              })
              .catch(() => {
                toast.error("Error creating user", {
                  id: notification,
                });
              });

            toast.success("Sign In to your account", {
              id: notification,
              duration: 6000,
            });

            navigate("/signin");
            break;
          } else {
            toast.error("Please fill all the fields");
            return;
          }

        case "sign_in":
          if (email && password) {
            const notification2 = toast.loading("Logging in...");

            signInWithEmailAndPassword(auth, email, password)
              .then((user_details) => {
                const user_received = user_details?.user;

                dispatch(
                  login(user_received?.uid, user_received?.displayName!, email)
                );
                localStorage.setItem("user_alium", JSON.stringify(true));
                toast.success("Sign In Successful", {
                  id: notification2,
                });

                navigate(from, { replace: true });
              })
              .catch(() => {
                toast.error("Error logging in", {
                  id: notification2,
                });
              });
            break;
          } else {
            toast.error("Please fill all the fields");
            return;
          }

        default:
          break;
      }
    }
  };

  return (
    <button
      onClick={(e) => {
        if (sign_up) userAuth("sign_up", e);
        if (sign_in) userAuth("sign_in", e);
        if (google) userAuth("", e, google);
      }}
      className={`${
        blue_bg ? "bg-alium mt-4 mb-4 text-white" : "bg-landingcard mt-4 mb-4"
      } flex justify-center items-center space-x-4 py-3 px-9 font-semibold rounded-sm w-full`}
    >
      {svg ? <img src={svg} alt="c" /> : null}
      <p className="text-xs md:text-base">{title}</p>
    </button>
  );
};

export default Button;
