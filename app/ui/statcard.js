import React from 'react'
import Victorybar from '../ui/chart/victorybar'
import Chart from '../ui/chart/VictorLine'
import Area from '../ui/chart/victoarea'
import BoxPlot from '../ui/chart/box'

export default function Statcad() {
  return (
    <div>
          <div
          className="relative flex w-full flex-row h-[16rem] py-3 px-5 space-x-2 items-center justify-between bg-white shadow-lg shadow-blue-gray-500/10">
          
          <div 
            className="whitespace-normal w-full h-full break-words rounded-lg border border-blue-gray-50 bg-white font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
            <Victorybar />
          </div>
          <div
            className="whitespace-normal w-full h-full break-words rounded-lg border border-blue-gray-50 bg-white font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
            <Chart />
          </div>
        </div>
        <div
          className="relative flex w-full flex-row h-[16rem] py-3 px-5 space-x-2 items-center justify-between bg-white shadow-lg shadow-blue-gray-500/10">
          
          <div
            className="whitespace-normal w-full h-full break-words rounded-lg border border-blue-gray-50 bg-white  font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
            <Area />
          </div>
          <div
            className="whitespace-normal w-full h-full break-words rounded-lg border border-blue-gray-50 bg-white  font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
            <BoxPlot />
          </div>
        </div>
        </div>
  )
}
