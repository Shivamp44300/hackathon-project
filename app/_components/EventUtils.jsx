// src/components/EventUtils.js

import React from "react";
// Function to render event days
export const renderEventDay = (date, eventModifiers) => {
  const eventDate = date.toISOString().split("T")[0];
  const event = eventModifiers[eventDate];

  if (event) {
    return (
      <div className="relative">
        {/* Event marker with tooltip */}
        <span
          data-tip={event.tooltip} // Set tooltip text as the event title
          className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1 cursor-pointer"
        >
          {/* Optional: Display a small dot or icon on the event date */}
          <span className="text-xs">⚫</span>
        </span>
      </div>
    );
  }
  return null;
};
