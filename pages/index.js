import Head from "next/head";
import Main from "../components/Main/";
import Footer from "../components/Footer/";
import { userAccessToken, fetchUser } from "../Util/fetchUserDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function authenticate() {
      const accessToken = await userAccessToken();
      if (!accessToken) return router.push("/");
      const [userInfo] = await fetchUser();
      setUser(userInfo);
    }
    authenticate();
  }, []);

  return (
    <div className='iceland'>
      <Head>
        <title>Records</title>
      </Head>
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
