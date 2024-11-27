"use client";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { useState, useEffect, useCallback } from "react";
import MainContentHeader from "@/app/_components/MainContentHeader";
import { useSession } from "next-auth/react";
import { getUser, updateUserVisitLog } from "../_utils/API";
import Spinner from "./Spinner";

// Dynamically import the Map component, ensuring it's only rendered on the client-side
const MapComponent = dynamic(() => import("@/app/_components/Map"), {
  ssr: false, // This ensures the map only renders client-side
});

const Integration = () => {
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const [formData, setFormData] = useState({
    place: "",
    date: "",
    reason: "",
  });
  const [dataEntries, setDataEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  // Fetch user data and entry data from database when authenticated
  const fetchUserData = useCallback(async () => {
    if (status === "authenticated" && email) {
      try {
        const response = await getUser(email);
        setDataEntries(response.data || []);
        console.log("Fetched entries:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }, [status, email]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      });
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.place || !formData.date || !formData.reason) {
      alert("Please fill in all fields.");
      return;
    }

    const newEntry = {
      ...formData,
      id: new Date().getTime(),
      position: [25.2133, 85.1968], // Using static coordinates as an example
      status: "Completed",
    };

    try {
      await updateUserVisitLog(email, newEntry);
      setDataEntries((prevEntries) => [...prevEntries, newEntry]);
      setFormData({ place: "", date: "", reason: "" });
      setIsCreating(false); // Hide form after creation
    } catch (error) {
      console.error("Error saving entry:", error);
      alert("Failed to save entry.");
    }
  };

  // Handle selecting an entry to view details
  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen pl-8">
      <MainContentHeader tabname="Integration" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {/* Left Section - Data Entry and Creation */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-center text-fuchsia-950">
            Data Entry
          </h1>

          {/* Button to show form to create entry */}
          <div className="text-center mb-6">
            {isCreating ? (
              <button
                onClick={() => setIsCreating(false)} // Hide form
                className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-all"
              >
                Cancel
              </button>
            ) : (
              <button
                onClick={() => setIsCreating(true)} // Show form
                className="w-full bg-fuchsia-500 text-white py-3 rounded-lg hover:bg-fuchsia-600 transition-all"
              >
                Add New Entry
              </button>
            )}
          </div>

          {/* Data Entry Form - Only show when "Add New Entry" is clicked */}
          {isCreating && (
            <div className="bg-white/30 backdrop-blur p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New Entry</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700" htmlFor="place">
                      Place
                    </label>
                    <input
                      type="text"
                      id="place"
                      name="place"
                      value={formData.place}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          place: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700" htmlFor="date">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          date: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700" htmlFor="reason">
                      Reason
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          reason: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 px-4 py-2 rounded-md"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Right Section - Map Display */}
        <div className="h-[500px]">
          <MapComponent
            currentLocation={currentLocation}
            dataEntries={dataEntries}
            onEntryClick={handleEntryClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Integration;
