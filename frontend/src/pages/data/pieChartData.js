const pieChartData ={
    data: {
        labels: [
            'Mobile',
            'Desktop',
            'Both',
        ],
        datasets: [{
            data: [300, 50, 100],
            borderColor: 'white',
            backgroundColor: [
                'red',
                'green',
                'blue',
            ],
                hoverOffset: 4
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    // This more specific font property overrides the global property
                    color: 'black',
                    font: {
                        size: 10
                    }
                }
            }
        }
    }
}
export default pieChartData