import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const StatisticComp = () => {

  const data = [
    { name: 'series A', value: 10 },
    { name: 'series B', value: 15 },
    { name: 'series C', value: 20 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <PieChart width={400} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default StatisticComp;
