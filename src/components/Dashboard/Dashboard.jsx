import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        { id: 1, 
          name: "John", 
          phy: 75, 
          chem: 80, 
          math: 60
          },
        { id: 2, 
          name: "Jane", 
          phy: 85, 
          chem: 90, 
          math: 80 },
        { id: 3, 
          name: "Bob", 
          phy: 70, 
          chem: 85, 
          math: 75 },
        { id: 4, 
          name: "Alice", 
          phy: 80, 
          chem: 75, 
          math: 85 },
        { id: 5, 
          name: "Sam", 
          phy: 90, 
          chem: 85, 
          math: 80 },
        { id: 6, 
          name: "Lisa", 
          phy: 85, 
          chem: 90, math: 75 },
        { id: 7, 
          name: "Mike", 
          phy: 70, 
          chem: 75, 
          math: 85 },
        { id: 8, 
          name: "Sarah", 
          phy: 80, 
          chem: 85, 
          math: 90 },
        { id: 9, 
          name: "David", 
          phy: 85, 
          chem: 80, 
          math: 75 },
        { id: 10, 
          name: "Emily", 
          phy: 75, 
          chem: 90, 
          math: 85 },
        { id: 11, 
          name: "Mark", 
          phy: 90, 
          chem: 80, 
          math: 85 },
        { id: 12, 
          name: "Anna", 
          phy: 80, 
          chem: 85, 
          math: 90 }
      ];
    return (
        <div className='m-20'>
            <LineChart 
            width={500}
            height={300}
            data={marksArray}
            >
                <Line dataKey ="phy"></Line>
                <Line stroke='#8884d8' dataKey='math'></Line>
                {/* <Line stroke="#82ca9d" dataKey='che'></Line> */}
                <XAxis dataKey='name'/>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;