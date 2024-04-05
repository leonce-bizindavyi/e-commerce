"use client"
import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryScatter, VictoryZoomContainer } from 'victory';



const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getScatterData());
  }, []);

  const getScatterData = ()=> {
    return Array.from({ length: 50 }).map((_, index) => ({
      x: Math.floor(Math.random() * (50 - 1 + 1)) + 1, // Generate random x between 1 and 50 (inclusive)
      y: Math.floor(Math.random() * (90 - 10 + 1)) + 10, // Generate random y between 10 and 90 (inclusive)
      size: Math.floor(Math.random() * 8) + 3, // Generate random size between 3 and 10 (inclusive)
    }));
  };

  return (
    <VictoryChart  width={600} height={300}
      domain={{ y: [0, 100] }}
      containerComponent={<VictoryZoomContainer zoomDomain={{ x: [5, 35], y: [0, 100] }} />}
    >
      <VictoryScatter
        data={data}
        style={{
          data: {
            opacity: ({ datum }) => (datum.y % 5 === 0 ? 1 : 0.7),
            fill: ({ datum }) => (datum.y % 5 === 0 ? 'tomato' : 'black'),
          },
        }}
      />
    </VictoryChart>
  );
};

export default Chart;
