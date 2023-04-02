import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const marksArray = [
        { id: 1, name: "Alice", phy: 80, chem: 70, math: 90 },
        { id: 2, name: "Bob", phy: 70, chem: 75, math: 85 },
        { id: 3, name: "Charlie", phy: 90, chem: 80, math: 80 },
        { id: 4, name: "David", phy: 85, chem: 85, math: 75 },
        { id: 5, name: "Emily", phy: 95, chem: 90, math: 70 },
        { id: 6, name: "Frank", phy: 60, chem: 80, math: 90 },
        { id: 7, name: "Grace", phy: 75, chem: 70, math: 85 },
        { id: 8, name: "Henry", phy: 85, chem: 90, math: 95 },
        { id: 9, name: "Isabel", phy: 70, chem: 75, math: 80 },
        { id: 10, name: "Jack", phy: 80, chem: 85, math: 85 },
        { id: 11, name: "Karen", phy: 90, chem: 90, math: 90 },
        { id: 12, name: "Lucy", phy: 95, chem: 95, math: 95 }
      ];
      

    return (
        <div>
            <LineChart
                width={1300}
                height={300}
                data={marksArray}
            >
                <Line dataKey="phy" stroke='#009835' />
                <Line dataKey="math" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;