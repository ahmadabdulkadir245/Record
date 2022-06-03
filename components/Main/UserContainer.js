import Link from "next/link";
import { useRouter } from "next/router";
import Colors from "../../constants/Colors";

function UserContainer({ user, amount, path }) {
  const { primaryBlue } = Colors;
  const router = useRouter();
  const navigateToNavigation = () => {
    router.push(path);
  };

  return (
    <div className='grid  px-4  lg:px-0 m-auto'>
      <Link href={path}>
        <div
          className={`p-3 border-2 border-[${primaryBlue}] w-full  lg:w-[100%] outline-none rounded-md bg-[${primaryBlue}] my-3`}
          onClick={navigateToNavigation}
        >
          <div className='flex justify-between items-center'>
            <span>
              <p className='text-white text-xl capitalize'>{user}</p>
            </span>
            <span>
              <p className={`text-white text-xl `}>N{amount}</p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UserContainer;
