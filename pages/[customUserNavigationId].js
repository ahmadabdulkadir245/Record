import { PlusSmIcon, UserIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import Colors from "../constants/Colors";

function CustomUserNavigation() {
  const { primaryBlue, primaryYellow } = Colors;
  const router = useRouter();
  const navigationId = router.query.customUserNavigationId;

  return (
    <div
      className={`w-full h-10 py-9 px-4  md:px-8  lg:px-0 text-[${primaryBlue}}] flex justify-center items-center iceland fixed top-0  lg:top-0 bg-white shadow-md  z-50`}
    >
      {" "}
      <div className='flex  justify-between items-center max-w-6xl 2xl:max-w-8xl  w-full '>
        <div className={`flex items-center`}>
          <Link href='/'>
            <a
              className={`text-3xl flex items-center font-semibold text-[${primaryBlue}]`}
            >
              <UserIcon className='h-10 ' />
              REC
              <span
                className={`hover:text-[${primaryBlue}}] text-[${primaryYellow}] `}
              >
                ORDS
              </span>
            </a>
          </Link>
        </div>

        <div className='flex items-center '>
          <Link href='/add-expense'>
            <a>
              <PlusSmIcon
                className={`h-10 text-[${primaryYellow}] hover:text-[${primaryBlue}]`}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomUserNavigation;
