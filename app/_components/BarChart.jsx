"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for the chart
const data = [
  {
    name: "Monday",
    outgoing: 35,
  },
  {
    name: "Tuesday",
    outgoing: 35,
  },
  {
    name: "Wednesday",
    outgoing: 25,
  },
  {
    name: "Thursday",
    outgoing: 15,
  },
  {
    name: "Friday",
    outgoing: 5,
  },
  {
    name: "Saturday",
    outgoing: 20,
  },
  {
    name: "Sunday",
    outgoing: 10,
  },
];

// Functional component version
const BarChartGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barSize={30}>
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis domain={[0, 100]} padding={{ right: 10 }} />{" "}
        {/* Set the Y-axis domain from 0 to 100 */}
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="0 0" />
        <Bar
          dataKey="outgoing"
          fill="#701a75"
          background={{ fill: "#fdf4ff" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartGraph;
