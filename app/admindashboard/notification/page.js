import MainContentHeader from "@/app/_components/MainContentHeader";

const notifications = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    message: "System update completed successfully.",
    deviceName: "MacBook Pro",
    status: "success",
  },
  {
    username: "alice_smith",
    email: "alice.smith@example.com",
    message: "Failed to update application, retrying.",
    deviceName: "Windows Laptop",
    status: "pending",
  },
  {
    username: "bob_jones",
    email: "bob.jones@example.com",
    message: "Security alert: Unusual login activity detected.",
    deviceName: "Android Phone",
    status: "error",
  },
  {
    username: "emily_davis",
    email: "emily.davis@example.com",
    message: "Server maintenance completed successfully.",
    deviceName: "iPhone",
    status: "success",
  },
  {
    username: "mike_williams",
    email: "mike.williams@example.com",
    message: "System restart initiated.",
    deviceName: "Windows Desktop",
    status: "pending",
  },
];

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <MainContentHeader tabname="notification" />

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-fuchsia-950">
          System Notifications
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left bg-fuchsia-600 text-white">
                  Username
                </th>
                <th className="px-6 py-3 text-left bg-fuchsia-600 text-white">
                  Email
                </th>
                <th className="px-6 py-3 text-left bg-fuchsia-600 text-white">
                  Message
                </th>
                <th className="px-6 py-3 text-left bg-fuchsia-600 text-white">
                  Device Name
                </th>
                <th className="px-6 py-3 text-left bg-fuchsia-600 text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{notification.username}</td>
                  <td className="px-6 py-4">{notification.email}</td>
                  <td className="px-6 py-4">{notification.message}</td>
                  <td className="px-6 py-4">{notification.deviceName}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white font-medium ${
                        notification.status === "success"
                          ? "bg-green-500"
                          : notification.status === "pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {notification.status.charAt(0).toUpperCase() +
                        notification.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
