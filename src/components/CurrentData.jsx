import React from 'react'
import { getWeatherIcon } from '../utils/getWeatherIcon'
import { getWeatherImg } from '../utils/getWeatherImg'
import { CurrentDataContainer } from '../styles/CurrentDataStyles'
import { WeatherChart } from './WeatherChart'

const imgSize = "24px"

export const CurrentData = ({ day, weather, temperature, feelsLike, humidity, wind, windDegree, sunrise, sunset, weatherArr, chartColors, tempScale }) => {
  
  return (
    <CurrentDataContainer>
      <div className="CurrentData--Heading">
        <div className="CurrentData--Heading--DayAndWeather">
          <div className="CurrentData--Heading--DayAndWeather--Day">
            {day}
          </div>
          <div className="CurrentData--Heading--DayAndWeather--Weather">
            {weather}
          </div>
        </div>
        <img src={getWeatherImg(weather)} />
      </div>

      <div className="CurrentData--DataRow">

        <div className="CurrentData--DataRow--1Col">

        <div className="CurrentData--DataRow--1Col--1Col">
          <div>
          <img src={getWeatherIcon("humidity")} height={imgSize} width={imgSize} />
            Humidity: {humidity}
          </div>
          <div>
          <img src={getWeatherIcon("wind")} height={imgSize} width={imgSize}  />
            Wind: {wind}
          </div>
          <div>
          <img src={getWeatherIcon("winddegree")} height={imgSize} width={imgSize} />
            Wind Degree: {windDegree}
          </div>
          <div>
          <img src={getWeatherIcon("temperature")} height={imgSize} width={imgSize} />
            Feels like: {feelsLike}
          </div>
        </div>

        <div className="CurrentData--DataRow--1Col--2Col">
          <div>
          <img src={getWeatherIcon("sunrise")} height={imgSize} width={imgSize} />
            Sunrise: {sunrise}
          </div>
          <div>
          <img src={getWeatherIcon("sunset")} height={imgSize} width={imgSize} />
            Sunset: {sunset}
          </div>
        </div>
        
        </div>

        <div className="CurrentData--DataRow--2Col">
          <div className="CurrentData--DataRow--2Col--Content">
          <img src={getWeatherIcon("temperature")} height="56px" width="56px" />
          <span>{temperature}</span>
          </div>
        </div>

      </div>

      <div className="CurrentData--ChartContainer">
        <WeatherChart
          weatherArr={weatherArr}
          chartColors={chartColors}
          tempScale={tempScale}
        />
      </div>

    </CurrentDataContainer>
  )
}
