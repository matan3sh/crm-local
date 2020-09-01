import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const PieHome = ({ customers }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const sortedCustomers = customers?.sort(
      (a, b) => parseFloat(b) - parseFloat(a)
    );
    const names = sortedCustomers.map((custumer) => custumer.name);
    const orders = sortedCustomers.map((custumer) => custumer.orders);
    chart(names, orders);
    // eslint-disable-next-line
  }, []);

  const chart = (labels, data) => {
    setChartData({
      labels: labels.slice(0, 3),
      datasets: [
        {
          label: 'Orders By Customer',
          data: data.slice(0, 3),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
        },
      ],
    });
  };

  return (
    <div className='pie'>
      <Pie
        data={chartData}
        options={{
          title: {
            display: 'Orders By Customers',
            text: 'Three Leading Customers',
            fontSize: 16,
          },
          legend: {
            position: 'bottom',
          },
        }}
      />
    </div>
  );
};

export default PieHome;
