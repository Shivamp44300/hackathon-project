"use client";
import { useSession } from "next-auth/react";
import { FaArrowLeftLong, FaBell } from "react-icons/fa6";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import { getUser } from "../_utils/API";

function MainContentHeader({ tabname}) {
 const { data: session, status } = useSession();
 const [userData, setUserData] = useState(null);

 // Ensure session data is loaded and valid
 const email = session?.user?.email;
 const name = session?.user?.name;

 useEffect(() => {
   if (status === "authenticated" && email) {
     const fetchUserData = async () => {
       try {
         const res = await getUser(email);
         console.log(res,'this res')
         setUserData(res);
         console.log(res, "this from mainContent");
       } catch (error) {
         console.error("Error fetching user data:", error);
       }
     };

     fetchUserData();
   }
 }, [status, email]); // Added email to the dependencies list

 // Loading state when the session is being fetched
 if (status === "loading") {
   return <Spinner />;
 }

  return (
    <div className="flex justify-between items-center px-6 py-6">
      <div>
        <p className="space-x-3 flex items-center">
          <span className="text-fuchsia-950">
            <FaArrowLeftLong />
          </span>
          <span className="text-gray-700 uppercase font-medium">{tabname}</span>
        </p>
      </div>
      <div className="">
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <input
                type="text"
                className="border-[1px] rounded-md  px-16 pl-1 py-1 border-fuchsia-950 outline-none "
                placeholder="David Piyush .."
              />
            </li>

            <li className="text-2xl text-fuchsia-950">
              <FaBell />
            </li>
            <li className="w-8 h-8 rounded-full ">
              <img
                src={`${userData?.profile_photo || "/avatar.jpg"}`}
                alt=""
                className="rounded-full"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainContentHeader;
