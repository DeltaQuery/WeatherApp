import cloudy from "../assets/cloudy.png"
import moon from "../assets/moon.png"
import partlycloudy from "../assets/partlycloudy.png"
import raincloud from "../assets/raincloud.png"
import sunny from "../assets/sunny.png"
import cloudythunder from "../assets/cloudythunder.png"
import mist from "../assets/mist.png"
import location from "../assets/location.png"

export const getWeatherImg = weather => {
    if(weather === "Clouds") return cloudy
    if(weather === "Rain") return raincloud
    if(weather === "Clear") return moon

    return location
}