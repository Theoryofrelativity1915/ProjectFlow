const lineChartData = {
    data: {
        labels: ['180 days', '90 Days', '30 Days', '2 Weeks', 'This week'],
        datasets: [{
            labels: 'Active Trouble tickets Historically',
            data: ['30', '27', '10', '34', '23'],
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'red',
            tension: 0.4,

        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false
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

export default lineChartData