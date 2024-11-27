import Link from "next/link";

function NotificationBox() {
  const initialNotifications = [
    {
      id: 1,
      title: "Hackathon Reminder",
      message: "The hackathon is starting soon! Get ready.",
      timestamp: "2024-11-28 09:00 AM",
    },
    {
      id: 2,
      title: "New Message",
      message: "You have a new message from John.",
      timestamp: "2024-11-27 10:30 AM",
    },
    {
      id: 3,
      title: "System Update",
      message: "A new update is available for your system.",
      timestamp: "2024-11-26 02:15 PM",
    },
    {
      id: 4,
      title: "System Update",
      message: "A new update is available for your system.",
      timestamp: "2024-11-26 02:15 PM",
    },
  ];

  return (
    <div className=" mt-16 h-[600px] row-span-2 ">
      <h3 className="text-2xl text-gray-600 font-semibold mb-6">Notifications</h3>
      <ul className="space-y-4">
        {initialNotifications.map((notification) => (
          <li
            key={notification.id}
            className="backdrop-blur bg-white/30 p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h4 className="text-lg text-fuchsia-900 font-semibold">
                {notification.title}
              </h4>
              <p className="text-sm text-gray-700">{notification.message}</p>
              <span className="text-xs text-gray-500">
                {notification.timestamp}
              </span>
            </div>
            <Link
              href="#"
              className="text-fuchsia-500 font-semibold hover:underline"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationBox;
