"use client";
import Image from "next/image";
import React from "react";
import { Pie, PieChart, Tooltip, Cell } from 'recharts';

const tokenomicsData = [
  { name: 'Treasury', value: 20.0, color: '#2d7a4f' },
  { name: 'Community Reward', value: 25.0, color: '#f4c090' },
  { name: 'Team', value: 15.0, color: '#ff8c42' },
  { name: 'Community Sale', value: 10.0, color: '#a8c9e8' },
  { name: 'Liquidity', value: 10.0, color: '#4a90d9' },
  { name: 'Investor & Advisor', value: 5.0, color: '#d64545' },
  { name: 'Marketing & Growth', value: 15.0, color: '#90d890' },
];

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="xl:container mx-auto py-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-4xl xl:text-6xl text-red-500 text-shadow text-center">
          Tokenomics
        </h2>
      </div>

      <div className="bg-white/50 rounded-md p-2 xl:p-6">
        <h1 className="md:block hidden text-center text-black px-2">ANTS is a community driven digital asset ecosystem built on fairness, transparency and long term cooperation. Operating on the Binance Smart Chain, ANTS is designed as a sustainable alternative to short term, speculative projects that dominate the digital asset space. Rather than focusing on hype or rapid price movements, ANTS emphasizes collective participation, discipline and shared responsibility. The project is founded on the belief that while a single participant has limited impact, a united community can build resilient systems that endure over time.</h1>
        <div className="lg:flex justify-between items-center">
        {/* Pie Chart */}
        <div className="flex justify-center items-center px-1">
          <PieChart
            width={480}
            height={500}
            style={{ maxWidth: '100%', height: 'auto' }}
          >
            <Pie
              data={tokenomicsData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={150}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              labelLine={true}
            >
              {tokenomicsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => `${value}%`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px'
              }}
            />
          </PieChart>
        </div>

        <Image
              className="hidden lg:block"
              src="/imagess.png"
              width={300}
              height={100}
              alt="ANTS-6"
            />

        {/* Right-side Values */}
        <div className="md:ml-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 md:px-4 lg:px-0 gap-1 md:gap-4 lg:gap-10 xl:gap-16">
          {tokenomicsData.map((entry, index) => (
            <div key={index} className="flex items-center gap-3 ">
              {/* Color box */}
              <div
                className="w-5 h-5 rounded-sm"
                style={{ backgroundColor: entry.color }}
              ></div>
              {/* Name and value */}
              <div className="flex items-center">
                <span className="font-semibold text-black text-sm md:text-lg">{entry.name}</span>
                <span className="text-gray-600">{entry.value}%</span>
              </div>
               
            </div>
            
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
