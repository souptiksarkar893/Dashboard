import React from 'react';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';
import Calendar from '../components/Calendar';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="chart-container">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
      <div className="mt-4">
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
