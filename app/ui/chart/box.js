"use client"
import React from 'react';
import { VictoryChart, VictoryBoxPlot } from 'victory';


const BoxPlot = () => {
  const data = [
    { x: 1, y: [1, 2, 3, 5] },
    { x: 2, y: [3, 2, 8, 10] },
    { x: 3, y: [2, 8, 6, 5] },
    { x: 4, y: [1, 3, 2, 9] },
  ];

  return (
    <VictoryChart  domainPadding={1} width={600} height={300}>
      <VictoryBoxPlot boxWidth={20} data={data} />
    </VictoryChart>
  );
};

export default BoxPlot;
