'use client'
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const HostelManagement = () => {
  const totalRooms = 512;
  const girlsRooms = 312;
  const totalFilled = 400;
  const girlsFilled = 300;

  // Calculate empty rooms
  const emptyRooms = totalRooms - totalFilled;
  const emptyGirlsRooms = girlsRooms - girlsFilled;

  const data = [
    { name: "Filled Rooms", value: totalFilled, fill: "#D5006D" }, // fuchsia color
    { name: "Empty Rooms", value: emptyRooms, fill: "#D1D5DB" }, // Tailwind gray-300 for empty
  ];

  const girlsRoomData = [
    { name: "Filled Girls Rooms", value: girlsFilled, fill: "#D5006D" },
    { name: "Empty Girls Rooms", value: emptyGirlsRooms, fill: "#D1D5DB" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <header className="w-full  text-gray-900 text-center py-8">
        <h1 className="text-4xl font-bold">Room Statistics Dashboard</h1>
        <p className="mt-4 text-xl">
          View the current status of rooms in the building.
        </p>
      </header>

      <main className="w-full max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Total Room Statistics */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-semibold text-fuchsia-600 mb-6">
              Total Room Statistics
            </h2>
            <div className="flex justify-center mb-8">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={150}
                  label
                  isAnimationActive={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="text-center">
              <p className="text-lg text-fuchsia-600">
                Total Rooms: {totalRooms}
              </p>
              <p className="text-lg text-fuchsia-600">
                Filled Rooms: {totalFilled}
              </p>
              <p className="text-lg text-fuchsia-600">
                Empty Rooms: {emptyRooms}
              </p>
            </div>
          </section>

          {/* Girls Room Statistics */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-semibold text-fuchsia-600 mb-6">
              Girls Room Statistics
            </h2>
            <div className="flex justify-center mb-8">
              <PieChart width={400} height={400}>
                <Pie
                  data={girlsRoomData}
                  dataKey="value"
                  outerRadius={150}
                  label
                  isAnimationActive={false}
                >
                  {girlsRoomData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
            <div className="text-center">
              <p className="text-lg text-fuchsia-600">
                Girls Rooms: {girlsRooms}
              </p>
              <p className="text-lg text-fuchsia-600">
                Filled Girls Rooms: {girlsFilled}
              </p>
              <p className="text-lg text-fuchsia-600">
                Empty Girls Rooms: {emptyGirlsRooms}
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HostelManagement;
