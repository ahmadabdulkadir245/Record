import { CalendarIcon, HomeIcon, MenuAlt1Icon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import SideBar from "./SideBar";
import { MdClear } from "react-icons/md";
import Colors from "../../constants/Colors";
import { selectedExpenseTotal } from "../../slices/expensesSlice";

function Navigation() {
  const { primaryBlue, primaryYellow } = Colors;

  const total = useSelector(selectedExpenseTotal);

  const [openSideBar, setOpenSideBar] = useState(false);
  const open = () => {
    setOpenSideBar(true);
  };
  const close = () => {
    setOpenSideBar(false);
  };

  return (
    <>
      <SideBar close={close} openSideBar={openSideBar} />
      <div
        className={`w-full h-10 py-9 px-4  md:px-8  lg:px-0 text-[${primaryBlue}}] flex justify-center items-center ${
          !openSideBar ? "shadow-xl" : ""
        } iceland fixed top-0 lg:top-0 bg-white  z-50`}
      >
        {" "}
        <div className='flex  justify-between items-center max-w-6xl 2xl:max-w-8xl  w-full '>
          <div className={`flex items-center`}>
            <Link href='/'>
              <a
                className={`text-3xl flex items-center font-semibold text-[${primaryBlue}] `}
              >
                {/* <HomeIcon className='h-10 ' /> */}
                <CalendarIcon className='h-10' />
                REC
                <span
                  className={`hover:text-[${primaryBlue}}] text-[${primaryYellow}] `}
                >
                  ORDS
                </span>
              </a>
            </Link>
          </div>

          <div className='hidden lg:flex  space-x-20 items-center '>
            <Link href='/user/ahmad'>
              <a
                className={`text-[${primaryBlue}] hover:text-[${primaryYellow}] transition-colors duration-200 ease-in-out`}
              >
                AHMAD
              </a>
            </Link>
            <Link href='/user/maria'>
              <a
                className={`text-[${primaryBlue}] hover:text-[${primaryYellow}] transition-colors duration-200 ease-in-out`}
              >
                MARIA
              </a>
            </Link>
            <Link href='/user/mommy'>
              <a
                className={`text-[${primaryBlue}] hover:text-[${primaryYellow}] transition-colors duration-200 ease-in-out`}
              >
                MOMMY
              </a>
            </Link>
            <Link href='/user/zainab'>
              <a
                className={`text-[${primaryBlue}] hover:text-[${primaryYellow}] transition-colors duration-200 ease-in-out`}
              >
                ZAINAB
              </a>
            </Link>
            <Link href='/user/general'>
              <a
                className={`text-[${primaryBlue}] hover:text-[${primaryYellow}] transition-colors duration-200 ease-in-out`}
              >
                GENERAL
              </a>
            </Link>
          </div>
          <div className='flex items-center '>
            <Link href='/'>
              <a>
                <button
                  className={` hidden lg:flex p-2 text-[${primaryBlue}]  rounded-[8px] px-6 py-2  items-center justify-center text-lg bg-[${primaryYellow}]  hover:bg-[${primaryBlue}] 
          hover:text-white transition-all duration-300 ease-linear`}
                >
                  N{total}
                </button>
              </a>
            </Link>
            {!openSideBar ? (
              <button className='flex lg:hidden '>
                <MenuAlt1Icon
                  className={`h-8 text-[${primaryBlue}] transition-all duration-200 hover:text-[${primaryYellow}]ease-in-out`}
                  onClick={open}
                />
              </button>
            ) : (
              <button className='flex lg:hidden '>
                <MdClear
                  className={`h-16 w-10 text-[${primaryBlue}] transition-all duration-200 ease-in-out hover:text-[${primaryYellow}]`}
                  onClick={close}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
