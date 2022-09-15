import React, { useEffect } from 'react'
import { getClimate } from '../utils/getClimate'

export const GetGeolocation = ({setCoords, setLocation, setWeather}) => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    
      async function success(pos) {
        const crd = pos.coords
        setCoords({ lat: crd.latitude, lng: crd.longitude })
        const climate = await getClimate({ latitude: crd.latitude, longitude: crd.longitude })
        if (climate) {
          setWeather(climate)
          setLocation(climate[0].data.name + ", " + climate[0].data.sys.country)
        }
      }
    
      async function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
        setCoords({ lat: 40.416775, lng: -3.703790 })
        const climate = await getClimate({ latitude: 40.416775, longitude: -3.703790 })
        if (climate) {
          setWeather(climate)
          setLocation(climate[0].data.name + ", " + climate[0].data.sys.country)
        }
      }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options)
    },[])

}
