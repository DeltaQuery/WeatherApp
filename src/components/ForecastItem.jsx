import React from 'react'
import { getHumanDate } from '../utils/getHumanDate'
import { getTempScale } from '../utils/getTempScale'
import { getWeatherImg } from '../utils/getWeatherImg'
import { ForecastItemContainer } from '../styles/ForecastListStyles'

export const ForecastItem = ({forecast, tempScale}) => {

  return (
    <ForecastItemContainer>
      <img src={ getWeatherImg(forecast.weather[0].main) } height="70px" width="70px" />
      <div>{ getHumanDate(forecast.dt) } </div>
      <div>{ getTempScale(forecast.main.temp, tempScale) } </div>
      <div>{ forecast.weather[0].main } </div>
    </ForecastItemContainer>
    
  )
}
