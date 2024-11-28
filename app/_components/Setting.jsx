"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MainContentHeader from "@/app/_components/MainContentHeader";
import Spinner from "@/app/_components/Spinner";
import { CldUploadButton } from "next-cloudinary"; // Cloudinary button
import { updateUser } from "../_utils/API"; // Ensure this points to your API utility function

function Setting() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    phone: "",
    profile_photo: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    room_number: "",
    floor_number: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const { register, handleSubmit, setValue } = useForm();
  const email = session?.user?.email;

  // Fetch user data on session load
  useEffect(() => {
    if (status === "authenticated" && email) {
      const fetchUserData = async () => {
        try {
          const res = await fetch(`/api/users/${email}`);
          const userData = await res.json();
          setUserData(userData);
          setFormData({
            phone: userData.phone || "",
            room_number: userData.room_number || "",
            floor_number: userData.floor_number || "",
            profile_photo: userData.profile_photo || "",
            emergency_contact_name:
              userData.emergency_contact?.emergency_contact_name || "",
            emergency_contact_phone:
              userData.emergency_contact?.emergency_contact_phone || "",
          });
          setImagePreview(userData.profile_photo);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, [status, email]);

  // Handle form submit
  const handleProfileSubmit = async (data) => {
    try {
      const updatedData = {
        ...data,
        profile_photo: formData.profile_photo, // Ensure profile photo is included in the update
        phone: formData.phone,
        room_number: formData.room_number, // Ensure this is included in the payload
        floor_number: formData.floor_number, // Ensure this is included in the payload
        emergency_contact_name: formData.emergency_contact_name,
        emergency_contact_phone: formData.emergency_contact_phone,
      };

      // Debugging: Log the form data before submitting
      console.log("Submitting updated data:", updatedData);

      await updateUser(email, updatedData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  // Handle image upload
  const handleImageUpload = (result) => {
    const imageUrl = result?.info?.secure_url;
    setFormData({
      ...formData,
      profile_photo: imageUrl,
    });
    setImagePreview(imageUrl); // Update the preview image
  };

  // Show loading spinner when session is loading
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-fuchsia-50 px-8">
      <MainContentHeader tabname="Settings" />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-fuchsia-600 mb-8">
          Update User Profile
        </h2>

        <form
          onSubmit={handleSubmit(handleProfileSubmit)}
          className="space-y-6"
        >
          {/* Profile Picture Section */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <img
                src={imagePreview || userData?.profile_photo}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 mb-4"
              />
              <CldUploadButton
                options={{
                  maxFiles: 1,
                  cropping: true,
                  multiple: false,
                }}
                onSuccess={handleImageUpload}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} // Use the correct upload preset from your env
              >
                <p className="text-body-bold">Upload Profile Picture</p>
              </CldUploadButton>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700">User ID</label>
              <input
                type="text"
                value={userData?._id}
                disabled
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Name</label>
              <input
                type="text"
                value={userData?.name}
                disabled
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                value={userData?.email}
                disabled
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Room No</label>
              <input
                type="text"
                name="room_number"
                value={formData.room_number}
                onChange={(e) =>
                  setFormData({ ...formData, room_number: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your room number"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Floor No</label>
              <input
                type="text"
                name="floor_number"
                value={formData.floor_number}
                onChange={(e) =>
                  setFormData({ ...formData, floor_number: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your floor number"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Emergency Contact Name</label>
              <input
                type="text"
                name="emergency_contact_name"
                value={formData.emergency_contact_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emergency_contact_name: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter emergency contact name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Emergency Contact Phone</label>
              <input
                type="tel"
                name="emergency_contact_phone"
                value={formData.emergency_contact_phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emergency_contact_phone: e.target.value,
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter emergency contact phone"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Access Level</label>
              <input
                type="text"
                value={userData?.access_level}
                disabled
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-fuchsia-600 text-white px-8 py-3 rounded-lg hover:bg-fuchsia-700 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Setting;
