import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineHome = ({ orders }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const months = orders.map((order) => setMonth(new Date(order.date)));
    var map = months.reduce((obj, b) => {
      obj[b] = ++obj[b] || 1;
      return obj;
    }, {});
    const labels = [...new Set(months)];
    const data = Object.values(map);
    chart(labels, data);
    // eslint-disable-next-line
  }, []);

  const chart = (labels, data) => {
    setChartData({
      labels,
      datasets: [
        {
          label: 'Number of Orders by Month (2020)',
          data,
          fill: true,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 0.6)',
          borderWidth: 1,
        },
      ],
    });
  };

  const setMonth = (date) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[date.getMonth()];
  };

  return (
    <div className='line'>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: 'THICCNESS SCALE', display: false },
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 3,
                  beginAtZero: true,
                  callback: function (value, index, values) {
                    return value.toFixed(0) + ' ';
                  },
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineHome;
