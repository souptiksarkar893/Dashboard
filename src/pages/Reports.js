import React from 'react';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';

function Reports() {
  return (
    <div>
      <h1>Reports</h1>
      <div className="chart-container">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}

export default Reports;
