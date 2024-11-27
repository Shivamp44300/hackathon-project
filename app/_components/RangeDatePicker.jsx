"use client";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Import the styles for the calendar

function RangeDatePicker() {
  const [selectedRange, setSelectedRange] = useState({ from: null, to: null });

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    console.log("Selected Range:", range);
  };

  return (
    <div className="mt-6 w-full max-w-sm mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Select a Date Range
      </h2>

      <DayPicker
        selected={selectedRange} // Bind the selected range
        onDayClick={handleRangeChange} // Handle range change
        mode="range" // Enable range mode for selecting a date range
        className="w-full border-none rounded-lg"
      />

      {selectedRange.from && selectedRange.to && (
        <p className="mt-4 text-center text-lg font-semibold text-gray-600">
          Selected Range: {selectedRange.from.toLocaleDateString()} to{" "}
          {selectedRange.to.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}

export default RangeDatePicker;
