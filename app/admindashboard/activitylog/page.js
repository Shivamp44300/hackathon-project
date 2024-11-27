"use client";
import MainContentHeader from "@/app/_components/MainContentHeader";
import { getAllUsers } from "@/app/feedback/_data/FetchAPI";
import { useState, useEffect } from "react";

// Dummy function for fetching log data (replace with your actual API call)
const getAllData = async () => {
  const data = await getAllUsers();
  return data; // Return the data from the API
};

const ActivityLog = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [place, setPlace] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");
  const [filterPlace, setFilterPlace] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterName, setFilterName] = useState("");

  // Fetch logs on component mount
  useEffect(() => {
    const fetchLogs = async () => {
      const logs = await getAllData();
      console.log("Fetched Logs:", logs); // Log the fetched data to debug
      setLogEntries(logs);
    };
    fetchLogs();
  }, []);

  // Handle form submission to add a new activity log
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if place and reason are valid
    if (!place || !reason) {
      alert("Please fill in both place and reason.");
      return;
    }

    // New log entry
    const newEntry = {
      serialNumber: logEntries.length + 1, // Increment serial number
      name: "New User",
      email: "new.user@example.com",
      place, // Using the place entered in the form
      date: new Date().toISOString(),
      reason, // Using the reason entered in the form
      status: "In Progress", // Default status
    };

    // Log the new entry to check if it's correct
    console.log("New Entry:", newEntry);

    // Update log entries state
    setLogEntries([newEntry, ...logEntries]);
    setPlace(""); // Clear place input
    setReason(""); // Clear reason input
  };

  // Apply filters to the log entries
  const filteredLogEntries = logEntries.filter((entry) => {
    return (
      (filterPlace === "" ||
        entry.place.toLowerCase().includes(filterPlace.toLowerCase())) &&
      (filterDate === "" || entry.date.includes(filterDate)) &&
      (filterStatus === "" ||
        entry.status.toLowerCase().includes(filterStatus.toLowerCase())) &&
      (filterName === "" ||
        entry.name.toLowerCase().includes(filterName.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto px-4 bg-fuchsia-100 h-screen">
      <MainContentHeader tabname="Activity Log" />

      {/* Filter Section */}
      <div className="mb-8 mx-auto flex w-full justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-fuchsia-950 mb-4">
            All Logs
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Filter by Name
            </label>
            <input
              type="text"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Filter by Place
            </label>
            <input
              type="text"
              value={filterPlace}
              onChange={(e) => setFilterPlace(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by place"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Filter by Date
            </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Filter by Status
            </label>
            <input
              type="text"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Filter by status"
            />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-fuchsia-900 text-center mb-6">
        Activity Log Entries
      </h2>

      {/* Activity Log Table */}
      <table className="w-full table-auto border-collapse mb-8 bg-white/30 backdrop-blur">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Serial No
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Email
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Place
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Date
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Reason
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredLogEntries.map((entry) => (
            <tr key={entry.serialNumber} className="hover:bg-fuchsia-100">
              <td className="px-4 py-2 border text-sm text-gray-700">
                {entry.serialNumber || "N/A"} {/* Display serial number */}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {entry.name || "Unknown"} {/* Display name */}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {entry.email || "Unknown"} {/* Display email */}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {entry.place || "Unknown"} {/* Display place */}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {new Date(entry.date).toLocaleString() || "Unknown"}{" "}
                {/* Display date */}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {entry.reason || "Unknown"} {/* Display reason */}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-700">
                {entry.status || "Unknown"} {/* Display status */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for Adding New Log Entry */}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Place
          </label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter place"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Reason
          </label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter reason"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-fuchsia-600 text-white font-semibold rounded-md"
        >
          Add Log Entry
        </button>
      </form>
    </div>
  );
};

export default ActivityLog;
