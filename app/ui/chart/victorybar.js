"use client"
import React, { useState, useEffect, useRef } from 'react';
import { VictoryChart, VictoryBar } from 'victory';


const Victorybar = () => {
  const [data, setData] = useState([]);
  let intervalId = null;

  const getData = ()=> {
    const bars = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
    return Array.from({ length: bars }).map((_, idx) => ({
      x: idx + 1,
      y: Math.floor(Math.random() * (10 - 2 + 1)) + 2,
    }));
  };

  useEffect(() => {
    setData(getData());
    intervalId = window.setInterval(() => {
      setData(getData());
    }, 3000);

      return () => {
        if (intervalId) {
          window.clearInterval(intervalId);
        }
      };
    }, []);// Empty dependency array to run only once on mount

  return (
    <VictoryChart  width={600} height={300}
      domainPadding={{ x: 20 }}
      animate={{ duration: 500 }}
    >
      <VictoryBar
        data={data}
        style={{
          data: { fill: 'tomato', width: 12 },
        }}
        animate={{
          onExit: {
            duration: 500,
            before: () => ({
              _y: 0,
              fill: 'orange',
              label: 'BYE',
            }),
          },
        }}
      />
    </VictoryChart>
  );
};

export default Victorybar;
