import { HomeIcon } from "@heroicons/react/outline";
import {
  CashIcon,
  FastForwardIcon,
  GiftIcon,
  HashtagIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from "../../context/auth-context";
function TopNavigation() {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const signOut = () => {
    localStorage.clear();
    authCtx.logout();
    router.push("/login");
  };
  return (
    <div>
      <div className='hidden  lg:flex justify-center bg-[#093158] h-10 iceland   items-center text-xl  p-6 text-white iceland'>
        <div className='flex max-w-6xl 2xl:max-w-8xl w-full justify-between items-center'>
          <div className=''>(+234)-812-333-444</div>
          <div className={`flex space-x-14 items-center`}>
            <div className={`flex hover:text-[#ffcb05] cursor-pointer `}>
              <UserIcon className='h-6' />
              <p>Profile</p>
            </div>
            <div
              className={`flex hover:text-[#ffcb05] cursor-pointer `}
              onClick={signOut}
            >
              <LockClosedIcon className='h-6' />
              <p>Logout</p>
            </div>
            <div className='flex space-x-6'>
              <FaFacebook
                className={`h-5 hover:text-[#ffcb05]   cursor-pointer`}
              />
              <FaTwitter
                className={`h-5 hover:text-[#ffcb05]   cursor-pointer`}
              />
              <FaInstagram
                className={`h-5 hover:text-[#ffcb05]   cursor-pointer`}
              />
              <FaWhatsapp
                className={`h-5 hover:text-[#ffcb05]   cursor-pointer`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
