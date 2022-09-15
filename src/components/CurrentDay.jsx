import React from 'react'
import { CurrentDayContainer } from '../styles/CurrentDayStyles'
import { CurrentData } from './CurrentData'
import { Map } from "./Map"

export const CurrentDay = ({ day, weather, temperature, feelsLike, humidity, wind, windDegree, sunrise, sunset, coords, weatherArr, chartColors, tempScale }) => {
  return (
    <>
      <CurrentDayContainer>
        
        <CurrentData
          day={day}
          weather={weather}
          temperature={temperature}
          feelsLike={feelsLike}
          humidity={humidity}
          wind={wind}
          windDegree={windDegree}
          sunrise={sunrise}
          sunset={sunset}
          weatherArr={weatherArr}
          chartColors={chartColors}
          tempScale={tempScale}
        />

        <Map
          isMarkerShown
          coords={coords}
          className='GoogleMap'
        />

      </CurrentDayContainer>
    </>
  )
}
