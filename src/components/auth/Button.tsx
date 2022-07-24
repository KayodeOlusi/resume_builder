import { FC } from "react";
import { useNavigate } from "react-router-dom";
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

const Button: FC<IProps> = ({
  svg,
  title,
  blue_bg,
  sign_up,
  formData,
  google,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // sign in or up to the website based on the button clicked
  const userAuth = (option: string) => {
    // if user clicks google, sign in with google
    google && signInWithPopup(auth, provider);

    if (formData) {
      const { name, email, password } = formData;

      switch (option) {
        case "sign_up":
          if (name && email && password) {
            const notification = toast.loading("Creating user...");

            createUserWithEmailAndPassword(auth, email, password).then(
              (user_details) => {
                const user_created = user_details?.user;

                updateProfile(user_created, {
                  displayName: name,
                }).then(() => {
                  dispatch(
                    signUp({
                      name: name,
                      email: email,
                      id: user_created?.uid,
                    })
                  );
                });
              }
            );

            toast.success("Sign Up Successful", {
              id: notification,
            });

            break;
          } else {
            toast.error("Please fill all the fields");
            return;
          }

        case "sign_in":
          if (email && password) {
            const notification2 = toast.loading("Logging in...");

            signInWithEmailAndPassword(auth, email, password).then(
              (user_details) => {
                const user_received = user_details?.user;

                dispatch(
                  login({
                    name: name!,
                    email: email,
                    id: user_received?.uid,
                  })
                );
              }
            );

            toast.success("Sign In Successful", {
              id: notification2,
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

    navigate("/page");
  };

  return (
    <button
      onClick={() => (sign_up ? userAuth("sign up") : userAuth("sign in"))}
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
