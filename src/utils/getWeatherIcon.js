import humidity from "../assets/humidity.png"
import location from "../assets/location.png"
import sunrise from "../assets/sunrise.png"
import sunset from "../assets/sunset.png"
import temperature from "../assets/temperature.png"
import wind from "../assets/wind.png"
import winddegree from "../assets/winddegree.png"

export const getWeatherIcon = icon => {
    if(icon === "humidity") return humidity
    if(icon === "location") return location
    if(icon === "sunrise") return sunrise
    if(icon === "sunset") return sunset
    if(icon === "temperature") return temperature
    if(icon === "wind") return wind
    if(icon === "winddegree") return winddegree

    return location
}