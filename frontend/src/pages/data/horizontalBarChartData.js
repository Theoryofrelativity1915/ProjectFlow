const horizontalBarChartData = {
    
    data : { 
    labels: ['Q1', 'Q2', 'Q3', '   Q4'],
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
    indexAxis: 'y',
    transitions: {
      resize: {
        animation: {
          duration: 2000
        }
      }
    },
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
export default horizontalBarChartData;