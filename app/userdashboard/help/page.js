import MainContentHeader from "@/app/_components/MainContentHeader";
import React from "react";

const HelpPage = () => {
  return (
    <div className="bg-fuchsia-100 text-white min-h-screen px-8">
      <MainContentHeader tabname="Help" />
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold  mb-10 drop-shadow-lg text-fuchsia-950">
          Help Center
        </h1>

        <div className="topics mb-10 text-fuchsia-800">
          <h2 className="text-3xl font-semibold mb-4">Topics</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href="#account"
                className="hover:text-fuchsia-950 transition duration-300"
              >
                Account Management
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="hover:text-fuchsia-950 transition duration-300"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#calendar"
                className="hover:text-fuchsia-950 transition duration-300"
              >
                Using the Calendar
              </a>
            </li>
            <li>
              <a
                href="#support"
                className="hover:text-fuchsia-950 transition duration-300"
              >
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        <div className="content space-y-10 p-4">
          <section
            id="account"
            className="bg-white/30 backdrop-blur text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
          >
            <h3 className="text-2xl font-semibold">Account Management</h3>
            <p>
              If you need help with managing your account, including updating
              your profile, changing your password, or deleting your account,
              follow the instructions in the account settings section.
            </p>
          </section>

          <section
            id="events"
            className="bg-white/30 backdrop-blur text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
          >
            <h3 className="text-2xl font-semibold">Events</h3>
            <p>
              Learn how to create, edit, and manage events. You can view
              upcoming events on your dashboard and receive notifications for
              any changes.
            </p>
          </section>

          <section
            id="calendar"
            className="bg-white/30 backdrop-blur text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
          >
            <h3 className="text-2xl font-semibold">Using the Calendar</h3>
            <p>
              Our calendar feature allows you to schedule events and view them
              in a monthly or weekly format. Click on a date to add a new event.
            </p>
          </section>

          <section
            id="support"
            className="bg-white/30 backdrop-blur text-black p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
          >
            <h3 className="text-2xl font-semibold">Contact Support</h3>
            <p>
              If you have any questions or need further assistance, please reach
              out to our support team via the contact form on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
