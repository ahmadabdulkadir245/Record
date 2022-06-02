import { firebaseApp } from "../firebase";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "@firebase/util";
import { createUser } from "../Auth/auth";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const signIn = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const authCtx = useContext(AuthContext);

  const emailInputHandler = (e) => {
    const content = e.target.value;
    setEmail(content);
  };
  const passwordInputHandler = (e) => {
    const content = e.target.value;
    setPassword(content);
  };
  const confirmPasswordInputHandler = (e) => {
    const content = e.target.value;
    setConfirmPassword(content);
  };
  const emailIsValid = email.includes("@");
  const passwordIsValid = password.length >= 6;
  const passwordIsEqual = password === confirmPassword;

  const signupHandler = async (e) => {
    e.preventDefault();
    if (emailIsValid && passwordIsValid && passwordIsEqual) {
      try {
        const token = await createUser(email, password);
        authCtx.authenticate(token);
        {
          authCtx.isAuthenticated && router.push("/login");
        }
      } catch (error) {
        alert(`an error occured ${error}`);
        console.log(error);
      }
    }
  };

  return (
    <div className='iceland'>
      <div className='px-2 flex justify-center   md:px-4 lg:px-0  items-center h-screen'>
        <div className='border-2  border-[#093158]  px-2 lg:px-8 py-8 rounded-lg lg:rounded-xl bg-white shadow-xl drop-shadow-2xl   text-[#093158] w-[95%] md:w-[80%] md:mb-20 lg:mb-0 lg:w-[600px] 2xl:w-[700px] '>
          <h1 className='text-center  text-5xl '>
            SIGN<span className='text-[#ffcb05]'>UP</span>
          </h1>
          <div className='m-auto flex w-[100px] h-[2px] bg-[#ffcb05]'></div>
          <form onSubmit={signupHandler}>
            <div>
              <input
                type='text'
                className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-6 py-3 w-[90%]  m-auto flex my-6 md:my-9 lg:my-6 2xl:my-8'
                placeholder='email'
                required
                onChange={emailInputHandler}
              />
              <input
                type='password'
                className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-6 py-3 w-[90%]  m-auto flex my-6 md:my-9 lg:my-6 2xl:my-8'
                placeholder='password'
                required
                onChange={passwordInputHandler}
              />
              <input
                type='password'
                className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-6 py-3 w-[90%]  m-auto flex my-6 md:my-9 lg:my-6 2xl:my-8'
                placeholder='confirm password'
                required
                onChange={confirmPasswordInputHandler}
              />
              <button className='flex justify-center m-auto mt-5 lg:mt-10  bg-[#093158] w-56 rounded-full text-white  px-2 py-3 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-[#ffcb05] 2xl:w-[300px]'>
                SIGN UP
              </button>
            </div>
          </form>
          <div className='flex justify-center mt-3 space-x-4'>
            <p>Already have account? </p>
            <Link href='/login'>
              <a className='text-[#ffcb05] hover:text-blue-500 transition-colors duration-200 ease-linear'>
                Login
              </a>
            </Link>
          </div>
          <button
            className='flex justify-center m-auto mt-2  bg-transparent text-[#093158] w-56 rounded-full border-[2px]  px-2 py-3 2xl:p-3 outline-none transition-all duration-200 ease-in hover:bg-[#093158] hover:text-white 2xl:w-[300px] items-center'
            onClick={signIn}
          >
            <FcGoogle className='h-5' /> {""}
            <p> SIGN UP WITH GOOGLE</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;

Signup.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
