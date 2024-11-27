"use client";
import { useSession } from "next-auth/react";
import { FaArrowLeftLong, FaBell } from "react-icons/fa6";
import ProfileBox from "./ProfileBox";
import ActivityBox from "./ActivityBox";
import NotificationBox from "./NotificationBox";
import CalendarBox from "./CalenderBox";
import MainContentHeader from "./MainContentHeader";
import { getUser } from "../_utils/API";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function MainContent() {
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

  console.log(userData);
  return (
    <div className="col-span-5 bg-fuchsia-50">
      <MainContentHeader tabname="dashboard" userData={userData} />
      <div className="px-8">
        <h5 className="text-xl text-gray-900">
          <span className="text-3xl">
            Welcome back,
            <strong className="text-fuchsia-800">
              {userData?.name || "Guest"}
            </strong>
          </span>
        </h5>
        <p className="text-base mt-2">
          Here&apos;s your activity summary for today.
        </p>

        <div className="grid grid-cols-4 grid-rows-2 gap-8">
          <ProfileBox userData={userData} />
          <ActivityBox />
          <NotificationBox />
          <CalendarBox />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
