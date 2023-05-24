import React from 'react'
import '../css/home.css'
import { Chart, BarElement, LineElement, ArcElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import barChartData from './data/barChartData';
import pieChartData from './data/pieChartData';
import lineChartData from './data/lineChartData';
import horizontalBarChartData from './data/horizontalBarChartData';
import bar2ChartData from './data/bar2ChartData';
import RequireAuth from '../components/RequireAuth';


Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

Chart.register(
  ArcElement,
  Tooltip,
  Legend
)

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const bar1Data = barChartData.data;
const bar1Options = barChartData.options;
const pieData = pieChartData.data;
const pieOptions = pieChartData.options;
const lineData = lineChartData.data;
const lineOptions = lineChartData.options;
const horizontalBarData = horizontalBarChartData.data;
const horizontalBarOptions = horizontalBarChartData.options;
const bar2Data = bar2ChartData.data;
const bar2Options = bar2ChartData.options;

function Home() {
  RequireAuth()
  return (
    <div className='home'>
      <div className='one-three'>
        <div className='one'>
          <div className='chart'>
            <Bar data={bar1Data} options={bar1Options}/>
          </div>
          <section>Tickets by Priority</section>
        </div>
        <div className='two'>
          <div className='chart'>
            <Pie data={pieData} options={pieOptions}/>
          </div>
          <section>Tickets by Device Type</section>
        </div>
        <div className='three'>
          <div className='chart'>
            <Bar data={bar2Data} options={bar2Options} className='bar'/>
          </div>
          <section>Tickets by Status</section>
        </div>
      </div>
      <div className='four-five'>
        <div className='four'>
          <div className='chart'>
            <Line data={lineData} options={lineOptions}/>
          </div>
          <section>Amount of Tickets Over Time</section>
        </div>
        <div className='five'>
          <div className='chart'>
            <Bar data={horizontalBarData} options={horizontalBarOptions}/>
          </div>
          <section>Tickets Completed Each Quarter</section>
        </div>
      </div>
    </div>  
    )
}

export default Home