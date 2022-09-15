import { getWeather } from "../services/getWeather"

export const getClimate = async coords => {
    //latitude and longitude
    try {
      const response = await getWeather(coords)
      return response
    } catch (e) {
      alert("Hubo un error al acceder a las coordenadas.")
      console.log(e)
    }
  }