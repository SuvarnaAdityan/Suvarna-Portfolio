"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 90 },
  { name: "Java", level: 80 },
  { name: "ML", level: 88 },
];

export default function SkillsChart() {
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="level" />
    </BarChart>
  );
}