import React from "react";
import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const subsMarks = [
  { id: 1, name: "Alice ", English: 78, Biology: 88, Math: 85 },
  { id: 2, name: "Bob ", English: 82, Biology: 91, Math: 90 },
  { id: 3, name: "Charlie ", English: 85, Biology: 79, Math: 70 },
  { id: 4, name: " Johnson", English: 88, Biology: 78, Math: 95 },
  { id: 5, name: " Smith", English: 72, Biology: 81, Math: 80 },
  { id: 6, name: " Brown", English: 75, Biology: 89, Math: 80 },
];
const BarChart = () => {
  return (
    <BChart
      width={500}
      height={300}
      data={subsMarks}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="Math"
        fill="#8884d8"
        label={{ position: "top" }}
      >
      </Bar>
    </BChart>
  );
};

export default BarChart;
