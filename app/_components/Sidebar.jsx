"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBell,
  FaChartLine,
  FaCircleQuestion,
  FaCodeMerge,
  FaGear,
  FaGrip,
  FaRegChartBar,
  FaUsersLine,
  FaPowerOff,
} from "react-icons/fa6";
import Logo from "./Logo";
import { useSession, signOut } from "next-auth/react";
import Spinner from "./Spinner";
import { getUser } from "../_utils/API";

function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [userData, setUserData] = useState(null); // Store user data
  const { data: session, status } = useSession(); // Get session and loading status

  const email = session?.user?.email; // Extract email from session

  // Fetch user data when session is authenticated
  useEffect(() => {
    // Check if the session is authenticated and email is available
    if (status === "authenticated" && email) {
      const fetchUserData = async () => {
        try {
          const res = await getUser(email); // Call API to fetch user data
          setUserData(res); // Set user data in state
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData(); // Fetch user data on authentication
    }
  }, [status, email]); // Re-fetch if session or email changes

  // console.log(userData)
  const userType = userData?.access_level; // Extract user type from user data

  // Handle logout modal
  const handleLogoutClick = () => {
    setIsModalOpen(true); // Open the logout confirmation modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" }); // Sign out and redirect
      setIsModalOpen(false); // Close modal after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Loading state: show Spinner while session or userData is loading
  if (status === "loading" || !userData) {
    return <Spinner />;
  }

  return (
    <div className="col-span-1 border-r bg-fuchsia-50">
      <div className="ml-8 mt-6">
        <Logo />

        {/* User side Navigation */}
        <nav>
          <p className="mt-8 mb-4 text-gray-700">Menu</p>
          {userType === "admin" ? (
            <ul className="space-y-4">
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/admindashboard"
                  className="flex items-center gap-3"
                >
                  <FaGrip />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/admindashboard/usermangement"
                  className="flex items-center gap-3"
                >
                  <FaUsersLine />
                  <span>User Management</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/admindashboard/integration"
                  className="flex items-center gap-3"
                >
                  <FaCodeMerge />
                  <span>Integrations</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/admindashboard/analytics"
                  className="flex items-center gap-3"
                >
                  <FaChartLine />
                  <span>Analytics</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/admindashboard/activitylog"
                  className="flex items-center gap-3"
                >
                  <FaRegChartBar />
                  <span>Activity Logs</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/admindashboard/notification"
                  className="flex items-center gap-3"
                >
                  <FaBell />
                  <span>Notifications</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="space-y-4">
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link href="/userdashboard" className="flex items-center gap-3">
                  <FaGrip />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/userdashboard/integration"
                  className="flex items-center gap-3"
                >
                  <FaCodeMerge />
                  <span>Integrations</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/userdashboard/analytics"
                  className="flex items-center gap-3"
                >
                  <FaChartLine />
                  <span>Analytics</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/userdashboard/activitylog"
                  className="flex items-center gap-3"
                >
                  <FaRegChartBar />
                  <span>Activity Logs</span>
                </Link>
              </li>
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/userdashboard/help"
                  className="flex items-center gap-3"
                >
                  <FaCircleQuestion />
                  <span>Help Center</span>
                </Link>
              </li>
            </ul>
          )}
        </nav>

        {/* Account Settings */}
        <nav>
          <p className="my-4 text-gray-700">Account Settings</p>
          <ul className="space-y-4">
            {userType === "user" ? (
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/userdashboard/settings"
                  className="flex items-center gap-3"
                >
                  <FaGear />
                  <span>Settings</span>
                </Link>
              </li>
            ) : (
              <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
                <Link
                  href="/admindashboard/settings"
                  className="flex items-center gap-3"
                >
                  <FaGear />
                  <span>Settings</span>
                </Link>
              </li>
            )}
            <li className="hover:bg-fuchsia-200 py-2 rounded-sm w-full pl-2 transition-all duration-300 ease-linear">
              <button
                onClick={handleLogoutClick}
                className="flex items-center gap-3 w-full text-left"
              >
                <FaPowerOff />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
              Are you sure you want to log out?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="bg-fuchsia-600 text-white px-6 py-2 rounded-lg hover:bg-fuchsia-700 transition-all"
              >
                Yes, Logout
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
