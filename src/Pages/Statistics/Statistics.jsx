// import React from 'react';
import { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';


const Statistics = () => {

  const [donation, setDonation] = useState(0)

  useEffect(()=>{
    const donationItems = JSON.parse(localStorage.getItem('donates'))

    if (donationItems) {
      setDonation(donationItems.length)
    }
  },[])
  // Sample data
  const seriesData = [12, donation];
  const labels = ['Total', 'Donate'];

  const options = {
    labels: labels,
    noData: {text:'Empty Date'},
    chart: {
      type: 'pie',
      width: 300, // Adjust the width as needed
    },

    dataLabels: {
      enabled: true, 
    },

    legend: {
      position: 'bottom', // Display legend at the bottom
    },
  };

  return (
    <div className=' flex justify-center container mx-auto px-2'>
      <ApexCharts
        options={options}
        series={seriesData}
        type='pie'
        width={300} />
    </div>
  );
};

export default Statistics;
