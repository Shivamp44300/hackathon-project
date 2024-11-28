"use client";
import { createUser, updateUser } from "@/app/_utils/API"; // Assuming these functions
import { getAllUsers } from "@/app/feedback/_data/FetchAPI";
import { useState, useEffect } from "react";

// Example of API function to fetch users (you should replace with your actual API URL)
const fetchAllUsers = async () => {
  const data = await getAllUsers();
  return data || []; // Return an empty array if no data is returned
};

// API functions for Create, Update, and Delete (replace with your backend routes)
const createUsers = async (email, userData) => {
  const response = await createUser(email, userData); // Assuming this returns the created user
  return response; // Return the created user
};

const updateUsers = async (email, updatedData) => {
  const response = await updateUser(email, updatedData); // Assuming this returns the updated user
  return response; // Return the updated user
};

const deleteUser = async (userId) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE",
  });
  return response.json();
};

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // Keep this as 'mobile'
  const [profilePic, setProfilePic] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch all users on component mount
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchAllUsers();
      setUsers(fetchedUsers || []); // Ensure users is an array
    };
    getUsers();
  }, []);

  // Handle create user
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone: mobile, // Ensure you're passing the correct state variable 'mobile' here
      profile_photo: profilePic,
    };
    const createdUser = await createUsers(email, newUser); // Pass the email and user data
    setUsers((prevUsers) => [...prevUsers, createdUser]); // Add new user to the list
    resetForm();
  };

  // Handle update user
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      email,
      phone: mobile, // Correctly use 'mobile' here
      profile_photo: profilePic,
    };
    if (editingUser?.email) {
      const updatedUser = await updateUsers(editingUser.email, updatedData); // Update user by email
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user?.email === editingUser?.email ? updatedUser : user
        )
      );
    }
    resetForm();
  };

  // Handle delete user
  const handleDeleteUser = async (userId) => {
    if (userId) {
      await deleteUser(userId); // Delete user by userId (assumes `_id` is used)
      setUsers((prevUsers) => prevUsers.filter((user) => user?._id !== userId)); // Remove deleted user from state
    }
  };

  // Handle editing a user
  const handleEditUser = (user) => {
    if (user) {
      setEditingUser(user);
      setName(user.name);
      setEmail(user.email);
      setMobile(user.phone); // Ensure you're setting the correct field
      setProfilePic(user.profile_photo);
      setShowForm(true); // Show form when editing
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName("");
    setEmail("");
    setMobile(""); // Reset mobile field correctly
    setProfilePic("");
    setEditingUser(null);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 bg-fuchsia-100 h-screen">
      <h1 className="text-3xl font-semibold text-fuchsia-950 mb-8">
        User Management
      </h1>

      {/* User List */}
      <table className="w-full table-auto border-collapse mb-8 bg-white/30 backdrop-blur">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Room Number
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Floor Number
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Profile Pic
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Email
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Mobile
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?._id} className="hover:bg-fuchsia-100">
              <td className="px-4 py-2 border text-sm text-gray-700">
                {user?.room_number}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {user?.floor_number}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                <img
                  src={user?.profile_photo}
                  alt={user?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {user?.name}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {user?.email}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {user?.phone}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-400 text-white py-1 px-3 rounded-md hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user?._id)}
                  className="ml-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to show form for creating a new user */}
      <button
        onClick={() => setShowForm((showForm) => !showForm)}
        className="bg-fuchsia-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-fuchsia-600 mb-6"
      >
        Create New User
      </button>

      {/* Form for Create/Update User */}
      {showForm && (
        <form
          onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
          className="mb-8 p-6 bg-white/30 backdrop-blur rounded-lg shadow-lg"
        >
          <h2 className="text-2xl mb-4 font-semibold text-fuchsia-950">
            {editingUser ? "Update User" : "Create User"}
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture URL
            </label>
            <input
              type="text"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-fuchsia-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          >
            {editingUser ? "Update User" : "Create User"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UserManagement;
