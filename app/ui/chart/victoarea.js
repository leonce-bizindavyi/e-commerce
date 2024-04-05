"use client"
import React from 'react';
import { VictoryChart, VictoryArea, VictoryGroup } from 'victory';


const Area = () => {
  const data1= [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const data2 = [
    { x: 1, y: 3 },
    { x: 2, y: 2 },
    { x: 3, y: 6 },
    { x: 4, y: 2 },
    { x: 5, y: 6 },
  ];

  return (
    <VictoryChart  width={600} height={300}>
      <VictoryGroup
        style={{
          data: { strokeWidth: 3, fillOpacity: 0.4 },
        }}
      >
        <VictoryArea
          style={{
            data: { fill: 'cyan', stroke: 'cyan' },
          }}
          data={data1}
        />
        <VictoryArea
          style={{
            data: { fill: 'magenta', stroke: 'magenta' },
          }}
          data={data2}
        />
      </VictoryGroup>
    </VictoryChart>
  );
};

export default Area;
