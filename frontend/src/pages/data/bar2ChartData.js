const bar2ChartData = {
    
    data : { 
    labels: ['Complete', 'Resolved', 'Open', 'Underway'],
    datasets: [
      {
        display: false, 
        data: [3, 5, 7, 2],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
},

options : {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'white',
          display: false,
        },
        ticks: {
          color: 'black',
        }
      },
      y: {
        ticks: {
          color: 'black',
        }
      }
    }
  }

}
export default bar2ChartData;