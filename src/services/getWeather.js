import { API_Key } from "./API"
import axios from "axios"

export const getWeather = async (coords) => {
    const { latitude, longitude } = coords
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}`
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_Key}`
    try {
       const weather = await axios.get(weatherUrl) 
       const forecast = await axios.get(forecastUrl)
       const response = [weather, forecast] 
       return response
    } catch (err) {
       console.log(err)
    }
}
