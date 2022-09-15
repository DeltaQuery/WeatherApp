import React from 'react'
import { LocalDataContainer, LocalTime, LocalDay, LocalDate } from '../styles/LocalDataStyles'

export const LocalData = ({ currentTime, currentDate }) => {
    return (
        <LocalDataContainer>
            <LocalTime>
                Local time:
            </LocalTime>
            <LocalDay>
                {currentTime}
            </LocalDay>
            <LocalDate>
                {currentDate}
            </LocalDate>
        </LocalDataContainer>
    )
}
