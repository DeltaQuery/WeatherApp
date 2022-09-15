import React from 'react'
import { ForecastItem } from './ForecastItem'
import { ForecastListContainer } from '../styles/ForecastListStyles'

export const ForecastList = ({forecast, tempScale}) => {
  const { list } = forecast

  return (
    <ForecastListContainer>
      { list.map((weatherItem, index) => {
        return <ForecastItem
        forecast={weatherItem}
        key={index}
        tempScale={tempScale}
        />
      }) }
    </ForecastListContainer>
  )
}
