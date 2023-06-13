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

interface LineChartProps {
  data: any;
}

const CountryData: React.FC<LineChartProps> = (props): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="country" stackId={"a"} fill="#8884d8" />
        <Bar dataKey="cases" stackId={"a"} fill="#82ca9d" />
        <Bar dataKey="deaths" stackId={"a"} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CountryData;
