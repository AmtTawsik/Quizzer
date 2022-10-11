import React, { useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { PeoductContext } from './Root';
const Statistics = () => {
    const data = useContext(PeoductContext);
    console.log(data)
    return (
        <div>
            <h1 className='text-center font-extrabold text-3xl text-amber-400 mb-40'>The Chart is Here!!!</h1>
            <LineChart  className='container mx-auto mt-10 pb-5' width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#FF0000"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="total"></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;