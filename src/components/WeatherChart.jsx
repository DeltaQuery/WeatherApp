import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { getHumanDate } from '../utils/getHumanDate'
import { getTempScale } from '../utils/getTempScale'

export const WeatherChart = ({weatherArr, chartColors, tempScale}) => {
    const weatherData = weatherArr.data.list.slice(0,8)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      )
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: "",
          },
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: chartColors.sbg
            },
          },
    
          y: {
            grid: {
              color: chartColors.sbg
            },
          },
        },
      };
      
      const labels = weatherData.map( data => getHumanDate(data.dt))
      
      const data = {
        labels,
        datasets: [
          {
            label: "Temperature Forecast",
            fill: false,
            data: weatherData.map( data => getTempScale(data.main.temp, tempScale, true)),
            borderColor: "rgba(255,174,66, 0.8)",
            backgroundColor: "rgb(255,174,66)",
          }
        ],
    maintainAspectRatio: false,
      }

  return (
    <Line
    label={labels}
    data={data}
    options={options}
    />
  )
}
