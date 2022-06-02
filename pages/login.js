import { firebaseApp } from "../firebase";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from "@firebase/util";
import Link from "next/link";
import { useContext, useState } from "react";
import { loginUser } from "../Auth/auth";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/auth-context";

function Login() {
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

  const authCtx = useContext(AuthContext);

  const emailInputHandler = (e) => {
    const content = e.target.value;
    setEmail(content);
  };
  const passwordInputHandler = (e) => {
    const content = e.target.value;
    setPassword(content);
  };
  const emailIsValid = email.includes("@");
  const passwordIsValid = password.length >= 6;

  const loginHandler = async (e) => {
    e.preventDefault();
    if (emailIsValid && passwordIsValid) {
      try {
        const token = await loginUser(email, password);
        authCtx.authenticate(token);
        {
          authCtx.isAuthenticated && router.push("/");
        }
      } catch (error) {
        alert(`an error occurred ${error}`);
        console.log(error);
      }
      // alert("success");
      console.log(email, password);
    }
  };

  return (
    <div className='iceland'>
      <div className='px-2 flex justify-center  md:px-4 lg:px-0  items-center h-screen '>
        <div className='border-2  border-[#093158]  px-2 lg:px-8 py-8 rounded-lg lg:rounded-xl bg-white shadow-xl drop-shadow-2xl   text-[#093158] w-[95%] md:w-[80%] md:mb-20 lg:w-[600px] 2xl:w-[700px] '>
          <h1 className='text-center  text-5xl '>
            LOG<span className='text-[#ffcb05]'>IN</span>
          </h1>
          <div className='m-auto flex w-[100px] h-[2px] bg-[#ffcb05]'></div>
          <form onSubmit={loginHandler}>
            <input
              type='text'
              className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-6 py-3 w-[90%]  m-auto flex my-10 lg:my-8'
              placeholder='Email'
              required
              onChange={emailInputHandler}
            />
            <input
              type='password'
              className='border-[2px] lg:border-[1px] rounded-lg md:rounded-full  border-[#093158] outline-none px-6 py-3 w-[90%]  m-auto flex my-10 lg:my-8'
              placeholder='Password'
              required
              onChange={passwordInputHandler}
            />

            <button className='flex justify-center m-auto mt-5 lg:mt-5  bg-[#093158] w-56 rounded-full text-white  px-2 py-3 2xl:p-3 outline-none transition-all duration-300 ease-in-out hover:bg-[#ffcb05] 2xl:w-[300px]'>
              LOGIN
            </button>
          </form>
          <div className='flex justify-center mt-3 space-x-4'>
            <Link href='/forgot-password'>
              <a>forgot password? </a>
            </Link>
            <Link href='/signup'>
              <a className='text-[#ffcb05] hover:text-blue-500 transition-colors duration-200 ease-linear'>
                Signup
              </a>
            </Link>
          </div>
          <button
            className='flex justify-center m-auto mt-2  bg-transparent text-[#093158] w-56 rounded-full border-[2px]  px-2 py-3 2xl:p-3 outline-none transition-all duration-200 ease-in hover:bg-[#093158] hover:text-white 2xl:w-[300px] items-center'
            onClick={signIn}
          >
            <FcGoogle className='h-5' /> {""}
            <p> SIGN IN WITH GOOGLE</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

Login.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
