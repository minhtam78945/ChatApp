import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  FacebookAuthProvider,
} from "firebase/auth";
import { useContext } from "react";
import { AuthContenxt } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const authUser = getAuth();
  const { user } = useContext(AuthContenxt);
  const navigate = useNavigate();
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(authUser, provider);
    console.log({ res });
  };
  const handleFaceBook = async () => {
    const provider = new FacebookAuthProvider();
    const res = await signInWithPopup(auth, provider);
    console.log({ res });
  };
  if (user?.uid) {
    navigate("/");
    return;
  }
  return (
    <>
      <div className="flex items-center flex-col gap-20 min-h-screen justify-center">
        <header>
          <div className="text-2xl md:text-3xl">Welcome to chat App</div>
        </header>
        <div className="flex flex-col gap-5">
          <button className="bg-white text-black login " onClick={handleGoogle}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#FBC02D"
              ></path>
              <path
                d="M3.65234 7.3455L6.93784 9.755C7.82684 7.554 9.97984 6 12.4993 6C14.0288 6 15.4203 6.577 16.4798 7.5195L19.3083 4.691C17.5223 3.0265 15.1333 2 12.4993 2C8.65834 2 5.32734 4.1685 3.65234 7.3455Z"
                fill="#E53935"
              ></path>
              <path
                d="M12.5002 21.9999C15.0832 21.9999 17.4302 21.0114 19.2047 19.4039L16.1097 16.7849C15.1057 17.5454 13.8577 17.9999 12.5002 17.9999C9.89916 17.9999 7.69066 16.3414 6.85866 14.0269L3.59766 16.5394C5.25266 19.7779 8.61366 21.9999 12.5002 21.9999Z"
                fill="#4CAF50"
              ></path>
              <path
                d="M22.3055 10.0415L22.2975 10H21.5H12.5V14H18.1515C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                fill="#1565C0"
              ></path>
            </svg>
            Continue with google
          </button>
          <button
            className="bg-white  text-black login"
            onClick={handleFaceBook}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 5.75V18.25C21.5 19.765 20.265 21 18.75 21H16V14H17.81C18.065 14 18.28 13.81 18.31 13.56L18.495 12.06C18.515 11.92 18.47 11.775 18.375 11.67C18.28 11.56 18.145 11.5 18 11.5H16V9.75C16 9.2 16.45 8.75 17 8.75H18C18.275 8.75 18.5 8.525 18.5 8.25V6.56C18.5 6.305 18.3 6.09 18.045 6.065C18.015 6.06 17.31 6 16.415 6C14.215 6 13 7.31 13 9.685V11.5H11C10.725 11.5 10.5 11.725 10.5 12V13.5C10.5 13.775 10.725 14 11 14H13V21H6.25C4.735 21 3.5 19.765 3.5 18.25V5.75C3.5 4.235 4.735 3 6.25 3H18.75C20.265 3 21.5 4.235 21.5 5.75Z"
                fill="url(#paint0_linear)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="12.5"
                  y1="3"
                  x2="12.5"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4DABF7"></stop>
                  <stop offset="1" stopColor="#2668DA"></stop>
                </linearGradient>
              </defs>
            </svg>
            Continue with Facebook
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
