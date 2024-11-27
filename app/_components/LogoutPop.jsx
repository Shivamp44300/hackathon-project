"use client";
import { useState } from "react";

function UserProfileUpdatePage() {
  // State for handling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to show the logout confirmation modal
  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal without logging out
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement logout logic here, e.g., clearing user data or redirecting
    console.log("User logged out");
    setIsModalOpen(false); // Close the modal
    // Redirect or clear session here
  };

  return (
    <div className="min-h-screen bg-fuchsia-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-fuchsia-600 mb-8">
          User Profile
        </h2>

        {/* Other profile content here */}

        {/* Logout Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLogoutClick}
            className="bg-fuchsia-600 text-white px-8 py-3 rounded-lg hover:bg-fuchsia-700 transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
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

export default UserProfileUpdatePage;
