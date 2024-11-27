import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart = () => {
  // Calculate total value for summary
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <div>
      <h3 className="text-2xl font-medium pl-4 pt-2 text-fuchsia-900">
        Stay Duration Summary
      </h3>

      <div className="flex justify-around items-center mt-0 ">
        <div className="flex flex-col items-center mr-4">
          <PieChart width={300} height={300}>
            <Tooltip />
            <Pie
              data={data}
              cx={150}
              cy={130}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex flex-col">
          <ul>
            {data.map((entry, index) => (
              <li
                key={index}
                style={{
                  color: COLORS[index % COLORS.length],
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "24px", // Adjust this value for bullet size
                    height: "24px", // Adjust this value for bullet size
                    borderRadius: "50%",
                    backgroundColor: COLORS[index % COLORS.length],
                    marginRight: "8px",
                    margin:"3px"
                  }}
                ></span>
                {entry.value} - {entry.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chart;
