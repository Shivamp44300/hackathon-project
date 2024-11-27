"use client";

import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import useEventModifiers from "./UserEventModifiers";
import { renderEventDay, Tooltip } from "./EventUtils";
import "react-day-picker/dist/style.css";

function CalendarBox() {
  const [selectedDate, setSelectedDate] = useState(null);

  // Array of events with dates and titles
  const events = [
    {
      title: "Hackathon",
      date: new Date(2024, 10, 28), // Nov 28, 2024 (months are 0-indexed)
    },
    {
      title: "Festival",
      date: new Date(2024, 11, 5), // Dec 5, 2024
    },
  ];

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };

  // Get the event modifiers using the custom hook
  const eventModifiers = useEventModifiers(events);

  return (
    <div className="mt-6 w-full h-[320px] col-span-3  rounded-lg flex bg-fuchsia-100">
      <div className=" flex  w-full ">
        <div className="pl-16 pt-2 ">
          <DayPicker
            selected={selectedDate}
            onDayClick={handleDateChange}
            disabled={[new Date(2024, 11, 25), new Date(2024, 11, 31)]} // Disable Christmas and New Year's Eve
            modifiers={eventModifiers} // Pass event modifiers to highlight days
            className="w-full border-none rounded-lg"
            renderDay={(date) => renderEventDay(date, eventModifiers)} // Custom rendering for event days
          />
        </div>

        <div className="w-full">
          <h4 className="pt-4 text-center text-2xl font-medium text-fuchsia-950">
            Today Events!
          </h4>
          <div className="flex justify-center items-center mt-6 gap-4">
            <ul className="space-y-4  ">
              <li className="bg-white/30 backdrop-blur p-2 text-base rounded-lg shadow-lg text-fuchsia-900">
                Hackathon Remainder
              </li>{" "}
              <li className="bg-white/30 backdrop-blur p-2 text-base rounded-lg shadow-lg text-fuchsia-900">
                Hackathon Remainder
              </li>
            </ul>{" "}
            <ul className="space-y-4  ">
              <li className="bg-white/30 backdrop-blur p-2 text-base rounded-lg shadow-lg text-fuchsia-900">
                Hackathon Remainder
              </li>{" "}
              <li className="bg-white/30 backdrop-blur p-2 text-base rounded-lg shadow-lg text-fuchsia-900">
                Hackathon Remainder
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarBox;
