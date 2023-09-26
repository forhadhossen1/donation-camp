// import React from 'react';
import { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';


const Statistics = () => {

  const [donation, setDonation] = useState(0)

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem('donates'))

    if (donationItems) {
      setDonation(donationItems.length)
    }
  }, [])
  // Sample data
  const seriesData = [12, donation];
  const labels = ['Total Donation', 'Your Donation'];

  const options = {
    labels: labels,
    noData: { text: 'Empty Date' },
    chart: {
      type: 'pie',
      // width: 150
    },

    dataLabels: {
      enabled: true,
    },

    legend: {
      position: 'bottom', // Display legend at the bottom
    },
  };

  return (
    <div className=' flex justify-center mt-14'>
      <div
        className='w-full max-w-xs md:max-w-lg'
        style={{ maxWidth: '400px' }} 
      >
        <ApexCharts options={options} series={seriesData} type='pie' />
      </div>
    </div>
  );
};

export default Statistics;
