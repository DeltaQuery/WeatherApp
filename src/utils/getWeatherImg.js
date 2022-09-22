import cloudy from "../assets/cloudy.png"
import moon from "../assets/moon.png"
import partlycloudy from "../assets/partlycloudy.png"
import raincloud from "../assets/raincloud.png"
import sunny from "../assets/sunny.png"
import cloudythunder from "../assets/cloudythunder.png"
import mist from "../assets/mist.png"
import location from "../assets/location.png"
import rain from "../assets/rain.png"
import snow from "../assets/snow.png"


export const getWeatherImg = weather => {
    if(weather === "Clouds") return cloudy
    if(weather === "Rain") return rain
    if(weather === "Clear") return moon
    if(weather === "Snow") return snow
    if(weather === "Mist") return mist

    return location
}