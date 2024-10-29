import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
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
const LineCharts = () => {
  return (
    <LineChart width={800} height={500} data={subsMarks}>
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
      <Line type="monotone" dataKey="Math" stroke="yellow"></Line>
      <Line type="monotone" dataKey="English" stroke="red"></Line>
      <Line type="monotone" dataKey="Biology" stroke="aqua"></Line>
      <Tooltip></Tooltip>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    </LineChart>
  );
};

export default LineCharts;
