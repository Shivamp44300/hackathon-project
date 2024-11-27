"use client";
import MainContentHeader from "@/app/_components/MainContentHeader";
import { useSession } from "next-auth/react";
import { useEffect, useState, useMemo } from "react";
import { getUser } from "../_utils/API"; // Adjust API function to fetch logs

const ActivityLog = () => {
  const { data: session, status } = useSession();
  const email = session?.user?.email;

  // States
  const [logEntries, setLogEntries] = useState([]);
  const [place, setPlace] = useState("");
  const [reason, setReason] = useState("");
  const [filterPlace, setFilterPlace] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(5); // Set the number of logs per page

  // Fetch activity log data from the database when authenticated
  useEffect(() => {
    const fetchLogsData = async () => {
      if (status !== "authenticated" || !email) return;

      try {
        setIsLoading(true);
        setError(null);
        const data = await getUser(email); // Fetch from the server

        if (data && Array.isArray(data.visit_logs)) {
          setLogEntries(data.visit_logs); // Set the fetched data to state
        } else {
          setError("Invalid data format received");
        }
      } catch (error) {
        setError("Error fetching activity logs.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogsData();
  }, [status, email]);

  // Memoized filtered log entries to avoid unnecessary re-renders
  const filteredLogEntries = useMemo(() => {
    return logEntries.filter((entry) => {
      return (
        (filterPlace === "" ||
          entry.place.toLowerCase().includes(filterPlace.toLowerCase())) &&
        (filterDate === "" ||
          new Date(entry.entry_time)
            .toLocaleDateString()
            .includes(filterDate)) &&
        (filterStatus === "" ||
          entry.status_log.toLowerCase().includes(filterStatus.toLowerCase()))
      );
    });
  }, [logEntries, filterPlace, filterDate, filterStatus]);

  // Pagination logic
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogEntries.slice(indexOfFirstLog, indexOfLastLog);

  const totalPages = Math.ceil(filteredLogEntries.length / logsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return; // Prevent going out of bounds
    setCurrentPage(pageNumber);
  };

  // Handle form submission to add a new activity log
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      entry_time: new Date(), // Current time for entry
      exit_time: null, // Assuming exit time will be set later
      location: [0, 0], // Default placeholder for location (latitude, longitude)
      place,
      reason,
      status_log: "In Progress", // Default status
    };

    // Add the new entry to the log entries
    setLogEntries([newEntry, ...logEntries]);
    setPlace("");
    setReason("");

    // Optionally, update the backend by pushing the new log entry to the User's visit_logs array
    // (You would call your API endpoint here to save the new log entry to the database)
  };

  return (
    <div className="container mx-auto px-4 bg-fuchsia-100 h-screen">
      <MainContentHeader tabname="Activity Log" />

      <div className="mb-8 mx-auto flex w-full justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-fuchsia-950 mb-4">
            All Logs
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {/* Filters */}
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

      {isLoading && <div className="text-center text-xl">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      <h2 className="text-2xl font-semibold text-fuchsia-900 text-center mb-6">
        Activity Log Entries
      </h2>

      <table className="w-full table-auto border-collapse mb-8 bg-white/30 backdrop-blur">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Serial No
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Place
            </th>
            <th className="px-4 py-2 border text-left text-sm font-medium text-gray-700">
              Entry Time
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
          {currentLogs.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-2 text-center text-sm text-gray-700"
              >
                No logs found
              </td>
            </tr>
          ) : (
            currentLogs.map((entry, index) => (
              <tr key={index} className="hover:bg-fuchsia-100">
                <td className="px-4 py-2 border text-sm text-gray-700">
                  {entry.serialNumber || index + 1}
                </td>
                <td className="px-4 py-2 border text-sm text-gray-700">
                  {entry.place}
                </td>
                <td className="px-4 py-2 border text-sm text-gray-700">
                  {new Date(entry.entry_time).toLocaleString()}
                </td>
                <td className="px-4 py-2 border text-sm text-gray-700">
                  {entry.reason}
                </td>
                <td className="px-4 py-2 border text-sm text-gray-700">
                  {entry.status_log}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-fuchsia-600 text-white rounded-md disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-fuchsia-600 text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ActivityLog;
