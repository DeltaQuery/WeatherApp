import React from 'react'
import { LocalData } from './LocalData'
import { DataAndSearchContainer } from '../styles/DataAndSearchStyles'
import { SearchBar } from './SearchBar'

export const DataAndSearch = ({currentTime, currentDate, location, setLocation, setCoords, setWeather }) => {
  return (
    <DataAndSearchContainer>
        <LocalData
          currentTime={currentTime}
          currentDate={currentDate}
        />
          <SearchBar
          location={location}
          setWeather={setWeather}
          setLocation={setLocation}
          setCoords={setCoords} />
    </DataAndSearchContainer>
  )
}
